
import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyDvPORAsUVfXCk8yR3yj4kXyp5twHU7bpI",
    authDomain: "yoga-clas.firebaseapp.com",
    databaseURL: "https://yoga-clas-default-rtdb.firebaseio.com",
    projectId: "yoga-clas",
    storageBucket: "yoga-clas.appspot.com",
    messagingSenderId: "275188419238",
    appId: "1:275188419238:web:dc14a16f61852e5674c267",
    measurementId: "G-HW76Z7D32T"};
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;