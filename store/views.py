from django.shortcuts import render
from .models import Product, Banner


def home(request):

    banners = Banner.objects.all()

    # Latest products
    new_arrivals = Product.objects.order_by('-id')[:10]

    # Category sliders
    pokemon = Product.objects.filter(category='Pokemon')[:10]

    anime = Product.objects.filter(category='Anime')[:10]

    hero = Product.objects.filter(category='Hero')[:10]

    return render(request, 'store/home.html', {
        'new_arrivals': new_arrivals,
        'pokemon': pokemon,
        'anime': anime,
        'hero': hero,
        'banners': banners
    })


def collection(request):

    products = Product.objects.all()

    context = {
        'products': products
    }

    return render(request, 'store/collection.html', context)