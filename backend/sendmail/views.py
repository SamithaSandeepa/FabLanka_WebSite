from django.shortcuts import render
# views.py
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Contact

@csrf_exempt
def contact_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        contact = Contact(name=name, email=email, subject=subject, message=message)
        contact.save()

        # Send an email
        send_mail(
            subject,
            f"Name: {name}\nEmail: {email}\nMessage: {message}",
            'theekshanajayanuwan77@gmail.com',  # Replace with your email address
            ['theekshanajayanuwan77@gmail.com'],  # Replace with the recipient's email address
            fail_silently=False,
        )

        return JsonResponse({'message': 'Form submitted successfully.'})

    return JsonResponse({'message': 'Invalid request.'})
