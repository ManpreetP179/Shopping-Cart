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
app.post('/addfriend', async (req, res) => {
    const { name, status } = req.body
    const peopleRef = db.collection('people').doc('associates')
    const res2 = await peopleRef.set({
        [name]: status
    }, { merge: true })
    // friends[name] = status
    res.status(200).send(res2)
})


// app.get('/friends', async (req, res) => {
//     const peopleRef = db.collection('people').doc('associates')
//     const doc = await peopleRef.get()
//     if (!doc.exists) {
//         return res.sendStatus(400)
//     }

//     res.status(200).send(doc.data())
// })

// app.get('/friends/:name', (req, res) => {
//     const { name } = req.params
//     if (!name || !(name in friends)) {
//         return res.sendStatus(404)
//     }
//     res.status(200).send({ [name]: friends[name] })
// })


// app.patch('/changestatus', async (req, res) => {
//     const { name, newStatus } = req.body
//     const peopleRef = db.collection('people').doc('associates')
//     const res2 = await peopleRef.set({
//         [name]: newStatus
//     }, { merge: true })
//     // friends[name] = newStatus
//     res.status(200).send(friends)
// })

// app.delete('/friends', async (req, res) => {
//     const { name } = req.body
//     const peopleRef = db.collection('people').doc('associates')
//     const res2 = await peopleRef.update({
//         [name]: FieldValue.delete()
//     })
//     res.status(200).send(friends)
// })


app.use('/v1/api/users', userRouter)
app.use('/v1/api/products', productRouter)
const PORT = 9900
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`We are listen at http://${DOMAIN}:${PORT}`)
})