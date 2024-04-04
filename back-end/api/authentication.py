from flask import jsonify


def signup(connection, username, password, email, userType):
    # Take sample entry from database
    cursor = connection.cursor()

    query = "INSERT INTO Login (username, password, email, userType) VALUES (%s, %s, %s, %s)"

    cursor.execute(query, (username, password, email, userType))

    connection.commit()

    cursor.close()

    return jsonify({"error": False,
                    "message": "User successfully added"}), 200
