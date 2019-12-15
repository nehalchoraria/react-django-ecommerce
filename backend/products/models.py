from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator, MinValueValidator

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    categoryname = models.CharField(max_length=50,)
    subcategoryname = models.CharField(max_length=50,)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.subcategoryname

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    
    productname = models.CharField(max_length=50)
    description = models.CharField(max_length=1000,default="")
    seller = models.ForeignKey(get_user_model(),null=True,on_delete = models.SET_NULL,default=get_user_model())
    price = models.IntegerField(validators=[MinValueValidator(1)]) 
    subcategoryname = models.ForeignKey(Category, on_delete=models.SET_NULL , null = True , related_name = 'product_subcategoryname')
    units = models.IntegerField(validators=[MinValueValidator(1)])
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.productname