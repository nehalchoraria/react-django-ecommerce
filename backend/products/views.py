from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product

class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint for ProductSerializer
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer