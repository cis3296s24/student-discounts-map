import datetime

from flask import jsonify


def submit(con, establishment_name, address, city, state, zip, discount, submitterID, lat, lng):
    cur = con.cursor()

    lastUpdated = datetime.datetime.now()

    ## PLACE HOLDER VALUES
    type = "restaurant"
    validUntil = "2025-12-31"
    rating = 5

    query = ("INSERT INTO submissions (establishmentName, address, city, state, zip, discount, type, lastUpdated, validUntil, rating, lattitude, longitude, submitterID) "
             "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)")

    cur.execute(query, (establishment_name, address, city, state, zip, discount, type, lastUpdated, validUntil, rating, lat, lng, submitterID))

    con.commit()

    cur.close()

    return jsonify({"error": False,
                    "message": "Review submitted successfully"}), 200


def retrieve(con, lat, lng):
    cur = con.cursor()

    query = ("SELECT * FROM submissions WHERE lattitude = %s AND longitude = %s")

    cur.execute(query, (lat, lng))

    result = cur.fetchall()

    cur.close()

    return jsonify(result), 200

def retrieveAll(con):
    cur = con.cursor()

    query = ("SELECT * FROM submissions")

    cur.execute(query)

    result = cur.fetchall()

    cur.close()

    return jsonify(result), 200