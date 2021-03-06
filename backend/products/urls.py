from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from products import views

router = routers.DefaultRouter()
router.register('product', views.ProductViewSet)
router.register('ratings', views.RatingsViewSet)

urlpatterns = [
    path('',include(router.urls))
]
