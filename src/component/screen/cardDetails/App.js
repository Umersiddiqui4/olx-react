import { useState, useEffect } from "react";
import "./App.css"
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { doc, getDoc } from "firebase/firestore";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import Header from "../../reuseable/header/App"
import Navbaar from "../../reuseable/navbaar/App"
import Footer from "../../reuseable/footer/App";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
export default function CardDetail() {
  const { Id } = useParams();
  console.log("id", Id);
  const [product, setProduct] = useState(null); // State to store the fetched product
  const db = getFirestore();


  useEffect(() => {
    
      const getProductDetail = async () => {
        console.log('Id:', Id);
        const docRef = doc(db, "adetails", Id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setProduct(docSnap.data())
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      };
    getProductDetail();
  }, [Id]); 
  return (
    <div className="main container-fluid">
      <Header/>
      <Navbaar/>
      {product && (
        <nav data-mdb-navbar-init className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Mobiles</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  <a href="#">Items</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page"><a href="#">
                  {product.Title} </a>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
   
      )
      
      }
  <div className="sliderId">
      {product && (
        <Swiper
        rewind={true}
        style={{
          '--swiper-navigation-color': 'white',
          '--swiper-pagination-color': 'white',
          
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
     {
  product.ImageURL.map((item, index) => (
    <SwiperSlide >
      <div className="swiper-zoom-container sllider">
        <img src={item}  />
      
      </div>
    </SwiperSlide>
  ))
} 
      </Swiper>
      )}


<div className="profileSection">

<div class="card-body w-100 mb-3 profcard container-fluid">
    <div className="profCol">
  <img src="https://www.facebook.com/photo/?fbid=221725557127952&set=a.102693359031173" className="img"></img>
  <div>
    <h4 class="card-title mx-2">Umer Siddiqui</h4>
    <p class="card-text mx-2">Member since Jan 2024</p>
    <a href="https://www.facebook.com/profile.php?id=100078715268711"><p class="card-text mx-2"><b>See profile  <i class="fa-solid fa-chevron-right"></i></b></p></a>
    </div>
    </div>
    <a href="#" className="btn profileBtn w-100 mt-3 m-2 p-2">Show phone number <i class="fa-solid m-1 fa-phone-volume fa-xl"></i></a>
    <a href="#" className="btn profileBtn1 w-100 m-2 p-2"><i class="fa-regular fa-comments m-1 fa-xl"></i> Chat </a>
</div>
<div class="card-body w-100 mb-3 loccard container-fluid">
  <div className="location">
    <h4 class="card-title m-2">Locataion</h4>
    <p class="card-text m-2"><i class="fa-solid fa-location-dot fa-xl"></i> Clifton, Karachi</p>
   </div>
</div>
<div className="idSection">
  <p>AD ID 1080607968</p>
  <p><svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" class="ca777f55"><path fill-rule="evenodd" d="M12.5 9.8H2.2V2.3h10.3l-1.8 3-.5.8.5.9 1.8 2.8zM14 .7H.5v15.8l.8.8 1-.8v-5H14l.7-1.3L12.2 6l2.5-4.2L14 .7z" clip-rule="evenodd"></path></svg><b>     Report this ad</b></p>
</div>
</div>







      </div>

      <br></br>
{product && (
<div className="adDetails  ">
  <div className="container-fluid">
  <div className="first mb-3 ">
  <h1>Rs {product.Price}</h1>
  <div className="iconsdetail">
  <i class="fa-solid fa-share-nodes fa-xl"></i>
  <i class="fa-regular fa-heart fa-xl"></i>
  </div>
  </div>
  <h5><b>{product.Title}</b></h5>
<div className="location">
   
    <p class="card-text mt-4"><i class="fa-solid fa-location-dot "></i> Clifton, Karachi</p>
   </div>
</div>
</div>
)}
{product && (
<div className="adDescription mt-3 ">
  <div className="container-fluid">

  <h5 className="mt-3 mb-4"><b>Description</b></h5>

<p>{product.Description}</p>
</div>
</div>
)}
    <Footer/>
    </div>
  );
            }  
