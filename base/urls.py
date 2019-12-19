from django.urls import path, include

from base import settings
from django.conf.urls.static import static

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', include('dashboard.urls', namespace='dashboard')),
    path('user/', include('account.urls', namespace='account')),
    path('admin/', include('dashboard.admin_urls', namespace='admin-dashboard')),
    path('admin/product/', include('product.admin_urls', namespace='admin-product'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
