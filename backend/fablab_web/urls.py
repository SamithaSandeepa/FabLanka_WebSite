from django.urls import include, path, re_path
from django.views.generic import TemplateView
from book.views import BookList, BookCreate

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('books/', BookList.as_view(), name='book_list'),
    path('books/create/', BookCreate.as_view(), name='book_create'),
    # vcff
]


urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]