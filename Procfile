web: gunicorn todo_root.wsgi --log-file -
web: python manage.py migrate && gunicorn todo_root.wsgi
