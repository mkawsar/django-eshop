from django.shortcuts import render
from django.contrib import messages
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from .forms import UserRegistrationForm
from .models import Roles, Users

# Create your views here.
from django.urls import reverse


def login(request):
    if request.method == 'POST':
        email = request.POST.get('email', None)
        password = request.POST.get('password', None)
        try:
            pass
        except:
            messages.warning(request, 'Wrong Email')
            return HttpResponseRedirect(reverse('user:login'))
    return render(request, 'auth/login.html')


def registration(request):
    if request.method == 'POST':
        try:
            email = request.POST.get('email')
            username = request.POST.get('username')
            first_name = request.POST.get('first_name')
            last_name = request.POST.get('last_name')
            password = request.POST.get('password')
            phone = request.POST.get('phone')
            forms = UserRegistrationForm(request.POST)
            if forms.is_valid():
                user = User.objects.create_user(first_name=first_name, last_name=last_name, email=email,
                                                username=username, password=password)
                user.save()
                details = Users(user_id=user.id, phone=phone)
                details.save()
                roles = Roles(user_id=user.id, is_admin=False)
                roles.save()
                messages.success(request, 'Your registration is successfully!')
                return HttpResponseRedirect(reverse('user:login'))
            else:
                messages.error(request, forms.errors)
                return HttpResponseRedirect(reverse('user:login'))
        except Exception as e:
            messages.error(request, 'Failed to user registration')
            return HttpResponseRedirect(reverse('user:login'))
