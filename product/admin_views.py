from .models import Product
from django.views import generic
from django.contrib import messages
from django.shortcuts import redirect, HttpResponse
from category.models import Category, SubCategory
from django.contrib.auth.mixins import LoginRequiredMixin


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
        context['sub_categories'] = SubCategory.objects.all().order_by('sub_category_name')
        return context

    def post(self, request):
        product = Product(created_by_id=request.user.id, product_name=request.POST.get('name'),
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
