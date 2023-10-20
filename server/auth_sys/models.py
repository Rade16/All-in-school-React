from django.db import models
from django.contrib.auth.models import User
from courses.models import Course


class Profile(models.Model):
    genderMale = 'M'
    genderFemale = 'F'

    genderChoices = [
        (genderMale, 'Мужчина'),
        (genderFemale, 'Женщина')
    ]

    student = 'Студент'
    teacher = 'Преподаватель'

    typeChoices = [
        (student, student),
        (teacher, teacher)
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    courses = models.ManyToManyField(Course, db_table='UserCourses')

    first_name = models.CharField(max_length=150)
    second_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)

    telephone = models.CharField(max_length=20, null=True, blank=True)
    gender = models.CharField(choices=genderChoices, null=True, blank=True)
    type = models.CharField(choices=typeChoices, default=student)
    photo = models.ImageField(upload_to='users_photos', null=True, blank=True)
    telegram = models.TextField(null=True, blank=True)

    class Meta:
        db_table = 'Profile'
        verbose_name = 'Профиль'
        verbose_name_plural = 'Профили'

    def __str__(self):
        return self.user.username
