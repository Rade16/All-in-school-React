# Generated by Django 4.2.6 on 2023-10-19 16:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='siteinfo',
            options={'verbose_name': 'Информация по сайту'},
        ),
        migrations.AlterModelTable(
            name='siteinfo',
            table='Информация по сайту',
        ),
    ]