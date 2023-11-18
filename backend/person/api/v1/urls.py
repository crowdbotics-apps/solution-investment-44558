from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PersonViewSet, PersonViewSet, PersonViewSet, PersonViewSet

router = DefaultRouter()
router.register("person", PersonViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
