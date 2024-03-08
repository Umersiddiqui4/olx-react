import { useState } from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import { addToCart } from '../../../store/cart'
import { useSelector, useDispatch } from 'react-redux'

export default function Cards(props){
    const navigate = useNavigate()
    const {thumbnail , price , description, id} = props
    const dispatch = useDispatch()

    
   
    //  
    return   <div class="col-md-3 col-sm-4"> 
    <div className="card"   >
        <img onClick={() => navigate(`/carddetails/${id}`)} src={thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
            <div className="titleDiv">
        <h5 class="card-title">Rs {price}</h5>
        <i class="fa-regular fa-heart "></i>
        </div>
        <br></br>
    <h6 class="card-subtitle mb-2 text-body-secondary">{description}</h6>

    <p class="card-text text-body-secondary m-0">Others, Sialkot</p>
    <p class="card-text text-body-secondary">5 days ago</p>
    <button onClick={() => dispatch(addToCart(props))}>
            Add To Cart
        </button>
        </div>
    </div>
    </div>
    
        
}