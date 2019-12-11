from django import forms


class UserRegistrationForm(forms.Form):
    first_name = forms.CharField(max_length=100, required=True)
    last_name = forms.CharField(max_length=100, required=True)
    email = forms.CharField(max_length=100, required=True)
    username = forms.CharField(max_length=50, required=True)
    password = forms.CharField(max_length=100, required=True, min_length=6)
    phone = forms.CharField(max_length=100, required=True)
