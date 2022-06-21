from django.urls import path
from . import views

urlpatterns = [
    path('lat=<str:lat>&lng=<str:lng>/', views.GetRestrauntList.as_view()), #1日の詳細
]