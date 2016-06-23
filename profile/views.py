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

	return render_to_response('index.html', RequestContext(request, context))

#API for updating the 'inventory' global variable
def update_items(request):
	context = get_creator_items(request)
	print "is ajax!!!"
	return HttpResponse(context['inventory'], content_type="application/json")

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
	#TODO: not reassigning inventory like I would want right now....
	context = get_creator_items(request)
	return render_to_response('index.html', RequestContext(request, context))


