from django.urls import path
from .admin_views import *

app_name = 'admin-category'

urlpatterns = [
    path('list', AdminCategoryListView.as_view(), name='index')
]
