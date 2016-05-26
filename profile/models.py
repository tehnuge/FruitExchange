from __future__ import unicode_literals
from django.conf import settings

from django.db import models

class Question(models.Model):
	question_text = models.CharField(max_length=200)
	pub_date = models.DateTimeField('date published')
	def __str__(self):
		return self.question_text

class Choice(models.Model):
	question = models.ForeignKey(Question, on_delete=models.CASCADE)
	choice_text = models.CharField(max_length=200)
	votes = models.IntegerField(default=0)
	def __str__(self):
		return self.choice_text

class Produce(models.Model):
	creator = models.ForeignKey(settings.AUTH_USER_MODEL, null=True)
	produce_text = models.CharField(max_length=100)
	quantity = models.IntegerField(default=0)
	def __str__(self):
		return self.produce_text
