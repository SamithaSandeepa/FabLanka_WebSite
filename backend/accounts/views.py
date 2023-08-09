# accounts/views.py

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserAccount
from .serializers import UserCreateSerializer  # Import your user creation serializer

class CustomUserCreateView(APIView):
    def post(self, request, format=None):
        existing_accounts = UserAccount.objects.count()

        if existing_accounts >= 1:
            return Response(
                {"detail": "Only one account can be created."},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
