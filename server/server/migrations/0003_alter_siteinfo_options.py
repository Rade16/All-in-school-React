# Generated by Django 4.2.6 on 2023-10-19 16:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_alter_siteinfo_options_alter_siteinfo_table'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='siteinfo',
            options={'verbose_name': 'Информация по сайту', 'verbose_name_plural': 'Информация по сайту'},
        ),
    ]
