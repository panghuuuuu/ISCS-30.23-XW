from authentication.services import *

# Put the emails here, each email is a string
emails = []

# This will automatically do the insertion to the server imported from that library above.
for i in emails:
	user_create(i)