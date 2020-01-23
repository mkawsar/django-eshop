from django.urls import path
from .admin_views import *

app_name = 'admin-product'

urlpatterns = [
    path('list', ProductIndex.as_view(), name='index'),
    path('create', ProductAddView.as_view(), name='create'),
    path('details/image/<int:pk>/', ProductImageUpload.as_view(), name='product-image'),
    path('details/image/upload/<int:pk>/', ProductImage.as_view(), name='product-image-upload'),
    path('sub/category/<category_id>', GetProductSubCategory, name='get-product-sub-category'),
    path('ss/category/<sub_category_id>', GetProductSSCategory, name='get-product-ss-category')
]
