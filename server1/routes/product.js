const express = require('express');
const router = express.Router();



// router.get('/', async (req, res) => {
//     const products = await db.collection('products').get()
//     if (products.length === 0) {
//         return res.sendStatus(400)
//     }
//     const list = products.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     res.status(200).send(list)
// })


// router.post('/new', async (req, res) => {
//     const data = req.body;
//     const products = db.collection('products')
//     products.add(data)
//     res.status(200).send({msg:"Updated"})
// })
// // not sure this will work out
// router.patch('/:id', async (req, res) => {
//     const id = req.params.id;
//     // delete req.body.id;
//     const data = req.body;
//     const updated_record = await db.collection('products').doc(id).update(data);
//     res.status(200).send(updated_record);
// })

// router.delete('/delete', async (req, res) => {
   
//     const id= req.params.uid
//     const bid= req.body.uid
//     res.status(400).send("loser",bid)
    

// })



module.exports = router;