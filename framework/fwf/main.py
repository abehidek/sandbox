from typing import Literal
from urllib import parse

class Request():
    def __init__(self, environ) -> None:
        self.environ = environ
    
    @property
    def args(self):
        args_list = parse.parse_qs(self.environ["QUERY_STRING"])
        return {k:v[0] for k, v in args_list.items()}

class Response:
    def __init__(
        self,
        start_response,
        content_type: Literal["text/html", "text/plain", "application/json"],
        charset: Literal["utf-8"],
    ) -> None:
        self.start_response = start_response
        self.content_type = content_type
        self.charset = charset
        self.status = "200 OK"
        self.headers = None
        self.message = None

    def get_header(self):
        return [("Content-Type", f"{self.content_type}; {self.charset}")]

    def send(self):
        self.headers = (
            self.get_header()
            if self.headers is None
            else self.headers
        )
        self.start_response(self.status, self.headers)
        self.message = [] if self.message is None else self.message
        return self.message