# Generated by Django 2.2 on 2019-12-15 04:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import profiles_api.models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20191214_1637'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='seller',
            field=models.ForeignKey(default=profiles_api.models.UserProfile, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]
