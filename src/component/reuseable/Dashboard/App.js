//// app.js
import "./App.css";
import Header from "../header/App"
import Navbaar from "../navbaar/App"
import Footer from "../footer/App";
import Categories from "../../screen/categories/App";
import Cards from "../../screen/cards/App";
import { useEffect, useState } from "react";
import Router from "../../../config/router"
import CardDetail from "../../screen/cardDetails/App";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged , signOut } from "firebase/auth";

import {getApiData} from "../../../config/firebase/App"
function App() {
  const navigate = useNavigate();
    const [getData,setGetData] = useState([]);
    const [user,setUser] = useState();
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
        
          const uid = user.email;
          setUser(uid);
          
        } else {
          setUser(null);
         
        }
      });
  },[]);
  
    
    const adData = getApiData();
    useEffect(()=>{
      const getProducts = async() => {
        const ads = await getApiData()
        console.log('ads in component', ads)
        setGetData(ads)
      }
      getProducts();
        },[]);
console.log(getData)
// if(!getData.length){
//   return<p>wait</p>
// }

 




return (
<div className="App">
<div className="App-header">


<Header/>
<Navbaar/>
<Categories/>
{user ?
<div className="cards container-fluid justify-content-center">
        <div className="nameSection">
            <h3 className="m-3 mb-4">All in One</h3>
        </div>
     <div class="row">
   
{getData.length > 0 ? (
    getData.map(item => (
      <Cards     key={item.id} // Assuming there's an 'id' for each item
      id={item.id}
      description={item.Description}
      thumbnail={item.ImageURL}
      price={item.Price}/>
    ))
) : (
  <p>Loading...</p>
)}
  
  </div>
  </div>
    :
<div className="loading">
  <img src="https://i0.wp.com/www.rankred.com/wp-content/uploads/2017/06/redirecting-loader.gif?fit=650%2C286&ssl=1"/>
</div>
}
   
      


{/* <CardDetail/> */}



<Footer/>
</div>
</div>
)}
export default App;
