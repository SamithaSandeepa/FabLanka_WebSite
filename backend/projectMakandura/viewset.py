from rest_framework import viewsets
from .serializers import ProjectMakanduraSerializers
from .models import ProjectMakandura
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from rest_framework_simplejwt.authentication import JWTAuthentication

class ProjectMakanduraViewset(viewsets.ModelViewSet):
    queryset = ProjectMakandura.objects.all()
    serializer_class = [ProjectMakanduraSerializers]
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]