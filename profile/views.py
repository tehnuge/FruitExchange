import json
from django.http import HttpResponse, Http404
from .models import Produce
from django.template import RequestContext

from django.shortcuts import render, get_object_or_404, render_to_response, redirect

def index(request):
	inventory = []
	#if submit, save new item
	if request.method =="POST":
		item = request.POST['item']
		qty = request.POST['qty']
		creator = request.user
		newItem = Produce(creator = creator, produce_text = item, quantity = qty)
		newItem.save()

	#show user's inventory: iterate over Produce and append to inventory array
	for prod in Produce.objects.filter(creator=request.user.id):
		single = {}
		single["id"] = prod.id
		single["name"] = prod.produce_text
		single["amount"] = prod.quantity
		inventory.append(single)
	context = {
		'inventory': json.dumps(inventory)
	}
	return render_to_response('index.html', RequestContext(request, context))

def modify_item(request):
	if request.is_ajax():
		itemid = request.POST.get('id')
		newText = request.POST.get('newText')
		quantity = request.POST.get('quantity')
		i = Produce.objects.select_for_update().get(id=itemid)	
		if newText is not i.produce_text:
			i.produce_text = newText
			print newText
		i.save()

	return HttpResponse(json.dumps(itemid), content_type='application/json')
