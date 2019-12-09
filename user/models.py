from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Users(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    phone = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        db_table = 'user_details'
