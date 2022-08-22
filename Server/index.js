import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import methodOverride from 'method-override'
import cookieParser from 'cookie-parser'

import productRouter from './routes/product.js';
import userRouter from './routes/user.js';


const app = express();

app.use(cors());
app.use(logger("dev"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        return method
    }
}))

app.use(cookieParser())





app.use('/v1/api/users', userRouter)
app.use('/v1/api/products', productRouter)
const PORT = 9900
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`We are listen at http://${DOMAIN}:${PORT}`)
})