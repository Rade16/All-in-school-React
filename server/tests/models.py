from django.db import models
from django.contrib.auth.models import User
from lessons.models import Lesson


class Test(models.Model):
    lesson = models.OneToOneField(Lesson, on_delete=models.CASCADE, related_name='test',
                                  verbose_name='Урок (Обязательно)')
    name = models.CharField(max_length=150, verbose_name='Название теста (Обязательно)')
    mark_five_from = models.IntegerField(verbose_name='Сколько минимально баллов для оценки 5 (Обязательно)')
    mark_four_from = models.IntegerField(verbose_name='Сколько минимально баллов для оценки 4 (Обязательно)')
    mark_three_from = models.IntegerField(verbose_name='Сколько минимально баллов для оценки 3 (Обязательно)')

    passedTestUsers = models.ManyToManyField(User, through='PassedTest')

    class Meta:
        db_table = 'Test'
        verbose_name = 'Тест'
        verbose_name_plural = 'Тесты'

    def __str__(self):
        return self.name


class Question(models.Model):
    test = models.ForeignKey(Test, on_delete=models.CASCADE, verbose_name='Тест (Обязательно)')
    text = models.TextField(verbose_name='Вопрос (Обязательно)')

    class Meta:
        db_table = 'Question'
        verbose_name = 'Вопрос'
        verbose_name_plural = 'Вопросы'

    def __str__(self):
        return self.text


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, verbose_name='Вопрос (Обязательно)')
    text = models.TextField(verbose_name='Текст ответа (Обязательно)')
    is_correct = models.BooleanField(default=False, verbose_name='Правильность ответа (Обязательно)')

    class Meta:
        db_table = 'Answer'
        verbose_name = 'Ответ'
        verbose_name_plural = 'Ответы'

    def __str__(self):
        return self.text


class PassedTest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    test = models.ForeignKey(Test, on_delete=models.CASCADE)
    mark = models.IntegerField()

    class Meta:
        db_table = 'PassedTest'
        verbose_name = 'Прошедшие тест'
        verbose_name_plural = 'Прошедшие тесты'

    def __str__(self):
        return f'{self.user} {self.test.name}'
