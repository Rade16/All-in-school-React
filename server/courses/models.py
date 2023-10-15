from django.db import models


class Course(models.Model):
    name = models.CharField(max_length=150)
    price = models.IntegerField(default=0)
    image = models.ImageField(upload_to='courses_images')
    
    class Meta:
        db_table = 'Courses'
        verbose_name = 'Курс'
        verbose_name_plural = 'Курсы'
    
    def __str__(self):
        return self.name
