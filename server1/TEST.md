======Test Case for SignUp===========
URL:http://localhost:9900/user/signup 
METHOD:POST
raw->json
header 
send out
{
    "email":"client6@user.com",
    "password":"123",
    "is_customer":true
}

you will receive
{
    "user": {
        "email": "client8@user.com",
        "password": "$2b$10$kzeiSUNCgN6p9XXj8Bspm.gIffT461hJuxcjc0ePmyWb2EDDIUqIu",
        "id": 12
    },
    "msg": "you have signed up successfully"
}
=====================================

======Test Case for SignIn===========
URL:http://localhost:9900/user/signin 
METHOD:POST
raw->json
header 
send out
{
    "email":"client6@user.com",
    "password":"123",
    "is_customer":true
}

you will receive
{
  {
    "data": {
        "id": 9,
        "email": "client6@user.com",
        "password": "$2b$10$YpxTtAyQw68.kJgjNDXtLeOwdPdJxkY.YRPAnSy/OGNZrpRDgw3NC",
        "is_customer": null,
        "created_at": "2022-08-19T04:38:08.478Z",
        "updated_at": "2022-08-19T04:38:08.478Z"
    }
}
=====================================

======Test Case for SignIn===========
URL:http://localhost:9900/user/signout 
METHOD:POST

nothing to sendout

you will receive
{
    "cookie": false
}
=====================================