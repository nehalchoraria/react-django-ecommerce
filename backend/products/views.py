from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import ProductSerializer,RatingsSerializer
from .models import Product,Ratings
from rest_framework.response import Response

class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint for ProductSerializer
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class RatingsViewSet(viewsets.ModelViewSet):
    """
    API endpoint for RatingsSerializer
    """
    queryset = Ratings.objects.all()
    serializer_class = RatingsSerializer

    def retrieve(self, request, pk=None):
        print(request.GET.get('id'))
        movie = Ratings.objects.get(id=2)
        queryset = Ratings.objects.all()
        serializer_class = RatingsSerializer
        # serializer = RatingsSerializer(queryset)
        return Response()