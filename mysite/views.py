import json
from django.http import HttpResponse, Http404, HttpResponseRedirect
from profile.models import Produce, Location
from django.template import RequestContext
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as auth_login, authenticate, REDIRECT_FIELD_NAME
from django.conf import settings
from django.utils.http import is_safe_url
from django.contrib.auth.models import User


from django.shortcuts import render, get_object_or_404, render_to_response,resolve_url

#helper function to send item data
def get_creator_items(request):
    #show user's inventory: iterate over Produce and append to inventory array
    inventory = []
    for prod in Produce.objects.filter(creator=request.user.id):
        single = {}
        single["id"] = prod.id
        single["name"] = prod.produce_text
        single["amount"] = prod.quantity
        inventory.append(single)

    marketItems = []
    #iterate over Produce and append to inventory array
    for prod in Produce.objects.all():
        single = {}
        single["id"] = prod.id
        single["name"] = prod.produce_text
        single["amount"] = prod.quantity
        #print prod.creator.location
        try:
            single["street"] = prod.creator.location.street
            single["city"] = prod.creator.location.city
            single["state"] = prod.creator.location.state
        except Location.DoesNotExist:
            pass
        single["creator"] = prod.creator.get_username()
        marketItems.append(single)
    context = {
        'inventory': json.dumps(inventory),
        'marketItems': json.dumps(marketItems)
    }
    return context

def main(request):
    context = get_creator_items(request)
    return render(request, 'index.html', context)

def signup(request):
    context = {}
    if request.method == "POST":       
        username = request.POST.get('username')
        password = request.POST.get('password')
        if User.objects.filter(username=username):
            context['error'] = "This username is not Available."
        else:
            user = User.objects.create_user(username= username, password=password)
            print "User created"
    return render(request, 'index.html', RequestContext(request, context))

def login(request, template_name='index.html',
          redirect_field_name='REDIRECT_FIELD_NAME',
          redirect_override=None,
          authentication_form=AuthenticationForm,
          current_app=None):
    """Login: this will redirect to settings.LOGIN_REDIRECT_URL on success"""

    if not redirect_override:
        redirect_to = request.GET.get(redirect_field_name, '') or request.POST.get(redirect_field_name, '')
    else:
        redirect_to = redirect_override

    form = {
        'errors': {}
    }

    if request.method == "POST":
        username = request.POST.get('username', None)
        password = request.POST.get('password', None)

        is_valid = True

        if not username:
            form['errors']['username'] = ['Please provide a username. Note that it is case-sensitive.']
            is_valid = False
        if not password:
            form['errors']['password'] = ['Please provide a password. Note that it is case-sensitive.']
            is_valid = False

        if is_valid:
            # Ensure the user-originating redirection url is safe.
            if not is_safe_url(url=redirect_to, host=request.get_host()):
                redirect_to = resolve_url(settings.LOGIN_REDIRECT_URL)
            
            user = authenticate(username=request.POST['username'], password=request.POST['password'],)
            if user is not None:
                # Okay, security check complete. Log the user in.
                auth_login(request, user)

                #if 'username' in request.POST:
                    #log('Login attempt for username "%s" successful.' % request.POST['username'])

                if request.session.test_cookie_worked():
                    request.session.delete_test_cookie()

                return HttpResponseRedirect(redirect_to)
            else:
                #if 'username' in request.POST:
                   # log('Login attempt for username "%s" unsuccessful.' % request.POST['username'])
                #else:
                    #log('Login attempt for unknown user unsuccessful.')

                form['non_field_errors'] = [("Please enter a correct username and password. "
                                             "Note that both fields may be case-sensitive.")]

    # request.session.set_test_cookie()

    # current_site = get_current_site(request)

    context = get_creator_items(request)

    return render(request, template_name, context)
