import json
from django.http import HttpResponse, Http404
from profile.models import Produce
from django.template import RequestContext

from django.shortcuts import render, get_object_or_404, render_to_response

def main(request):
	inventory = []
	#iterate over Produce and append to inventory array
	for prod in Produce.objects.all():
		single = {}
		single["name"] = prod.produce_text
		single["amount"] = prod.quantity
		inventory.append(single)

	context = {
		'inventory': json.dumps(inventory)
	}
	return render_to_response('index.html', RequestContext(request, context))