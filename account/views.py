from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from .models import Roles, Users
from .forms import UserRegistrationForm

# Create your views here.
from django.urls import reverse


def loginView(request):
    if request.method == 'POST':
        try:
            username = request.POST.get('username')
            password = request.POST.get('password')
            user_logged_in = authenticate(username=username, password=password)
            if user_logged_in is not None:
                login(request, user_logged_in)
                if request.user.roles.is_admin:
                    return HttpResponseRedirect(reverse('admin-dashboard:index'))
                return HttpResponseRedirect(reverse('dashboard:index'))
            else:
                messages.error(request, 'Invalid Credentials')
                return HttpResponseRedirect(reverse('account:login'))
        except Exception as e:
            messages.warning(request, e)
            return HttpResponseRedirect(reverse('account:login'))
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
                return HttpResponseRedirect(reverse('account:login'))
            else:
                messages.error(request, forms.errors)
                return HttpResponseRedirect(reverse('account:login'))
        except Exception as e:
            messages.error(request, 'Failed to user registration!')
            return HttpResponseRedirect(reverse('account:login'))


@login_required()
def user_logout(request):
    logout(request)
    messages.success(request, 'Logout successfully!')
    return HttpResponseRedirect(reverse('account:login'))
