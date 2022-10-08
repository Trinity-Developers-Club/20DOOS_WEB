from django.shortcuts import render, redirect
from .models import cv
# Create your views here.
def home(request):
    return render(request, 'home_page.html')

def Generate_resume(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        country = request.POST.get('country')
        state = request.POST.get('state')
        address = request.POST.get('address')
        lastdegree = request.POST.get('lastdegree')
        degreename = request.POST.get('degreename')
        institute = request.POST.get('institute')
        dateofjoining = request.POST.get('dateofjoining')
        dateofEnding = request.POST.get('dateofEnding')
        favsport = request.POST.get('favsport')
        interest = request.POST.get('interest')
        shortBio = request.POST.get('shortBio')

        data = cv(name=name,email=email,phone=phone,country=country,state=state,
        address=address,lastdegree=lastdegree,degreename=degreename,institute=institute,
        dateofjoining=dateofjoining,dateofEnding=dateofEnding,favsport=favsport,interest=interest,shortBio=shortBio)

        data.save()

        context = {
            'name':name,'email':email,'phone':phone,'country':country,'state':state,
            'address':address,'lastdegree':lastdegree,'degreename':degreename,
            'institute':institute,'dateofjoining':dateofjoining,'dateofEnding':dateofEnding,
            'favsport':favsport,'interest':interest,'shortBio':shortBio
        }
    else:
        context = {'name':'no_data_found'}
    return render(request, 'index.html',context)