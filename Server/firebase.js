var firebase = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
const { getFirestore } = require('firebase-admin/firestore')
const { getAuth } = require('firebase-admin/auth');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

const db = getFirestore()
module.exports = { firebase, db}




