import express from 'express';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase.js';
const router = express.Router();


// TODO add firebase and db, etc. etc.
//product belongs to user table and has many reviews table
// products table
// title :string
// description: string
// imageUrl: string
// review_id: referece?
// writer: user.email
const COOKIE_MAX_AGE = 24 * 7 * 60 * 60 * 1000;
router.post('/', async (req, res, next) => {
    res.send(req.body)
});

router.post('/signin', async (req, res, next) => {
    
    try {
        if (!!req.body.email === false || !!req.body.password === false) {
            return res.status(422).json({
                email: "email is required",
                password: "password is required"
            })
        }
        const { email, password } = req.body;
        console.log("email", email)
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                res.cookie("email", userCredential.user, {maxAge: COOKIE_MAX_AGE});
                res.send(userCredential.user)
                console.log("email", email)
            })
            .catch((error) => {
                res.send(error)
               
            })
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.post('/signup', async (req, res, next) => {
    const { email, password } = req.body;
    if (!!email === false || !!password === false) {
        return res.status(422).json({
            email: "email is required",
            password: "password is required"
        })
    }

 
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            res.cookie("email", userCredential.user, {maxAge: COOKIE_MAX_AGE});
            res.send(userCredential.user);
        })
        .catch((error) => {
            console.log(`Something bad happened lol: ${error.code}`);
        })
});

router.delete('/signout', async (req, res, next) => {
    res.clearCookie("email");
    res.json({cookie:"email" in req.cookies})
});

export default router;
