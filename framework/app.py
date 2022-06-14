from os import environ
from tracemalloc import start
from typing import Literal
from unicodedata import name
from urllib import parse

class Response():
    def __init__(self,
                 start_response,
                 content_type: Literal["text/html", "text/plain", "application/json"],
                 charset: Literal["utf-8"]) -> None:
        self.start_response = start_response
        self.status = "200 OK"
        self.headers = [('Content-Type', f'{content_type}; {charset}')]
    
    def send(self, response):
        self.start_response(self.status, self.headers)
        self.response = [] if response is None else response
        return response

class Request():
    def __init__(self, environ) -> None:
        self.environ = environ
    
    @property
    def args(self):
        args_list = parse.parse_qs(self.environ["QUERY_STRING"])
        return {k:v[0] for k, v in args_list.items()}

def req_res_app(app):
    def application(environ, start_response):
        request = Request(environ)
        response = Response(start_response, "application/json", "utf-8")
        return app(request, response)
    
    return application

@req_res_app
def application(request, response):
    name = request.args.get("name", "")
    return response.send([b'{"name": 321 }'])
    # status = '200 OK'
    # headers = [('Content-Type', 'text/html; charset=utf8')]
    # start_response(status, headers)
    # return ["oi".encode('utf-8')]

# def application(environ, start_response):
#     status = '200 OK'
#     headers = [('Content-Type', 'text/html; charset=utf8')]
#     start_response(status, headers)
    
#     path_info = environ["PATH_INFO"].replace("/","")
#     if path_info == "debug":
#         return [repr(environ).encode('utf-8')]
    
#     GET = parse.parse_qs(environ["QUERY_STRING"])
#     name = GET.get('name', [''])[0]
    
#     return [(f'<h1>Hello, {name}!</h1>').encode('utf-8')] 

#     # if environ["REQUEST_METHOD"] == "GET": print("Metodo get")
    
#     # path_info = environ["PATH_INFO"].replace("/","")
#     # print(path_info)
    
#     return ["oi".encode('utf-8')]
#     # if not environ["QUERY_STRING"] == "":
#     #     name_value = environ["QUERY_STRING"].split("=")[1]
#     #     string = "<h1>Hello "+name_value+"</h1>"
#     #     return [string.encode('utf-8')]
    