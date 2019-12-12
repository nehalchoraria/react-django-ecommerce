from django.urls import path,include
from profiles_api import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('profile', views.UserProfileViewSet)

urlpatterns =[
    path('products/',views.Products.as_view()),
    path('login/',views.UserLoginAPIView.as_view()),
    path('',include(router.urls))  # sets a list of urls
]