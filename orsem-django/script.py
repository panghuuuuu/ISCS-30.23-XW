from authentication.services import *
import csv

with open('FreshmanEmails.csv') as emails:
    reader = csv.reader(emails)
    for email in reader:
        user_create(email[0])