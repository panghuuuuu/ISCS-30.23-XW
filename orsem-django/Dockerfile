FROM python:3.10.12-slim-buster

WORKDIR /app/orsem-django

COPY . /app/orsem-django
COPY .env.example /app/orsem-django/.env

RUN python3 -m venv /opt/venv && \
    /opt/venv/bin/pip install --upgrade pip && \
    /opt/venv/bin/pip install -r requirements.txt

RUN /opt/venv/bin/pip install gunicorn

ENV DJANGO_SETTINGS_MODULE=orsem.prodsettings

EXPOSE 8080

CMD ["/opt/venv/bin/gunicorn", "orsem.wsgi:application", "--bind", "0.0.0.0:8080"]