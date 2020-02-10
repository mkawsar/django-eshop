from django.urls import path
from .views import *

app_name = 'payment'

urlpatterns = [
    path('stripe/payment/view', stripe_payment_view, name='stripe-payment-view'),
    path('stripe/payment/charge', stripe_payment_charge, name='stripe-payment-charge'),  # new
]
