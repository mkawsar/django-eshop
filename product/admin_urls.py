from django.urls import path
from .admin_views import *

app_name = 'admin-product'

urlpatterns = [
    path('list', ProductIndex.as_view(), name='index'),
    path('create', ProductAddView.as_view(), name='create'),
]
