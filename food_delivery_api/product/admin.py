# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Product, ProductFeedback
# Register your models here.
admin.site.register(Product)
admin.site.register(ProductFeedback)