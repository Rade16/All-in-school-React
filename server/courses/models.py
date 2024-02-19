from django.db import models


class Course(models.Model):
    name = models.CharField(max_length=150, verbose_name='Название (Обязательно)')
    price = models.IntegerField(default=0, verbose_name='Цена (Обящательно)')
    image = models.ImageField(upload_to='courses_images/', verbose_name='Картинка курса (Обязательно)')

    header_image = models.ImageField(upload_to='courses_images/',
                                     verbose_name='Картинка заголовка курса (Обязательное)')

    about_image_1 = models.ImageField(upload_to='courses_images', verbose_name='Картинка в описании (Обязательно)')
    about_text_1 = models.TextField(verbose_name='Первое описание курса (Обязательное)')
    about_text_2 = models.TextField(null=True, blank=True, verbose_name='Второе описание курса')
    about_image_2 = models.ImageField(upload_to='courses_images', verbose_name='Картинка в описании (Обязательно)')

    you_get_title_1 = models.CharField(max_length=150)
    you_get_text_1 = models.TextField()

    you_get_title_2 = models.CharField(max_length=150, null=True, blank=True)
    you_get_text_2 = models.TextField(null=True, blank=True)

    you_get_title_3 = models.CharField(max_length=150, null=True, blank=True)
    you_get_text_3 = models.TextField(null=True, blank=True)

    upload_date = models.DateField(auto_now=True)
    about_image_3 = models.ImageField(upload_to='courses_images', verbose_name='Картинка в описании (Обязательно)')

    class Meta:
        db_table = 'Courses'
        verbose_name = 'Курс'
        verbose_name_plural = 'Курсы'

    def __str__(self):
        return self.name
