import express from 'express';
import { addDoc, collection, doc, deleteDoc, where, query, getDoc, getDocs } from 'firebase/firestore';
import { collections, db } from '../firebase.js';
const router = express.Router();
// TODO add db import
/**
 * description
""""
name
""""
price
0
product_img
""""
product_reviews
0
 */

router.get('/', async (req, res) => {


    const products = await db.collection('products').get()
    if (products.length === 0) {
        return res.sendStatus(400)
    }
    const list = products.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(list)
})


router.post('/new', async (req, res) => {
    const { product_id, name, price, product_img, description } = req.body;

    const newProduct = {
        product_id,
        name,
        price,
        product_img,
        description
    }
    try {
        const newProductRef = await addDoc(collection(db, collections.PRODUCTS), newProduct)
        res.send(newProductRef);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})
// not sure this will work out
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    // delete req.body.id;
    const data = req.body;
    const updated_record = await db.collection('products').doc(id).update(data);
    res.status(200).send(updated_record);
})

router.post('/delete', async (req, res) => {
    // the actual name or id of the document we want to delete, is a bunch of random letters and numbers that we dont know
    // but we do know the product id
    // so we run a query to find products with a matching id, and then we dont need to know the random letters and numbers, it will delete the corresponding product
    const { product_id } = req.body
    // get a reference for the products collection
    const productsRef = collection(db, collections.PRODUCTS)
    // write a query statement:
    // look inside the productsRef collection, and find all matching documents where product_id == product_id
    const q = query(productsRef, where("product_id", "==", product_id));
    // pass that query into the getDocs method, which returns a QuerySnapshot
    const matchingProducts = await getDocs(q)
    // we loop over the results in the snapshot array
    if (matchingProducts.length > 0) {
        matchingProducts.forEach(async (matchingProduct) => {
            // each matchingProduct has a ref property, which is of a type DocumentReference, which is what deleteDoc requires to function
            await deleteDoc(matchingProduct.ref)
        })
        res.send(`Deleted ${product_id}`)
    } else { // we did not find a matching product
        res.send(`Could not find matching product with product id ${product_id}`)
    }

    //     if(!!id){

    //     }
    //     const response =  await db.collection('products').doc(id).delete();
    //     res.status(200).send(id)
})

export default router;
