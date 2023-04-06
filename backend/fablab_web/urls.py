from django.urls import include, path, re_path
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from projectMakandura import viewset
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

router = DefaultRouter()
router.register("projectmakandura", viewset.ProjectMakanduraViewset, basename= 'projectmakandura')

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('', include(router.urls))
]


urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]