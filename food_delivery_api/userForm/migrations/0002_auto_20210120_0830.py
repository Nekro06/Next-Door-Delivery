# Generated by Django 3.1 on 2021-01-20 00:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userForm', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='latitude',
            field=models.FloatField(default=121.0537),
        ),
        migrations.AddField(
            model_name='users',
            name='longitude',
            field=models.FloatField(default=14.6193),
        ),
        migrations.AlterField(
            model_name='users',
            name='address',
            field=models.TextField(default='', max_length=2000),
        ),
    ]
