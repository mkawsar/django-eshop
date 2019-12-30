from django.db import models
from django.contrib.auth.models import User
from category.models import Category, SubCategory


# Create your models here.
class Product(models.Model):
    created_by = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    sub_category = models.ForeignKey(SubCategory, on_delete=models.DO_NOTHING)
    product_name = models.CharField(max_length=255, null=True, blank=True)
