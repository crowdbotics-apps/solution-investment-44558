from rest_framework import authentication
from person.models import Person, Person, Person
from .serializers import PersonSerializer, PersonSerializer, PersonSerializer
from rest_framework import viewsets


class PersonViewSet(viewsets.ModelViewSet):
    serializer_class = PersonSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Person.objects.all()
