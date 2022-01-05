from django.contrib import admin
from django.urls import path, include

from .views import register_user, login_user, index

urlpatterns = [
    path('', index, name='index'),
    path("signup", register_user),
    path("login", login_user),
]
