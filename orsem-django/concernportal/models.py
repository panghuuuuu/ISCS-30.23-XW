from django.db import models
from blockinfo.models import *
from django.contrib.auth.models import User

import datetime

class Concern(models.Model):
    CONCERN_TYPES = (
        ('Block List / Block Generator / Block Sessions Concerns','Block List / Block Generator / Block Sessions Concerns'),
        ('Schedule / Program Concerns','Schedule / Program Concerns'),
        ('Onsite Sessions Concerns', 'Onsite Sessions Concerns'),
        ('Registration Concerns','Registration Concerns'),
        ('Website Concerns', 'Website Concerns'),
        ('Contacting LS Admin Concerns', 'Contacting LS Admin Concerns'),
        ('O-Laro Concerns', 'O-Laro Concerns'),
        ('O-Idol Concerns', 'O-Idol Concerns'),
        ('Merchandise Concerns', 'Merchandise Concerns'),
        ('Others', 'Others')
    )

    created_on = models.DateTimeField( auto_now_add=True )
    title = models.CharField(max_length=128, choices = CONCERN_TYPES)
    message = models.TextField()
    response = models.TextField(null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name="concerns")

    def __str__(self):
        return ("[%s] %s: %s Concern by %s" % ("Resolved" if self.response else "Unread", datetime.datetime.strftime(self.created_on, "%m/%d %H:%M"), self.title, self.user))

    def __repr__(self):
        return ("[%s] %s: %s Concern by %s" % ("Resolved" if self.response else "Unread", datetime.datetime.strftime(self.created_on, '%m/%d %H:%M'), self.title, self.user))

    def save(self, *args, **kwargs):
        if self.response:
            self.resolved = True
        super( Concern, self ).save( *args, **kwargs )