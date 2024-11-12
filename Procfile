web: gunicorn todo_root.wsgi:application --bind 0.0.0.0:8000 --log-file -
web: python manage.py migrate && gunicorn todo_root.wsgi:application --bind 0.0.0.0:8000
