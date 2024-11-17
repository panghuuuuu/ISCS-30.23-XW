FROM python:3.10.12-slim-buster

WORKDIR /app/orsem-django

COPY ./orsem-django/ /app/orsem-django/

RUN python3 -m venv /opt/venv && \
    /opt/venv/bin/pip install --upgrade pip && \
    /opt/venv/bin/pip install -r requirements.txt

EXPOSE 8000

ENTRYPOINT ["/bin/bash", "-c", "echo 'Waiting for postgres...'; \
    sleep 5; \
    echo 'PostgreSQL started'; \
    echo 'Migrating database...'; \
    /opt/venv/bin/python manage.py makemigrations --settings=orsem.bsettings; \
    /opt/venv/bin/python manage.py migrate --settings=orsem.bsettings; \
    echo 'Database migrated'; \
    echo 'Creating superuser...'; \
    /opt/venv/bin/python manage.py createsuperuser --settings=orsem.bsettings || true; \
    echo 'Superuser created'; \
    echo 'Collecting static files...'; \
    /opt/venv/bin/python manage.py collectstatic --noinput --settings=orsem.bsettings;\
    echo 'Static files collected'; \
    echo 'Starting server...'; \
    /opt/venv/bin/python manage.py runserver 0.0.0.0:8000 --settings=orsem.bsettings"]
