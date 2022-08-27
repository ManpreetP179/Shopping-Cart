import express from 'express';
import { addDoc, collection, doc, deleteDoc, where, query, getDoc, getDocs,  updateDoc, onSnapshot, serverTimestamp, collectionGroup } from 'firebase/firestore';
import { collections, db } from '../firebase.js';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
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


    const productsList = []
    const productSnapShot = await getDocs(collection(db, collections.PRODUCTS))
    productSnapShot?.forEach(async (docs) => {
       productsList.push(docs.data())
    })
  
    res.json(productsList)
})


//needs to upgrade!!
router.post('/new', async (req, res) => {


    // const { product_id, product_name, product_description, product_price, product_media_url, 
    //         product_files} = req.body;
    // const newProduct = {
    //     product_id,
    //     product_name,
    //     product_description,
    //     product_price,
    //     product_price,
    //     product_media_url,
    //     createdAt: new Date() 
    // }
    const {  product_id,
        name,
        description,
        price,
        image,} = req.body;

    const newProduct = {
        product_id,
        name,
        description,
        price,
        image,
        createdAt: new Date() 
    }
    console.log("got the file",newProduct)
    console.log("got the file",req.body  )
    console.log("got the file",req.params  )
    // const file_name = product_id+"-"+product_media_url.name
    // const data= {
    //     file_name: product_files
    // }
    try {
   
        const newProductRef = await addDoc(collection(db, collections.PRODUCTS), newProduct)
        console.log(newProductRef.id)
        const responseJson = { ...newProductRef, id: newProductRef.id }
        // const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        // uploadBytes(imageRef, imageUpload).then((snapshot) => {
        //   getDownloadURL(snapshot.ref).then((url) => {
        //     setImageUrls((prev) => [...prev, url]);
        //   });
        // });
        res.send(responseJson);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const q = query(collection(db, collections.PRODUCTS), where("product_id", "==", id));
    let foundData = ""
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        foundData = doc.data()
       
    });
    !!foundData ?res.send(foundData): res.status(400).send("not found")
  

})

// not sure this will work out
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    // const { product_id, name, price, product_img, description } = req.body;
    const { product_id, product_name, product_description,product_price, product_media_url, description } = req.body;
    const newProduct = {
        product_id,
        name,
        price,
        product_img,
        description,
        image_url,
        image_file,
        video_title,
        video_file,
        createdAt: new Date() 
    }
    const productDoc = collection(db, collections.PRODUCTS, id)
   
    const result = await updateDoc(productDoc, newProduct);
    console.log(result);
    res.status(200).send(updated_record);
})

router.post('/:id/delete/', async (req, res) => {
    
 
    // const { product_id } = req.body
    // const productsRef = collection(db, collections.PRODUCTS)
    // const q = query(productsRef, where("product_id", "==", product_id));
    // const matchingProducts = await getDocs(q)
    // if (matchingProducts.length > 0) {
    //     matchingProducts.forEach(async (matchingProduct) => {
         
    //         await deleteDoc(matchingProduct.ref)
    //     })
    //     res.send(`Deleted ${product_id}`)
    // } else {
    //     res.send(`Could not find matching product with product id ${product_id}`)
    // }


    if(req.params.id){
        const { pidroduct_id } = req.params
        const productDoc = doc(db, collections.PRODUCTS, pid);
        await deleteDoc(productDoc).then( res =>
            res.status(202).send(res)
        ).catch(e => res.status(402).send(e))
    } else {
        res.send(`Could not find matching product with product id ${product_id}`)
    }


})

export default router;
