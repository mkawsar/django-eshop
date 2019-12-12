from django.urls import path
from .views import *

app_name = 'account'

urlpatterns = [
    path('login', loginView, name='login'),
    path('registration', registration, name='registration'),
    path('logout', user_logout, name='logout'),
]
