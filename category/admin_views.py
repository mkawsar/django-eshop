import json
from django.views import generic
from django.shortcuts import render
from django.http import HttpResponse
from django.template.defaultfilters import slugify
from .models import Category, SubCategory, SubSubCategory
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage


@login_required
def AdminCategoryListView(request):
    category_list = Category.objects.values('id', 'name', 'created_by__first_name').order_by('name')
    paginator = Paginator(category_list, 10)
    page = request.GET.get('page', 1)
    try:
        categories = paginator.page(page)
    except PageNotAnInteger:
        categories = paginator.page(1)
    except EmptyPage:
        categories = paginator.page(paginator.num_pages)
    return render(request, 'admin/category/index.html', {'categories': categories, 'title': 'Category List'})


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


class AdminSubCategoryListView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/category/sub-category/list.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Sub Category List'
        context['sub_categories'] = json.dumps(
            list(SubCategory.objects.values('id', 'created_by__first_name', 'sub_category_name',
                                            'category__name').order_by('sub_category_name')))
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


class AdminSSCategoryListView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/category/ss-category/list.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Sub Sub Category'
        context['ss_categories'] = json.dumps(list(
            SubSubCategory.objects.values('id', 'name', 'category__name', 'sub_category__sub_category_name',
                                          'created__first_name')))
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


class AdminCategoryEditView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/category/edit.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categoryID'] = kwargs.get('pk')
        context['category'] = Category.objects.get(pk=kwargs.get('pk'))
        return context

    def post(self, request, *args, **kwargs):
        try:
            category = Category.objects.filter(pk=kwargs.get('pk'))
            category.update(name=request.POST.get('name'), category_slug=slugify(request.POST.get('name')))
            return HttpResponse(json.dumps({'status': True, 'message': 'Product category updated successfully!'}),
                                content_type="application/json")
        except Exception as e:
            return HttpResponse(json.dumps({'status': False, 'message': 'Failed to update product category'}),
                                content_type="application/json")
