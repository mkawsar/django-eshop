from django.urls import path
from .admin_views import *

app_name = 'admin-category'

urlpatterns = [
    path('list', AdminCategoryListView.as_view(), name='index'),
    path('create', AdminCreateCategoryView.as_view(), name='create-category'),
    path('sub/category/list', AdminSubCategoryListView.as_view(), name='sub-category-list'),
    path('sub/category/create', AdminSubCategoryCreateView.as_view(), name='sub-category-create'),
    path('ss/category/list', AdminSSCategoryListView.as_view(), name='ss-category-list'),
    path('ss/category/create', AdminSSCategoryCreateView.as_view(), name='ss-category-create'),
]
