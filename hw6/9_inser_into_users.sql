INSERT INTO users
    (id, username, email, first_name, last_name, password)
VALUES (
     nextval('users_id_seq'),
     'budulka',
     'anekdoty@gmail.com',
     'Otto',
     'Schtierlitz',
     'ABearWasWalkingThroughTheForest..'
) RETURNING *
