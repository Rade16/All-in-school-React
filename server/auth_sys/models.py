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

    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name='Пользователь профиля (Обязательно)')
    courses = models.ManyToManyField(Course, db_table='UserCourses', verbose_name='Курсы')

    first_name = models.CharField(max_length=150, verbose_name='Имя (Обязательно)')
    second_name = models.CharField(max_length=150, verbose_name='Фамилия (Обязательно)')
    last_name = models.CharField(max_length=150, verbose_name='Отчество (Обязательно)')

    telephone = models.CharField(max_length=20, null=True, blank=True, verbose_name='Телефон')
    gender = models.CharField(choices=genderChoices, null=True, blank=True, verbose_name='Гендер')
    type = models.CharField(choices=typeChoices, default=student, verbose_name='Тип профиля')
    photo = models.ImageField(upload_to='users_photos', null=True, blank=True, verbose_name='Фотография профиля')
    telegram = models.TextField(null=True, blank=True, verbose_name='Ссылка на телеграм')

    class Meta:
        db_table = 'Profile'
        verbose_name = 'Профиль'
        verbose_name_plural = 'Профили'

    def get_full_name(self):
        return f'{self.second_name} {self.first_name} {self.last_name}'

    def __str__(self):
        return self.user.username
