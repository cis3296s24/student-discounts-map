import datetime
import jwt
from flask import jsonify
from passlib.handlers.sha2_crypt import sha256_crypt


def signup(connection, username, password, email, userType):
    # Take sample entry from database
    cursor = connection.cursor()

    query = "INSERT INTO Login (username, password, email, userType) VALUES (%s, %s, %s, %s)"

    cursor.execute(query, (username, password, email, userType))

    connection.commit()

    cursor.close()

    return jsonify({"error": False,
                    "message": "User successfully added"}), 200

def authenticate(connection, username, password):
    cursor = connection.cursor()

    query = "SELECT * FROM Login WHERE username = %s"

    cursor.execute(query, (username,))

    result = cursor.fetchone()

    if result is None:
        return jsonify({'error': True,
                        'message': 'Authentication failed'}), 400

    if not sha256_crypt.verify(password, result[ 2 ]):
        return jsonify({'error': True,
                        'message': 'Authentication failed'}), 401

    accessToken = generateAccessToken(result[ 0 ], result[ 4 ])
    response = jsonify({'success': True,
                        'message': 'Authentication successful',
                        'access_token': accessToken,
                        'user_id': result[ 0 ],})

    response.set_cookie('access_token', accessToken)
    return response, 200

def generateAccessToken(userID, accountType):
    # Define the payload
    payload = {
        'sub': userID,  # Subject (user ID)
        'account_type': accountType,  # Account type
        'iat': datetime.datetime.now(),  # Issued at timestamp
        'exp': datetime.datetime.now() + datetime.timedelta(hours=1)  # Expiry timestamp (1 hour from now)
    }

    # Define the key to be kept secure
    key = 'thisIsASecretKeyAndNoOneWillEverGuessIt'

    # Generate the access token
    accessToken = jwt.encode(payload, key, algorithm='HS256')

    return accessToken