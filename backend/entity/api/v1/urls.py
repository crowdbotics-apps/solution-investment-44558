from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import EntityViewSet, EntityViewSet, EntityViewSet, EntityViewSet

router = DefaultRouter()
router.register("entity", EntityViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
