import json
import datetime
import jwt
import os
from dotenv import load_dotenv
from operator import itemgetter
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from passlib.context import CryptContext

from .models import User
from .serializers import UserSerializer
from .validator import validator

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))

# Create your views here.


@csrf_exempt
@require_http_methods("POST")
def register_user(request):
    try:
        credentials = json.loads(request.body)

        # validate input data
        err = validator(
            ["username", "email", "password", "password2", "address"], credentials
        )
        if len(err) > 0:
            return JsonResponse({"msg": err}, status=400)

        # get the input values
        username, email, password, password2, address = itemgetter(
            "username", "email", "password", "password2", "address"
        )(credentials)

        # check whether the email already exists
        user = User.objects.filter(email=email)
        if len(user) > 0:
            return JsonResponse({"msg": "Email already registered"}, status=403)

        # check matching of password and confirm password
        if password != password2:
            return JsonResponse({"msg": "Passwords do not match"}, status=400)

        # hash the password
        hashedPassword = pwd_context.hash(password)

        # create an user object and save it to the database
        newUser = User(
            userName=username, email=email, password=hashedPassword, address=address
        )
        newUser.save()

        # return the response
        return JsonResponse({"msg": "Successfully registered user"})
    except Exception as e:
        print("Exception occurred!!", e)
        return JsonResponse({"msg": "Internal server error"}, status=500)


@csrf_exempt
@require_http_methods("POST")
def login_user(request):
    try:
        credentials = json.loads(request.body)

        # validate input data
        err = validator(["email", "password"], credentials)
        if len(err) > 0:
            return JsonResponse({"msg": err}, status=400)

        # get the input values
        email, password = itemgetter("email", "password")(credentials)

        # check whether the email exists or not
        user = User.objects.filter(email=email)
        if len(user) == 0:
            return JsonResponse({"msg": "Email not registered"}, status=403)

        # verify the password
        if not pwd_context.verify(password, user[0].password):
            return JsonResponse({"msg": "Incorrect Password"}, status=403)

        # generate the jwt token
        token = jwt.encode(
            {
                "email": user[0].email,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=5),
            },
            SECRET_KEY,
        )

        # serialize the user object and return the response
        serializer = UserSerializer(user[0])
        return JsonResponse({"token": token, "user": serializer.data})
    except Exception as e:
        print("Exception occurred!!", e)
        return JsonResponse({"msg": "Internal server error"}, status=500)
