from django.shortcuts import render


def adminLoginView(request):
    return render(request, 'admin/auth/login.html')
