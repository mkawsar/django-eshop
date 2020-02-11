from django.urls import path
from .views import *

app_name = 'payment'

urlpatterns = [
    path('stripe/payment/view', StripePaymentView.as_view(), name='stripe-payment-view'),
    path('stripe/payment/charge', stripe_payment_charge, name='stripe-payment-charge'),  # new
]
