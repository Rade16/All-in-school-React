# Generated by Django 4.2.6 on 2023-10-17 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0003_alter_course_about_image_2_alter_course_about_text_2_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='header_image',
            field=models.ImageField(default='', upload_to='courses_images'),
            preserve_default=False,
        ),
    ]
