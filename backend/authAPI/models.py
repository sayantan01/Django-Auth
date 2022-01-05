from django.db import models

# Create your models here.


class User(models.Model):
    userName = models.CharField(max_length=100, blank=False)
    email = models.CharField(max_length=100, blank=False, unique=True)
    password = models.CharField(max_length=100, blank=False)
    address = models.CharField(max_length=512, blank=False)

    def __str__(self):
        return self.email
