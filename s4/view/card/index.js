
import React from 'react';
import './card.css'; 

function Card(props) {
  const { description, name, images, price, onClick } = props;

  return (
    <div className="card" onClick={onClick}>
      <img className='imgc' src={images} alt={name} />
      <div>
        <h5 className='text'>
<img className='Fav' width="23px" src="https://static.thenounproject.com/png/1712136-200.png" alt=""/>
        
          {name} <br/>

          
          {description}<br/>
          <br /> Price: {price}
          <br/>
        
        </h5>
       
      </div>
    </div>
  );
}

export default Card;
