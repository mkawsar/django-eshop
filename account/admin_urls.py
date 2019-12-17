from django.urls import path
from .admin_views import *

app_name = 'admin-account'

urlpatterns = [
    path('dashboard', adminDashboardView, name='dashboard')
]
