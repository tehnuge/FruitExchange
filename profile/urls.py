from django.conf.urls import url

from . import views

app_name = 'profile'
urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^modify_item/$', views.modify_item, name='modify items'),
	url(r'^update_items/$', views.update_items, name='update items'),

	#temporary views hack; picks up all other urls... need to redo this!!!!
	url(r'^\w+$', views.index, name='detail'),
	]
