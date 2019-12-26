from .models import Product,Ratings
from rest_framework import serializers


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'productname','description', 'fulldescription' , 'price' , 'units' , 'subcategoryname' , 'timestamp']

class RatingsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ratings
        fields = ['id','productId', 'comments' , 'rating' , 'images']
