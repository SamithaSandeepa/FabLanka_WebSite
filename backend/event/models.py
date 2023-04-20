from django.db import models

# Create your models here.
class Event(models.Model):
    title_pastevent = models.CharField(max_length=200)
    summery_pastevent = models.TextField()
    content_pastevent = models.JSONField()
    image_project_m = models.TextField()
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.title
