# Generated by Django 4.1.7 on 2023-04-20 06:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='content',
            new_name='content_pastevent',
        ),
        migrations.RenameField(
            model_name='event',
            old_name='image',
            new_name='image_project_m',
        ),
        migrations.RenameField(
            model_name='event',
            old_name='summery',
            new_name='summery_pastevent',
        ),
        migrations.RenameField(
            model_name='event',
            old_name='title',
            new_name='title_pastevent',
        ),
    ]
