from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from passlib.hash import sha256_crypt
import database
import authentication

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/signup', methods=[ 'POST' ])
def api_signup():
    data = request.json

    if data:
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
    else:
        return jsonify({"error": True,
                        "message": "Invalid JSON payload"}), 400

    password = sha256_crypt.hash(password)
    userType = "user"

    return authentication.signup(con, username, password, email, userType)

if __name__ == '__main__':
    print("Server is starting...")
    print("Connecting to database...")
    con = database.connect()
    if not con:
        print("ERROR: Could not connect to database")
        exit(1)
    print("Connected to database")
    app.run(host='0.0.0.0', port='5000')
