# Generated by Django 4.2.6 on 2023-10-13 17:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auth_sys', '0002_alter_profile_table'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='profile',
            options={'verbose_name': 'Профиль'},
        ),
    ]
