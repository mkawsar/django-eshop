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
        print('test')
        return HttpResponseRedirect(reverse('user:login'))
