from django.db import models

class News(models.Model):
    title = models.CharField(max_length=200)
    summary = models.TextField(null=True, blank=True)
    content = models.JSONField(blank=True, null=True)
    image = models.TextField()
    status = models.BooleanField(default=True)
    videos = models.JSONField(null=True, blank=True)

    def __str__(self):
        return self.title
