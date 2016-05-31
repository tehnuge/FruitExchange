from django.conf.urls import url

from . import views

app_name = 'profile'
urlpatterns = [
	url(r'^$', views.index, name='index'),
	#temporary views hack... need to redo this!!!!
	url(r'^\w+$', views.index, name='detail'),
	url(r'^(?P<question_id>[0-9]+)/results/$', views.results, name='results'),
	url(r'^(?P<question_id>[0-9]+)/vote/$', views.vote, name='vote'),
	]
	