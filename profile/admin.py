from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import Produce
from .models import Location

admin.site.register(Produce)
# Register your models here.

class LocationInline(admin.StackedInline):
    model = Location
    can_delete = False
    verbose_name_plural = 'Location'


# Define a new User admin
class UserAdmin(BaseUserAdmin):
    inlines = (LocationInline, )

# Re-register UserAdmin
admin.site.unregister(User)
admin.site.register(User, UserAdmin)