# Generated by Django 4.2.6 on 2023-10-24 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0003_alter_lesson_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='lesson',
            name='number',
            field=models.BigIntegerField(default=1),
            preserve_default=False,
        ),
    ]
