from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import database
import entries

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/proof-of-concept', methods=[ 'GET' ])
def api_proof_of_concept():
    return entries.proof_of_concept(con)


if __name__ == '__main__':
    print("Server is starting...")
    print("Connecting to database...")
    con = database.connect()
    if not con:
        print("ERROR: Could not connect to database")
        exit(1)
    print("Connected to database")
    app.run(host='0.0.0.0', port='5000')
