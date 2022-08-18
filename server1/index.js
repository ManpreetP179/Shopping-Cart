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




// app.use('/v1/api/users', user_router)
// app.use('/v1/api/products', product_router)
const index = require("./routes/index")
app.use(index);
const PORT = 9900
const DOMAIN  = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`We are listen at http://${DOMAIN}:${PORT}`)
})