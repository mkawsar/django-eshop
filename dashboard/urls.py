from django.urls import path
from .views import *

app_name = 'dashboard'

urlpatterns = [
    path('', dashboard, name='index'),
    path('checkout', checkout, name='checkout'),
    path('cart', cart, name='cart'),
]
