import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyD8pdawAh7Z5f0g0peGwTlmsGXRLss8PHQ",
  authDomain: "login-476db.firebaseapp.com",
  databaseURL: "https://login-476db-default-rtdb.firebaseio.com",
  projectId: "login-476db",
  storageBucket: "login-476db.appspot.com",
  messagingSenderId: "713711102815",
  appId: "1:713711102815:web:509f29c9a63d2a867be4ea"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;