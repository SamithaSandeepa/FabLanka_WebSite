from rest_framework import viewsets
from .import models
from .import serializers

class ProjectMakanduraViewset(viewsets.ModelViewSet):
    queryset = models.ProjectMakandura.objects.all()
    serializer_class = serializers.ProjectMakanduraSerializers