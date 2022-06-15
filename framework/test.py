from fwf.app import endpoint

@endpoint("/")
def application(request, response):
    name = request.args.get("name", ""); print(name)
    response.content_type = "application/json"
    response.message = [
        "{'name': '123'}".encode("utf-8")
    ]
    return response