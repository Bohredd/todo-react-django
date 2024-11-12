web: gunicorn todo_root.wsgi --log-file -
web: python app/manage.py migrate && gunicorn todo_root.wsgi
