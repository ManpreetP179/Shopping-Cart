const express = require("express");
const cors = require("cors");
const logger = require('morgan');
const body_parser = require('body-parser');
// to change methods for patch and delete
const methodOverride = require('method-override');
//convert cookie data into reading data
const cookieParser = require('cookie-parser') 
//setup database -> build local connection
const setupDb = require('./db/client');
//setup dao ->pulling data


setupDb();
const app = express();

app.use(cors());
app.use(logger("dev"))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(methodOverride((req,res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        return method
    }
}))

app.use(cookieParser())

//if looged in save into cookie
//console will pop out as signed in
app.use((req, res, next) => {
    const username = req.cookies.username
    res.locals.username = '';

    if(username){
        res.locals.username = username;
        console.log(`Signed in as ${username}`)
    }
    next();
})

app.get('/',(req,res,next)=>{
    res.send("it is working but it is under construction")
})

//login routes
const user = require("./routes/user")
app.use(user);
const PORT = 9900
const DOMAIN  = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`We are listen at http://${DOMAIN}:${PORT}`)
})