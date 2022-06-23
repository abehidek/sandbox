from fwf.app import endpoint
import json

@endpoint("/")
def application(request, response):
    name = request.args.get("name", ""); print(name)
    response.content_type = "application/json"
    response.message = [
        json.dumps({ 
            "name": name 
        }).encode("utf-8")
    ]
    return response