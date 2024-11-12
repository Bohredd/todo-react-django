web: gunicorn todo_project.todo_project.wsgi --log-file -
web: python todo_project/manage.py migrate && gunicorn todo_project.todo_project.wsgi
