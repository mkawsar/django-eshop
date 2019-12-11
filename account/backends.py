from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend


class EmailOrUsernameBackend(ModelBackend):

    def authenticate(self, username=None, password=None, **kwargs):
        print('test')
        if '@' in username:
            kwargs = {'email': username}
        else:
            kwargs = {'username': username}
        try:
            user = get_user_model().objects.get(**kwargs)
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            return None

    def get_user(self, username):
        try:
            user = get_user_model().objects.get(pk=username)
            if user.is_active:
                return user
            return None
        except get_user_model().DoesNotExist:
            return None
