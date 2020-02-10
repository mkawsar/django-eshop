from django.db import models
from django.contrib.auth.models import User
from category.models import Category, SubCategory, SubSubCategory


# Create your models here.
class Product(models.Model):
    created_by = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    sub_category = models.ForeignKey(SubCategory, on_delete=models.DO_NOTHING)
    sub_sub_category = models.ForeignKey(SubSubCategory, on_delete=models.DO_NOTHING)
    product_name = models.CharField(max_length=255, null=True, blank=True)
    product_title = models.TextField(blank=True, null=True)
    quantity = models.CharField(max_length=100, null=True, blank=True)
    purchase_price = models.CharField(max_length=100, null=True, blank=True)
    sell_price = models.CharField(max_length=100, null=True, blank=True)
    product_size = models.CharField(max_length=100, null=True, blank=True)
    product_description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'products'


# Create product images tables
class ProductImages(models.Model):
    product = models.ForeignKey(Product, on_delete=models.DO_NOTHING)
    image = models.ImageField(default='no_image.png', upload_to='images/product')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'product_images'
