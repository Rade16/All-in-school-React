# Generated by Django 4.2.6 on 2023-10-24 18:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0005_alter_course_about_image_2'),
        ('lessons', '0005_pastlesson'),
    ]

    operations = [
        migrations.AddField(
            model_name='pastlesson',
            name='course',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='courses.course'),
            preserve_default=False,
        ),
    ]
