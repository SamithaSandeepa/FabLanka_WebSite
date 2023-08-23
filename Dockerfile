FROM python:3.9.5-slim-buster
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY ./backend /app/

RUN pip install --upgrade pip --no-cache-dir
RUN pip install -r /app/requirements.txt --no-cache-dir


# Specify the command to run on container start
# CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
CMD ["gunicorn", "fablab_web.wsgi:application", "--bind", "0.0.0.0:8000"]
