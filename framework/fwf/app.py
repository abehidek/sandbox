from fwf.main import Request, Response

def api(app):
    def application(environ, start_response):
        request = Request(environ)
        response = Response(start_response, "application/json", "utf-8")
        response = app(request, response)
        return response.send()
    return application