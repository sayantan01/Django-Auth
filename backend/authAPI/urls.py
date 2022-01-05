from django.contrib import admin
from django.urls import path, include

from .views import register_user, login_user

urlpatterns = [
    path("signup", register_user),
    path("login", login_user),
]
