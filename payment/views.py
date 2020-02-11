import stripe
from django.urls import reverse
from django.conf import settings
from django.views import generic
from django.shortcuts import render
from django.contrib import messages
from django.http import HttpResponseRedirect, HttpResponse

stripe.api_key = settings.STRIPE_SECRET_KEY


# Create your views here.
class StripePaymentView(generic.TemplateView):
    template_name = 'global/stripe-payment.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['key'] = settings.STRIPE_PUBLISHABLE_KEY
        context['amount'] = self.amount
        return context

    @property
    def amount(self):
        if self.request.GET.get('amount'):
            return self.request.GET.get('amount')
        else:
            return 0


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
