"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from django.contrib.auth import views
from . import views
#import profile.views

urlpatterns = [
	url(r'^login/?$', views.login, name="login"),
    url(r'^logout/?$', views.logout_view, name="logout"),
    url(r'^logged_out/?$', views.logged_out, name="logged_out"),
    url(r'^signup/$', views.signup, name='signup'),
	url(r'^$', views.main, name='main'),
    url(r'^main/$', views.main, name='main'),
    url(r'^admin/', admin.site.urls),
    url(r'^profile/', include('profile.urls'))
]
urlpatterns += staticfiles_urlpatterns()
