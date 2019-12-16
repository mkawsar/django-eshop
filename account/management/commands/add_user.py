from account.models import Roles, Users
from django.contrib.auth.models import User
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = 'Add system user'

    def handle(self, *args, **kwargs):
        Roles.objects.all().delete()
        Users.objects.all().delete()
        User.objects.all().delete()
        user = User.objects.create_superuser(username='admin', password='123456',
                                             email='admin@example.com',
                                             first_name='Admin', last_name='Example')
        user.save()
        details = Users(user_id=user.id, phone='01717000111')
        details.save()
        roles = Roles(user_id=user.id, is_admin=True)
        roles.save()
