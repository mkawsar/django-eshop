from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required
def adminDashboardView(request):
    return render(request, 'admin/dashboard/index.html', {'title': 'Dashboard'})
