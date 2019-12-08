from django.shortcuts import render


# Create your views here.
def dashboard(request):
    return render(request, 'dashboard/index.html')


def login(request):
    return render(request, 'auth/login.html')


def checkout(request):
    return render(request, 'global/checkout.html')


def cart(request):
    return render(request, 'global/cart.html')
