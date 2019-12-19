from django.views import generic
from django.contrib.auth.mixins import LoginRequiredMixin


class AdminCategoryListView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'admin/category/index.html'

    def get_context_data(self, **kwargs):
        context = super(AdminCategoryListView, self).get_context_data(**kwargs)
        context['title'] = 'Categories'
        return context
