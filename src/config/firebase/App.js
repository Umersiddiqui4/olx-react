// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs,deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { GoHead } from "../../component/screen/login/App"
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getApp } from "firebase/app";
import { getDownloadURL } from "firebase/storage";
import { getDatabase,  child, get,update,remove } from "firebase/database";
import { useState ,useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { CleaningServices } from "@mui/icons-material";



const firebaseConfig = {
  apiKey: "AIzaSyA0inl9rIZUFBeZ-8KGvXXr7zQ9KwLHJbk",
  authDomain: "olxcom-5367b.firebaseapp.com",
  projectId: "olxcom-5367b",
  storageBucket: "olxcom-5367b.appspot.com",
  messagingSenderId: "888844255188",
  appId: "1:888844255188:web:808099d25bd2c8af5ba041"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export async function register(userInfo) {
  try {
    const { email, password, age, firstname, lastname } = userInfo;

    await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "users"), {
      firstname,
      lastname,
      age,
      email,
      password
    });


    console.log("done ");
    alert("Successfully registered!");

  } catch (error) {
    console.error("Error during registration:", error);
    alert(error.message);
  }
}
export async function login(userInfo) {
  // Import useNavigate from your routing library

  try {
    const { email, password } = userInfo;
    // Attempt to sign in with the provided email and password
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged In Successfully");

  } catch (error) {
    // If there is an error during login, show an alert with the error message
    alert(error.message);
  }
}

export async function PostAds(userInfo) {
  try {
    const { Title, Description, Price, Image } = userInfo;
const imageArray = Array.from(Image[0]);
const arr = [];
for (let i = 0; i < imageArray.length; i++) {
    const file = imageArray[i];
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    
    console.log(`File ${i} uploaded. Download URL: ${downloadURL}`);
    arr.push(downloadURL);
}
console.log('arr uploaded. Download URLs:', arr);  
    await addDoc(collection(db, "adetails"), {
      Title,
      Description,
      Price,
      ImageURL: arr, 
    });
   
    console.log("Ad posted successfully");
    alert("Ad posted successfully!");
  } catch (error) {
    console.error("Error posting ad:", error);
    alert(error.message);
  }
}

export const getApiData = async () =>{
  const postAds = []
  const querySnapshot = await getDocs(collection(db, "adetails"));
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    const dat = doc.data()
    dat.id = doc.id
    postAds.push(dat)
  });
  return postAds
}


export const ProfileData = async () => {
  const postAds = []
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    const dat = doc.data()
    dat.id = doc.id
    postAds.push(dat)
  });
  return postAds
}
ProfileData()


export async function updateData(e, img) {
 
  console.log("e:", e)
  console.log("img:", img)
const userd = e[0]
try {

  const storageRef = ref(storage, `profile image/${img.name}`);
  await uploadBytes(storageRef, img);
  const Url = await getDownloadURL(storageRef)
console.log(Url);
  await addDoc(collection(db, "users"), {
    firstname:userd.firstname,
    lastname:userd.lastname,
    age:userd.age,
    email:userd.email,
    password:userd.password,
    image:Url
  });
 
 const ver = await deleteDoc(doc(db,"users",userd.id))
    console.log("del",ver)
  
  alert("Profile is Updated . ")

}catch(e){
console.log(e.message)
}

  }


