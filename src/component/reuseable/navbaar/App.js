import { useState } from "react";
import "./App.css"

import 'bootstrap/dist/css/bootstrap.css';
export default function Navbaar(){
    
    
    
    return <nav className="navbaar">
       <th className="categories">
        <td>All categories <img src="https://www.olx.com.pk/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg"></img></td>
        </th> 
        <div className="items">
            <div>Mobile Phones</div>
            <div>Cars</div>
            <div>Motorcycles</div>
            <div>Houses</div>
            <div>Video-Audios</div>
            <div>Tablets</div>
            <div>Land & Plots</div>
        </div>
    </nav>
    
}