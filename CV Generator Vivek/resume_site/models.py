from django.db import models

# Create your models here.
class cv(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    phone = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    address = models.TextField()
    lastdegree = models.CharField(max_length=50)
    degreename = models.CharField(max_length=50)
    institute = models.CharField(max_length=200)
    dateofjoining = models.DateField(auto_now_add=True, blank=True)
    dateofEnding = models.DateField(auto_now_add=True, blank=True)
    favsport = models.CharField(max_length=50)
    interest = models.CharField(max_length=50)
    shortBio = models.TextField()

    def __str__(self):
        return self.name