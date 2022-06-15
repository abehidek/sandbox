from fwf.main import Request, Response
def endpoint(url):
    print(url)
    def api(app):
        print("Decorator func, route: ")
        def application(environ, start_response):
            request = Request(environ)
            response = Response(start_response, "application/json", "utf-8")
            response = app(request, response)
            return response.send()
        return application
    return api