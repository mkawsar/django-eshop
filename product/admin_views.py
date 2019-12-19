from django.shortcuts import render


# Create your views here.
def productIndex(request):
    return render(request, 'admin/product/index.html', {'title': 'Product'})
