from rest_framework import serializers
from entity.models import Entity, Entity


class EntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entity
        fields = "__all__"
