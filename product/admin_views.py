from .models import Product
from django.views import generic
from django.shortcuts import render, HttpResponse
from category.models import Category, SubCategory
from django.contrib.auth.mixins import LoginRequiredMixin


# Create your views here.
#def productIndex(request):
#    return render(request, 'admin/product/index.html', {'title': 'Product'})
class ProductIndex(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/product/index.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Product'
        return context



# Product add template with POST function
class ProductAddView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/product/create.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Add Product'
        context['categories'] = Category.objects.all().order_by('name')
        context['sub_categories'] = SubCategory.objects.all().order_by('sub_category_name')
        return context

    def post(self, request):
        print(request.POST.get('product_details'))
        return HttpResponse(request.POST.get('product_details'))
