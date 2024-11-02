python manage.py makemigrations --settings=orsem.bsettings
python manage.py migrate --settings=orsem.bsettings --run-syncdb
python manage.py runserver --settings=orsem.bsettings