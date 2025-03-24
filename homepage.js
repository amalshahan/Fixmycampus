import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyAntn_AszKaERCxDJaYr1AqYulMSUyQVv8",
  authDomain: "fixmycampus-81313.firebaseapp.com",
  projectId: "fixmycampus-81313",
  storageBucket: "fixmycampus-81313.firebasestorage.app",
  messagingSenderId: "487715498876",
  appId: "1:487715498876:web:dbb370d680ac56b6c312f9"
    //YOUR COPIED FIREBASE PART SHOULD BE HERE
 //WATCH THIS VIDEO TO LEARN WHAT TO PUT HERE   https://youtu.be/_Xczf06n6x0
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();

  
  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })