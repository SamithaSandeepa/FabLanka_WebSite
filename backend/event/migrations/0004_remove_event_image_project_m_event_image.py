# Generated by Django 4.1.7 on 2023-08-08 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0003_alter_event_image_project_m'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='image_project_m',
        ),
        migrations.AddField(
            model_name='event',
            name='image',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]
