from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from products.serializers import PersonSerializer
from products.models import Person

class PersonViewSet(viewsets.ModelViewSet):
    """
    API endpoint that for PersonSerializer
    """
    queryset = Person.objects.all()
    serializer_class = PersonSerializer