from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product

class PersonViewSet(viewsets.ModelViewSet):
    """
    API endpoint that for PersonSerializer
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer