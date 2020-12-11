import  Firebase from "firebase/app";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyBrc5po5WKK2mcsZk1rvMR6m7jh-fqWcc4",
    authDomain: "fir-bot-63213.firebaseapp.com",
    databaseURL: "https://fir-bot-63213.firebaseio.com",
    projectId: "fir-bot-63213",
    storageBucket: "fir-bot-63213.appspot.com",
    messagingSenderId: "36579659671",
    appId: "1:36579659671:web:d237da9c5024013d663ed2",
    measurementId: "G-3G0SC7W1XN"
}
const firebase = Firebase.apps.length? Firebase.app():Firebase.initializeApp(config);
export const auth = firebase.auth();
