from django.conf import settings
from django.db import models


class Entity(models.Model):
    "Generated Model"
    entity_id = models.BigIntegerField()
    name = models.TextField(
        null=True,
        blank=True,
    )
    licenceNo = models.TextField(
        null=True,
        blank=True,
    )
    establishedDate = models.DateField(
        null=True,
        blank=True,
    )


# Create your models here.
