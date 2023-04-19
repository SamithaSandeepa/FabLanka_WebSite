from django.shortcuts import render

# Create your views here.
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .models import News
from .serializers import NewsSerializer

class NewsList(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = [AllowAny]

class NewsDetail(generics.RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = [AllowAny]

class NewsCreate(generics.CreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class NewsUpdate(generics.UpdateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def get_permissions(self):
        if self.request.method == 'PATCH':
            self.permission_classes = [IsAuthenticated]
        return super().get_permissions()

class NewsDelete(generics.DestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


    
