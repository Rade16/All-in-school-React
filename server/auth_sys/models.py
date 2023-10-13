from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    genderMale = 'M'
    genderFemale = 'F'

    genderChoices = [
        (genderMale, 'Male'),
        (genderFemale, 'Female')
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    first_name = models.CharField(max_length=150)
    second_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)

    telephone = models.BigIntegerField(null=True, blank=True)
    gender = models.CharField(choices=genderChoices, default=genderMale)
    photo = models.ImageField(upload_to='users_photo', null=True, blank=True)

    class Meta:
        db_table = 'profile'
        verbose_name = 'Профиль'
        verbose_name_plural = 'Профили'

    def __str__(self):
        return self.user.username
