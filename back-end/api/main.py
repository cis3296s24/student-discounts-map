from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from passlib.hash import sha256_crypt
import database
import authentication
import discounts

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

@app.route('/authenticate', methods=[ 'POST' ])
def api_authenticate():
    data = request.json

    if data:
        username = data.get('username')
        password = data.get('password')
    else:
        return jsonify({"error": True,
                        "message": "Invalid JSON payload"}), 400

    return authentication.authenticate(con, username, password)

@app.route('/submit', methods=[ 'POST' ])
def api_submit():
    data = request.json

    if data:
        establishmentName = data.get('establishmentName')
        address = data.get('address')
        city = data.get('city')
        state = data.get('state')
        zip = data.get('zip')
        discount = data.get('discount')
        submitterID = data.get('submitterID')
        lat = data.get('lat')
        lng = data.get('lng')
    else:
        return jsonify({"error": True,
                        "message": "Invalid JSON payload"}), 400

    return discounts.submit(con, establishmentName, address, city, state, zip, discount, submitterID, lat, lng)

@app.route('/retrieve', methods=[ 'POST' ])
def api_retrieve():
    data = request.json

    if data:
        lat = data.get('lat')
        lng = data.get('lng')
    else:
        return jsonify({"error": True,
                        "message": "Invalid JSON payload"}), 400

    return discounts.retrieve(con, lat, lng)

@app.route('/retrieve-all', methods=[ 'GET' ])
def api_retrieveAll():
    return discounts.retrieveAll(con)


if __name__ == '__main__':
    print("Server is starting...")
    print("Connecting to database...")
    con = database.connect()
    if not con:
        print("ERROR: Could not connect to database")
        exit(1)
    print("Connected to database")
    app.run(host='0.0.0.0', port='5000')
