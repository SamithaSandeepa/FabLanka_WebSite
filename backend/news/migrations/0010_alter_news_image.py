# Generated by Django 4.1.7 on 2023-08-02 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0009_alter_news_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='image',
            field=models.FileField(upload_to='media/news/'),
        ),
    ]
