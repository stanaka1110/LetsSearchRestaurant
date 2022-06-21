from rest_framework.response import Response
from rest_framework.views import APIView
from .getRestrauntList import getRestrauntList

class GetRestrauntList(APIView):
    def get(self, request, lat, lng):
        
        res_list = getRestrauntList(lat, lng)
        return Response(res_list)