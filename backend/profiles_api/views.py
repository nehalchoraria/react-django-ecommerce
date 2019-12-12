from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework import status,viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings

from profiles_api import serializers,models,permissions


class Products(APIView):
    '''Test API View'''

    serializer_class = serializers.HelloSerializer

    def get(self,request,format = None):
        print(request)
        '''Returns a list of API views features'''
        an_APIview = [
            '1','2','3','4'
        ]
        return Response({'message':'Hello','an_apiview':an_APIview})

    def post(self,request):
        '''Create hello message with our name'''
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data.get('name')
            message = f'Hello {name}'
            return Response({'message':message})
        else:
            return Response(
                serializer.errors,
                status = status.HTTP_400_BAD_REQUEST 
            )

    def put(self,request,pk=None):
        return Response({'method':'PUT'})

    def patch(self,request,pk=None):
        return Response({'method':'PATCH'})
    
    def delete(self,request,pk=None):
        return Response({'method':'DELETE'})


class UserProfileViewSet(viewsets.ModelViewSet):
    '''Handle creating and updating profiles'''
    serializer_class = serializers.UserProfileSerializer
    queryset = models.UserProfiles.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.update_on_profile,)
    filter_backends = (filters.SearchFilter,)
    search_fields = {'name','email'}


class UserLoginAPIView(ObtainAuthToken):
    '''Handle creating user authentication tokens'''
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES