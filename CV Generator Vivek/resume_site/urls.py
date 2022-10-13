
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('Generate_resume/', views.Generate_resume,name='Generate_resume'),
]
