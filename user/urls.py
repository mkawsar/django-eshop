from django.urls import path
from .views import *

app_name = 'user'

urlpatterns = [
    path('login', login, name='login'),
    path('registration', registration, name='registration'),
]
