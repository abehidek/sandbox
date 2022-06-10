from wsgiref.simple_server import make_server
from app import application

if __name__ == '__main__':
    with make_server('', 5000, application) as server:
        server.server_activate()