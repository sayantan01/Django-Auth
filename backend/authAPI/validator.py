import re

email_regex = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"


def validator(fields, values):
    err = ""
    for i in range(len(fields)):
        if fields[i] not in values.keys():
            return "{} is required".format(fields[i])
        if fields[i] == "email" and not re.fullmatch(email_regex, values[fields[i]]):
            err = "Invalid email"
    return err
