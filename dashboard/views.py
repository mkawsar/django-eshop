from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib import messages
from django.urls import reverse


# Create your views here.
def dashboard(request):
    return render(request, 'dashboard/index.html')


def checkout(request):
    return render(request, 'global/checkout.html')


def cart(request):
    return render(request, 'global/cart.html')
