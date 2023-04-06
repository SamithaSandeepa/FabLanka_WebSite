from django.urls import include, path, re_path
from django.views.generic import TemplateView
from .router import router

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('api/', include(router.urls))
]


urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]