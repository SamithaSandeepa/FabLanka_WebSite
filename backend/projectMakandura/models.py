from django.db import models

# Create your models here.
class ProjectMakandura(models.Model):
    title_project_m = models.CharField(max_length=200)
    summery_project_m = models.CharField(max_length=200)
    # content_project_m = models.JSONField()
    # image_project_m = models.CharField(max_length=200)
