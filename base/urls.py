from django.urls import path, include

from base import settings
from django.conf.urls.static import static

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', include('dashboard.urls', namespace='dashboard')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
