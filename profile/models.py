from __future__ import unicode_literals
from django.conf import settings
from django.contrib.auth.models import User
from datetime import datetime


from django.db import models

class Produce(models.Model):
	creator = models.ForeignKey(settings.AUTH_USER_MODEL, null=True)
	produce_text = models.CharField(max_length=100)
	quantity = models.IntegerField(default=0)
	def __str__(self):
		return self.produce_text
		
class Location(models.Model):
	user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
	street = models.CharField(max_length=100)
	city = models.CharField(max_length=100)
	state = models.CharField(max_length = 100)

class Transaction(models.Model):
	buyer = models.OneToOneField(settings.AUTH_USER_MODEL, null=False, related_name='buyer')
	seller = models.OneToOneField(settings.AUTH_USER_MODEL, null=False, related_name='seller')
	item = models.CharField(max_length=100)
	amount = models.IntegerField(default=1)
	date = models.DateTimeField(default=datetime.now)
