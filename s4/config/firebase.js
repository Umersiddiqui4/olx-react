
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { getFirestore,collection, addDoc } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYAifcRmXgVj_dAKCWInxiEeJ8EoaFxCY",
    authDomain: "hoor-d8b03.firebaseapp.com",
    projectId: "hoor-d8b03",
    storageBucket: "hoor-d8b03.appspot.com",
    messagingSenderId: "794472132203",
    appId: "1:794472132203:web:89bb476ba020a7e40f8b2e",
    measurementId: "G-8E04YF2Y47"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export async function register(userInfo){
  try{
    const {email,fullname, password} = userInfo
    await   createUserWithEmailAndPassword(auth, email, password)
   await   addDoc(collection(db, "users"),{
   fullname, email, 
  });
    

     alert ("succesfullly registered")
    }
    
    catch (e)  {
  
     alert(e.message)
    };
  
  }
  export async function login(userInfo){
    try{
  const {email,password} =userInfo
    await   signInWithEmailAndPassword(auth, email, password)
   
      alert ("logged in successfully")
    }
    
    catch(e) {
     
      alert(e.Message)
    }
  }


  export async function sell1(userInfo){
  
    try{
      const {title,price} = userInfo
 
  await   addDoc(collection(db, "details"),{
     price, title, 
    });
        
       
   alert ("Succesfully Add item")
     }
        
     catch (e)  {
      
       alert(e.message)
      };
      

   }
  
  
