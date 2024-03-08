


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../view/card/index';

function Dashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  };

  const handleCardClick = (productId) => {
    navigate(`/DetailPage/${productId}`);
  };

  if (!products.length) {
   return <img src='https://motiongraphicsphoebe.files.wordpress.com/2018/10/giphy.gif'/>
  }

  return (
    <div>
      {products.map((item) => (
        <Card
          key={item.id}
          onClick={() => handleCardClick(item.id)}
          name={item.title}
          brand={item.brand}
          description={item.description}
          price={item.price}
          images={item.images[0]}
        />
      ))}
    </div>
  );
}

export default Dashboard;