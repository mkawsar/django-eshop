from django.views import generic
from django.shortcuts import render
from category.models import Category, SubCategory


# Create your views here.
def productIndex(request):
    return render(request, 'admin/product/index.html', {'title': 'Product'})


# Product add template with POST function
class ProductAddView(generic.TemplateView):
    template_name = 'admin/product/create.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Add Product'
        context['categories'] = Category.objects.all().order_by('name')
        context['sub_categories'] = SubCategory.objects.all().order_by('sub_category_name')
        return context
