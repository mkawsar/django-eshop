from django.views import generic
from django.contrib.auth.mixins import LoginRequiredMixin


class AdminCategoryListView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/category/index.html'

    def get_context_data(self, **kwargs):
        context = super(AdminCategoryListView, self).get_context_data(**kwargs)
        context['title'] = 'Categories'
        return context


class AdminCreateCategoryView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/category/create-category.html'

    def get_context_data(self, **kwargs):
        context = super(AdminCreateCategoryView, self).get_context_data(**kwargs)
        context['title'] = 'Category Create'
        return context

    def post(self, request):
        pass
