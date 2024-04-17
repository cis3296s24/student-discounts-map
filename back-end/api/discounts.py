from flask import jsonify


def submit(con, establishment_name, address, city, state, zip, discount, submitterID, lat, lng):
    cur = con.cursor()

    query = "INSERT INTO Discounts (establishmentName, address, city, state, zip, discount, submitterID, lat, lng) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"

    cur.execute(query, (establishment_name, address, city, state, zip, discount, submitterID, lat, lng))

    con.commit()

    cur.close()

    return jsonify({"error": False,
                    "message": "Review submitted successfully"}), 200