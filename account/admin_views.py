from django.shortcuts import render, HttpResponse, HttpResponseRedirect


def adminLoginView(request):
    if request.method == 'POST':
        return HttpResponse(request.POST.get('username'))
    return render(request, 'admin/auth/login.html')


def adminDashboardView(request):
    return render(request, 'admin/dashboard/index.html')
