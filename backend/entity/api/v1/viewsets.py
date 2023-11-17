from rest_framework import authentication
from entity.models import Entity, Entity, Entity
from .serializers import EntitySerializer, EntitySerializer, EntitySerializer
from rest_framework import viewsets


class EntityViewSet(viewsets.ModelViewSet):
    serializer_class = EntitySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Entity.objects.all()
