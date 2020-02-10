import os
import json
import uuid
from django.conf import settings

from .models import Product, ProductImages
from django.views import generic
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.template.defaultfilters import slugify
from django.shortcuts import redirect, HttpResponse
from category.models import Category, SubCategory, SubSubCategory
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core import serializers
from django.http import JsonResponse


# Create your views here.
class ProductIndex(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/product/index.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        string = 'Product'
        context['title'] = string.upper()
        return context


# Product add template with POST function
class ProductAddView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/product/create.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        string = 'Add Product'
        context['title'] = string.upper()
        context['categories'] = Category.objects.all().order_by('name')
        return context

    def post(self, request):
        product = Product(created_by_id=request.user.id, product_name=request.POST.get('name'),
                          product_title=request.POST.get('title'),
                          product_description=request.POST.get('product_details'),
                          category_id=request.POST.get('category_id'),
                          sub_category_id=request.POST.get('sub_category_id'))
        product.save()
        messages.success(request, 'Product added to successfully!')
        return redirect('admin-product:product-image', pk=product.id)


class ProductImageUpload(LoginRequiredMixin, generic.DetailView):
    model = Product
    template_name = 'admin/product/product-image.html'
    context_object_name = 'product'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        string = 'Product Details'
        context['title'] = string.upper()
        context['categories'] = Category.objects.all().order_by('name')
        context['sub_categories'] = SubCategory.objects.all().order_by('sub_category_name')
        return context


class ProductImage(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/product/add-image.html'

    def get_context_data(self, *args, **kwargs):
        context = super(ProductImage, self).get_context_data(**kwargs)
        context['productID'] = kwargs.get('pk')
        return context

    def post(self, request, *args, **kwargs):
        product = Product.objects.get(pk=kwargs.get('pk'))
        files = request.FILES.getlist('file')
        product_name = slugify(product.product_name)
        for file in files:
            extension = os.path.splitext(str(file))[1]
            filename = "%s_%s%s" % (product_name, uuid.uuid4().hex[:6].lower(), extension)
            with open(settings.MEDIA_ROOT + "/images/product/" + filename, 'wb+') as destination:
                image = ProductImages(product_id=kwargs.get('pk'), image=filename)
                image.save()
                for chunk in file.chunks():
                    destination.write(chunk)
                    return HttpResponse(
                        json.dumps({'status': True, 'message': 'Product images uploaded successfully!'}),
                        content_type="application/json")


# Get product sub category using proudct category for add product
@login_required
def GetProductSubCategory(request, category_id):
    sub_categories = SubCategory.objects.filter(category_id=category_id).all().order_by('sub_category_name')
    return HttpResponse(serializers.serialize('json', sub_categories))


@login_required
def GetProductSSCategory(request, sub_category_id):
    ss_categories = SubSubCategory.objects.filter(sub_category=sub_category_id).all().order_by('name')
    return HttpResponse(serializers.serialize('json', ss_categories))
