from django.db import models


class Course(models.Model):
    name = models.CharField(max_length=150)
    price = models.IntegerField(default=0)
    image = models.ImageField(upload_to='courses_images')

    header_image = models.ImageField(upload_to='courses_images')

    about_image_1 = models.ImageField(upload_to='courses_images')
    about_text_1 = models.TextField()
    about_text_2 = models.TextField(null=True, blank=True)
    about_image_2 = models.ImageField(upload_to='courses_images')

    you_get_title_1 = models.CharField(max_length=150)
    you_get_text_1 = models.TextField()

    you_get_title_2 = models.CharField(max_length=150, null=True, blank=True)
    you_get_text_2 = models.TextField(null=True, blank=True)

    you_get_title_3 = models.CharField(max_length=150, null=True, blank=True)
    you_get_text_3 = models.TextField(null=True, blank=True)

    about_image_3 = models.ImageField(upload_to='courses_images')

    class Meta:
        db_table = 'Courses'
        verbose_name = 'Курс'
        verbose_name_plural = 'Курсы'

    def __str__(self):
        return self.name
