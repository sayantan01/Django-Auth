from django.contrib import admin
from django.urls import path, include

from .views import register_user, login_user, index, get_users, delete_user, update_user

urlpatterns = [
    path("", index, name="index"),
    path("signup", register_user),
    path("login", login_user),
    path("users", get_users),
    path("delete", delete_user),
    path("udpate", update_user),
]
