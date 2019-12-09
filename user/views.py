from django.contrib import messages
from django.http import HttpResponseRedirect
from django.shortcuts import render

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
            print(email)
            messages.success(request, 'Test')
            return HttpResponseRedirect(reverse('user:login'))
        except Exception as e:
            messages.error(request, 'Failed to user registration')
            return HttpResponseRedirect(reverse('user:login'))
