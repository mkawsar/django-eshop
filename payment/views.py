import stripe
from django.urls import reverse
from django.conf import settings
from django.shortcuts import render
from django.contrib import messages
from django.http import HttpResponseRedirect, HttpResponse

stripe.api_key = settings.STRIPE_SECRET_KEY


# Create your views here.
def stripe_payment_view(request):
    amount = request.GET.get('amount')
    stripe_key = settings.STRIPE_PUBLISHABLE_KEY
    return render(request, 'global/stripe-payment.html', {'amount': amount, 'key': stripe_key})


def stripe_payment_charge(request):  # new
    if request.method == 'POST':
        amount = request.POST.get('amount')
        charge = stripe.Charge.create(
            amount=amount + str('00'),
            currency='usd',
            description='A Django charge',
            source=request.POST['stripeToken']
        )
        messages.success(request, 'Thanks, you paid')
        return HttpResponseRedirect(reverse('dashboard:checkout'))
