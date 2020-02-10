from .admin_views import *
from django.urls import path

app_name = 'admin-category'

urlpatterns = [
    path('list', AdminCategoryListView, name='index'),
    path('create', AdminCreateCategoryView.as_view(), name='create-category'),
    path('sub/category/list', AdminSubCategoryListView, name='sub-category-list'),
    path('sub/category/create', AdminSubCategoryCreateView.as_view(),  name='sub-category-create'),
    path('ss/category/list', AdminSSCategoryListView, name='ss-category-list'),
    path('ss/category/create', AdminSSCategoryCreateView.as_view(), name='ss-category-create'),
    path('edit/<int:pk>', AdminCategoryEditView.as_view(), name='edit-category'),
    path('delete/<category_id>', AdminCategoryDelete, name='delete-category'),
    path('ss/category/delete/<ss_category_id>', AdminDeleteSSCategory, name='delete-ss-category'),
    path('sub/category/delete/<sub_category_id>', AdminDeleteSubCategory, name='delete-sub-category'),
]
