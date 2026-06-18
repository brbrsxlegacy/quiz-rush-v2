import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getDatabase, ref, set, get, update, remove, onValue } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
export const firebaseConfig={apiKey:"AIzaSyABqkhpL1SMRzRJ9GQLjjZE2IryqpAvMPw",authDomain:"pixelroom-ae218.firebaseapp.com",databaseURL:"https://pixelroom-ae218-default-rtdb.europe-west1.firebasedatabase.app",projectId:"pixelroom-ae218",storageBucket:"pixelroom-ae218.firebasestorage.app",messagingSenderId:"720297722320",appId:"1:720297722320:web:c815edae99d1efa7ff39d5",measurementId:"G-HD8901B19M"};
export const app=initializeApp(firebaseConfig); export const auth=getAuth(app); export const db=getDatabase(app);
export {createUserWithEmailAndPassword,signInWithEmailAndPassword,signInAnonymously,signOut,onAuthStateChanged,ref,set,get,update,remove,onValue};
