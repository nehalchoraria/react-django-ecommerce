from django.db import models

class Person(models.Model):
    id = models.AutoField(primary_key=True)
    
    productname = models.CharField(max_length=50)
    price = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        '''Return string representation'''
        return self.productname