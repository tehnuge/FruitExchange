from __future__ import unicode_literals
from django.conf import settings

from django.db import models

class Produce(models.Model):
	creator = models.ForeignKey(settings.AUTH_USER_MODEL, null=True)
	produce_text = models.CharField(max_length=100)
	quantity = models.IntegerField(default=0)
	def __str__(self):
		return self.produce_text
