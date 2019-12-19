from django.urls import path
from .admin_views import *

app_name = 'admin-dashboard'

urlpatterns = [
    path('dashboard', adminDashboardView, name='index')
]
