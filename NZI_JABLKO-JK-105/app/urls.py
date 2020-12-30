from django.urls import path
from .views import SignUpView
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    #strona rejestracji
    path('signup/', SignUpView.as_view(), name='signup'),

    #zmiana hasła
    path('password_change/', auth_views.PasswordChangeView.as_view(), name='password_change'),
    path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(), name='password_change_done'),

    #reset hasła:
    path('password_reset/', auth_views.PasswordResetView.as_view(), name='password_reset_form'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),

    #rejestraca z e-mailem
    path('register/', views.register, name='register'),
]
