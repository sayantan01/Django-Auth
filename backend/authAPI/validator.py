import re
import jwt
import os
from dotenv import load_dotenv
from .models import User

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")

email_regex = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"


def validator(fields, values):
    err = ""
    for i in range(len(fields)):
        if fields[i] not in values.keys():
            return "{} is required".format(fields[i])
        if fields[i] == "email" and not re.fullmatch(email_regex, values[fields[i]]):
            err = "Invalid email"
    return err


def jwt_validator(request):
    if "HTTP_AUTHORIZATION" not in request.META.keys():
        return "No token provided"
    auth_header = request.META["HTTP_AUTHORIZATION"].split()
    if len(auth_header) < 2 or auth_header[0] != "Bearer":
        return "Invalid token"
    jwt_token = auth_header[1]
    try:
        payload = jwt.decode(jwt_token, SECRET_KEY, algorithms=["HS256"])
        email: str = payload.get("email")
        if email is None:
            return "Invalid credentials"
        user = User.objects.filter(email=email)
        if len(user) == 0:
            return "Invalid credentials"
    except Exception as e:
        print(e)
        return str(e)
    return ""
