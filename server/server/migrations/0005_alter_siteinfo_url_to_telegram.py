# Generated by Django 5.0.2 on 2024-02-19 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0004_alter_siteinfo_table'),
    ]

    operations = [
        migrations.AlterField(
            model_name='siteinfo',
            name='url_to_telegram',
            field=models.TextField(verbose_name='Ссылка на группу в ТГ'),
        ),
    ]
