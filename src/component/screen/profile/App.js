import Header from "../../reuseable/header/App"
import Navbaar from "../../reuseable/navbaar/App"
import Footer from "../../reuseable/footer/App";
import "./App.css"
import { useState,useEffect } from "react";
import { ProfileData, updateData} from "../../../config/firebase/App";
import { getAuth, onAuthStateChanged , signOut } from "firebase/auth";
import { getDatabase, ref, update } from 'firebase/database';
import { useNavigate } from "react-router-dom";


export default function Profile(){
    const [name,setName] = useState()
    const [DOB,setDOB] = useState()
    const [img,setImg] = useState()
    const [user,setUser] = useState()
    const [userData, setUserData] = useState(null);
    const [image,setImage] = useState()
    const [description,setDescription] = useState()

    const navigate = useNavigate();


    
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
        // console.log("user:",user)
          
            const uid = user;
            setUser(uid.email);
            console.log(uid.email)

          } else {
            setUser("");
            
          }
        });
      },[]);
      
      useEffect(() => {
      FetchData();

      async function FetchData() {
        try {
          const pdata = await ProfileData();
          console.log("pdata:", pdata);
      
          const foundItem = pdata.filter((res) => res.email === user);
          
          if (foundItem) {
            // The element was found, and you can do something with it
            console.log("Element found:", foundItem);
            setUserData(foundItem);
            if (userData && userData[0]) {
              setImage(userData[0].image);
            } else {
              setImage(null);
            }
          } else {
            // The element was not found
            console.log("Element not found");
            setImage(null)
          }
        } catch (error) {
          console.error("Error fetching or processing data:", error);
        }
      }

    },[user]);
    // const image =  userData[0].img ? userData[0].img : null;
   async function go(){
    await updateData(userData,img)
    navigate("/")
    }
    useEffect(() => {
      if (userData && userData[0]) {
        setImage(userData[0].image);
      } else {
        setImage(null);
      }
    
  },[userData]);



    return(
<div className="profile-main">

        <Header/>
        <Navbaar/>
<div className="profile">

<div className="profile-form p-4">
    <div className="edit-profile p-3">

        <h4>Edit profile</h4>
         </div>

     <div className="profile-photo p-3 brg">
        <p className="mx-3">Profile Photo</p>
        <div className="profile-photo-img">
        <div className="profile-photo-img-1
        ">
        
        <img
  className="header-img "
  src={image ? `${image}`:"https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"  }
  alt="Profile"
/></div>

            <div className="profile-photo-button">
            <div class="upload-btn-wrapper">
        <button class="btn">Upload File</button>
        <input type="file"  onChange={(e) => setImg(e.target.files[0])} name="myfile" id="myfile" />
    </div>
<div className="profile-photo-icon "><svg className="mx-2" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M7 .33A6.67 6.67 0 0 1 13.67 7 6.67 6.67 0 0 1 7 13.67 6.67 6.67 0 0 1 .33 7 6.67 6.67 0 0 1 7 .33zm0 1.34A5.34 5.34 0 0 0 1.67 7 5.34 5.34 0 0 0 7 12.33 5.34 5.34 0 0 0 12.33 7 5.34 5.34 0 0 0 7 1.67zm0 4l.67.66v3.34l-.67.66-.67-.66V6.33L7 5.67zm0-2A.67.67 0 1 1 7 5a.67.67 0 0 1 0-1.33z" fill="#002F34" fill-rule="evenodd"></path></svg>
<span>JPG, JPEG, PNG Min: 400px, Max: 1024px</span>
</div>

            </div>
              </div>
        </div>    
<div className="profile-inputs  brg p-3">
    <div className="input_container">
<label>Name</label>
<br></br>
<div class="form-outline " data-mdb-input-init>
 
<input
      type="text"
      id="formControlLg"
      className="form-control form-control-lg"
      value={userData ? `${userData[0].firstname} ${userData[0].lastname}` : ''}

       // This makes the input read-only, remove if you want it editable
    />

</div>
<br></br>
<label>Date of birth</label>
<br></br>
<div class="form-outline" data-mdb-input-init>
  <input type="text" id="formControlLg" class="form-control form-control-lg" value={userData ? `${userData[0].age} ` : ''}
 />
 
</div>

<br></br>
<br></br>
<div class="form-outline" data-mdb-input-init>
  <label >About me</label>
  <textarea class="form-control" id="textAreaExample" rows="4" value={userData ? `${userData[0].about} ` : ''}></textarea>
</div>
<br></br>
</div>




    </div>
    <div className="final-btn">
<button type="button" class="btn btn-primary" data-mdb-ripple-init onClick={go}>Save changes</button>

    </div>
</div>
</div>

        <Footer/>
</div>
    );
}