import json
from flask import Flask, request
from flask_cors import CORS

api=Flask(__name__)
CORS(api)

@api.route('/login', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return {"msg": "Wrong email or password"}
    return {"login":True}


@api.route("/logout", methods=["POST"])
def logout():
    return {"login": False}

if __name__=='__main__':
    api.run(debug=True)