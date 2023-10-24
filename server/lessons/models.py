from django.db import models
from django.contrib.auth.models import User
from courses.models import Course


class Lesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    number = models.BigIntegerField()

    name = models.CharField(max_length=150)
    description_title = models.CharField(max_length=150)
    text = models.TextField()
    video = models.FileField(upload_to='lesson_videos', null=True, blank=True)

    class Meta:
        db_table = 'Lesson'
        verbose_name = 'Урок'
        verbose_name_plural = 'Уроки'

    def __str__(self):
        return f'{self.number}) {self.name} (Курс: {self.course.name})'


class PastLesson(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)

    class Meta:
        db_table = 'PastLesson'

    def __str__(self):
        return self.lesson.name