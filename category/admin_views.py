import json
from django.views import generic
from django.http import HttpResponse
from .models import Category, SubCategory, SubSubCategory
from django.contrib.auth.decorators import login_required
from django.template.defaultfilters import slugify
from django.contrib.auth.mixins import LoginRequiredMixin


class AdminCategoryListView(LoginRequiredMixin, generic.ListView):
    template_name = 'admin/category/index.html'
    model = Category
    context_object_name = 'categories'
    ordering = ['name']

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Category List'
        # context['categories'] = Category.objects.all()
        return context


class AdminCreateCategoryView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/category/create-category.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Category Create'
        return context

    def post(self, request):
        try:
            category = Category(created_by_id=request.user.id, name=request.POST.get('name'),
                                category_slug=slugify(request.POST.get('name')))
            category.save()
            return HttpResponse(json.dumps({'status': True, 'message': 'Product category added successfully!'}),
                                content_type="application/json")
        except Exception as e:
            return HttpResponse(json.dumps({'status': False, 'message': 'Failed to add product category'}),
                                content_type="application/json")


class AdminSubCategoryListView(LoginRequiredMixin, generic.ListView):
    template_name = 'admin/category/sub-category/list.html'
    model = SubCategory
    context_object_name = 'categories'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Sub Category List'
        return context


class AdminSubCategoryCreateView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/category/sub-category/create.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = Category.objects.all().order_by('name')
        return context

    def post(self, request):
        try:
            category = SubCategory(created_by_id=request.user.id, category_id=request.POST.get('category_id'),
                                   sub_category_name=request.POST.get('name'),
                                   sub_category_slug=slugify(request.POST.get('name')))
            category.save()
            return HttpResponse(json.dumps({'status': True, 'message': 'Product sub category added successfully!'}),
                                content_type="application/json")
        except Exception as e:
            return HttpResponse(json.dumps({'status': False, 'message': 'Failed to add product sub category'}),
                                content_type="application/json")


class AdminSSCategoryListView(LoginRequiredMixin, generic.ListView):
    template_name = 'admin/category/ss-category/list.html'
    model = SubSubCategory
    context_object_name = 'ss_categories'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Sub Sub Category'
        return context


class AdminSSCategoryCreateView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/category/ss-category/create.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Sub Sub Category'
        context['categories'] = Category.objects.all().order_by('name')
        context['sub_categories'] = SubCategory.objects.all().order_by('sub_category_name')
        return context

    def post(self, request, *args, **kwargs):
        try:
            category = SubSubCategory(created_id=request.user.id, category_id=request.POST.get('category_id'),
                                      sub_category_id=request.POST.get('sub_category_id'),
                                      name=request.POST.get('name'), slug=slugify(request.POST.get('name')))
            category.save()
            return HttpResponse(json.dumps({'status': True, 'message': 'Product sub category added successfully!'}),
                                content_type="application/json")
        except Exception as e:
            return HttpResponse(json.dumps({'status': False, 'message': 'Failed to add product sub category'}),
                                content_type="application/json")
