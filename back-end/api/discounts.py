from flask import jsonify


def submit(con, name, establishment_name, address, city, state, zip, location, discount, review):
    cur = con.cursor()

    query = "INSERT INTO Discounts (name, establishment_name, address, city, state, zip, location, discount, review) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"

    cur.execute(query, (name, establishment_name, address, city, state, zip, location, discount, review))

    con.commit()

    cur.close()

    return jsonify({"error": False,
                    "message": "Review submitted successfully"}), 200