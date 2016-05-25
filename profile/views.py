import json
from django.http import HttpResponse, Http404
from .models import Question
from django.template import RequestContext

from django.shortcuts import render, get_object_or_404, render_to_response

def index(request):
	latest_question_list = Question.objects.order_by('-pub_date')[:5]
	context = {
		'latest_question_list': latest_question_list,
		'inventory': json.dumps({
			'pear': 2,
			'apple': 10,
			'orange': 50
			})
	}
	return render_to_response('profile/index.html', RequestContext(request, context))

def detail(request, question_id):
	question = get_object_or_404(Question, pk = question_id)
	return render(request, 'profile/detail.html', {'question': question})

def results(request, question_id):
	response = "You're looking at the results of question %s."
	return HttpResponse(response % question_id)

def vote(request, question_id):
	return HttpResponse("you're voting on question %s" % question_id)


