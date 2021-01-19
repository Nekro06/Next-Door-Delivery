from rest_framework import serializers, fields
from .models import Rider

class RiderSerializer(serializers.ModelSerializer):
    Password = serializers.CharField(required=True)
    
    class Meta:
        model = Rider
        fields = (
                 'id',
                 'RiderNo',
        		 'FirstName',
        		 'LastName',
        		 'preferred_name',
        		 'address',
        		 'City',
        		 'Province',
        		 'Country',
        		 'ContactNo',
        		 'SecondaryContactNo',
        		 'PlateNo',
        		 'active_rider',
        		 'RiderVehicle',
        		 'Username',
        		 'Password',)

        