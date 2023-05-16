from django.db import models

# Create your models here.
class News(models.Model):
    title = models.CharField(max_length=200)
    summery = models.TextField()
    content = models.JSONField()
    image = models.TextField()
    status = models.BooleanField(default=True)
    videos = models.JSONField(null=True, blank=True)

    def __str__(self):
        return self.title
