// DetailPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faLocationDot,faPhone,faCommentDots,faShareNodes,faHeart} from '@fortawesome/free-solid-svg-icons';
import'./Detail.css'

function DetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductDetail();
  }, [productId]);

  const getProductDetail = () => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  };

  return (
    <div>
      {product ? (
        <>
        
   
      <div>
          {product.images.length > 0 && (
            <img className='img1' src={product.images[0]} alt={`Product 1`} />
            
          )}</div>
             <div className='Des'><p>{product.name}</p>
             <h2>{product.title}</h2>
             <p><b>Brand:</b>{product.brand}</p>
           <p><b>ID:</b>{product.id}</p>
           <p><b>Category</b>{product.category}</p>
           <p className=''><b>Description:</b>{product.description}</p>
           <br/>
           <br/>
   </div>
   <button className='btn3'>Add To Card </button><br/> 

   <br/> 
     <div className='Pro'>
        
     <a href='https://www.facebook.com/Hoorma/'><img className='Profile-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSs5LtE_s1tzYcgy7NZW7zpbLgVJARQld0i-pLUYADgSLbkkEzXw75stXLPRtofiFIOQI&usqp=CAU' alt="profile" /></a>
         <h3><a target='_blank' style={{ color: 'black' }} className='Name' href='https://www.facebook.com/Hoorma/'>Hoorma</a></h3>
       <h5><a target='_blank' style={{ color: 'gray' }} className='Date1' href='https://www.facebook.com/Hoorma/'>Dec 15,2023 </a></h5>
<p><b className='see'>See Profile</b></p><br/><br></br>
         <button className='btn1'>Show Phone Number </button><br/> 
         <button className='btn2'>Chat </button>
<br/><br/><br/>
        
      </div> 
      <div className='location'><br/>
            <h2 className='l1'>Location.</h2><br/><br/>
        
          {/* <h4 className='l2'>     <FontAwesomeIcon icon={faLocationDot} /> Faisal Town, Lahore</h4><br/><br/> */}
        </div>
       <div><img className='add' src="https://tpc.googlesyndication.com/simgad/1931734189880147742"/></div>



      
        
        
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailPage;
