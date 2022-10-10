from flask import Flask

app=Flask(__name__)

@app.route("/login")
def login():
    return {"msg":["msg1","msg2","msg3"]  }

if __name__=='__main__':
    app.run(debug=True)