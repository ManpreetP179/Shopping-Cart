const express = require('express');
const router = express.Router();
const { FieldValue } = require("firebase-admin/firestore")
const {firebase_auth, firebase } = require('../firebase.js')


router.get('/products', async (req, res) => {
    const productRef = db.collection('products').doc('associates')
    const doc = await productRef.get()
    if (!doc.exists) {
        return res.sendStatus(400)
    }
    res.status(200).send(doc)
})



router.post('/new', async (req, res) => {
    const { title, description,  status } = req.body
    const data = {title, description}
    const productRef = db.collection('products').doc('associates').set(data)
    const res2 = await productRef.set({
        [title]: title,
        [description]:description
    }, { merge: true })
  
    res.status(200).send(friends)
})
// not sure this will work out
router.patch('/products/:id', async (req, res) => {
    const {  title, description, newStatus } = req.body
    const peopleRef = db.collection('people').doc('associates')
    const res2 = await peopleRef.set({
        [name]: newStatus
    }, { merge: true })

    res.status(200).send(friends)
})

// router.delete('/friends', async (req, res) => {
//     const { title, description } = req.body
//     const peopleRef = db.collection('people').doc('associates')
//     const res2 = await peopleRef.update({
//         [title]: FieldValue.delete(),
//         [description]: FieldValue.delete()
//     })
//     res.status(200).send(friends)
// })

// pp.get('/friends', async (req, res) => {
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

// app.post('/addfriend', async (req, res) => {
//     const { name, status } = req.body
//     const peopleRef = db.collection('people').doc('associates')
//     const res2 = await peopleRef.set({
//         [name]: status
//     }, { merge: true })
//     // friends[name] = status
//     res.status(200).send(friends)
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

module.exports = router;