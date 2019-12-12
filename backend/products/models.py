from django.db import models


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    categoryname = models.CharField(max_length=50,)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.categoryname

class Subcategory(models.Model):
    id = models.AutoField(primary_key=True)
    categoryname = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategoryname = models.CharField(max_length=50,)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.subcategoryname

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    
    productname = models.CharField(max_length=50)
    description = models.CharField(max_length=1000,default="")
    seller = models.CharField(max_length=20)
    price = models.IntegerField() 
    categoryname = models.ForeignKey(Category, on_delete=models.SET_NULL, null = True)
    subcategoryname = models.ForeignKey(Subcategory, on_delete=models.SET_NULL , null = True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.productname