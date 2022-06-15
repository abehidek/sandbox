from fwf.app import api 

@api
def application(request, response):
    name = request.args.get("name", ""); print(name)
    response.content_type = "text/html"
    response.message = [
        f"<h1>{name}</h1>".encode("utf-8")
    ]
    return response