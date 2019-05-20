import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDH0A1GzcW9Nydqj59TiJnSn0ZzZEDco2Q",
    authDomain: "catch-of-the-day-brian-d.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-brian-d.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;