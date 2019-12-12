from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from products import views

router = routers.DefaultRouter()
router.register('prod', views.PersonViewSet)

urlpatterns = [
    path('',include(router.urls))
]
