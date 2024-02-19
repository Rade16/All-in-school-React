# Generated by Django 5.0.2 on 2024-02-19 10:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0007_alter_lesson_course_alter_lesson_description_title_and_more'),
        ('tests', '0005_answer_is_correct'),
    ]

    operations = [
        migrations.AlterField(
            model_name='test',
            name='lesson',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='test', to='lessons.lesson', verbose_name='Урок (Обязательно)'),
        ),
    ]
