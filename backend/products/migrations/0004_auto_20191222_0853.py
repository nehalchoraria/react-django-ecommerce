# Generated by Django 2.2.8 on 2019-12-22 08:53

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import profiles_api.models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0003_auto_20191215_0455'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='description',
            new_name='fulldescription',
        ),
        migrations.AddField(
            model_name='product',
            name='smalldesc',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.CreateModel(
            name='Ratings',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('comments', models.CharField(default='', max_length=1000)),
                ('rating', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ('images', models.FileField(upload_to='mydocs/', verbose_name='Document')),
                ('productId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.Product')),
                ('userId', models.ForeignKey(default=profiles_api.models.UserProfile, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]