from rest_framework import serializers
from .models import  ProjectMakandura

class ProjectMakanduraSerializers(serializers.ModelSerializer):
    class Meta:
        model = ProjectMakandura
        fields = '__all__'