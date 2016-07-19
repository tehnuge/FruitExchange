import json
from django.http import HttpResponse, Http404, HttpResponseRedirect
from .models import Produce
from django.template import RequestContext
from django.shortcuts import render, get_object_or_404, render_to_response, redirect

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
        single["street"] = prod.creator.location.street
        single["city"] = prod.creator.location.city
        single["state"] = prod.creator.location.state
        single["creator"] = prod.creator.get_username()
        marketItems.append(single)
    context = {
        'inventory': json.dumps(inventory),
        'marketItems': json.dumps(marketItems)
    }
    return context

def index(request):
	#if submit, save new item
	if request.method =="POST" and request.POST.get('action') == 'new':
		item = request.POST['item']
		qty = request.POST['qty']
		creator = request.user
		newItem = Produce(creator = creator, produce_text = item, quantity = qty)
		newItem.save()

	context = get_creator_items(request)

	return render(request, 'index.html', context)

#NOT BEING USED BY profile.jsx anymore, DELETE??? API for updating the 'inventory' global variable
#I dont need to alter the 'inventory' variable since react is taking care of how it looks
'''
def update_items(request):
	context = get_creator_items(request)
	print "is ajax!!!"
	return HttpResponse(context['inventory'], content_type="application/json")
'''

#editing items
def modify_item(request):
	if request.is_ajax() and request.POST.get('action') == 'save':
		itemid = request.POST.get('id')
		newText = request.POST.get('newText')
		quantity = request.POST.get('quantity')
		i = Produce.objects.select_for_update().get(id=itemid)	
		if newText is not i.produce_text:
			i.produce_text = newText
		i.save()
	if request.is_ajax() and request.POST.get('action') == 'destroy':
		itemid = request.POST.get('id')
		Produce.objects.filter(id=itemid).delete()
	context = get_creator_items(request)
	return render(request, 'index.html', context)


