from django.db import models

class SiteInfo(models.Model):
    name = 'Информация по сайту'
    url_to_telegram = models.TextField()

    class Meta:
        db_table = 'SiteInfo'
        verbose_name = 'Информация по сайту'
        verbose_name_plural = 'Информация по сайту'

    def __str__(self):
        return self.name