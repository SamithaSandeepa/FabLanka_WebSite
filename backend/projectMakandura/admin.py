from django.contrib import admin
from .models import ProjectMakandura

# Register your models here.
@admin.register(ProjectMakandura)
class ProjectMakanduraAdmin(admin.ModelAdmin):
    list_display = ['id', 'title_project_m', 'summery_project_m']