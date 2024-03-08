import './index.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function HeaderNav (){
const navigate = useNavigate()
  return(

    <div className="container-fluid">
  <div className='first'>
    <div  className="header">
      <div  className="navbar">
        <img src="http://127.0.0.1:5500/images/olx1.JPG" alt="" />
        <div  className="countryselect" id="country">
          <div  className="select">
          

            <p id="text">Select your country</p>
            <i  className="fa-solid fa-down" id="moving"></i>
          </div>
        </div>
        <div  className="searchbox">
          <input
            type="text"
            className="searchclass"
            placeholder="Find Car, mobile phone and more.."
          />
          {/* <FontAwesomeIcon className='search' icon={faMagnifyingGlass} /> */}
        </div>
        <div  className="language">
          <p className='login'><a href="#" onClick={()=>navigate('/login')}>Login</a></p>
        </div>

        
        <div  className="sellingpage">
          <button  onClick={()=>navigate('/sell')}  ><p>+ SELL</p></button>

        </div>
      </div>
    </div>
   <div>
   </div>

   <div className='second'>

      <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div  className="navbar-nav">
         
          <select className='category' name="" id="">
            <option value="" >All Categories</option> 
        
       <option>   <a  className="active" href="#">laptop</a> </option>
       <option>    <a  className="active" href="#about">Cars</a></option>
       <option>   <a  className="active" href="#services">Motorcycles</a></option>
       <option>   <a  className="active" href="#blog">Houses</a></option>
       <option>   <a  className="active" href="#skills">Tablets</a></option>
       <option>    <a  className="active" href="#contact">land</a> </option></select>
        </div>
      </div>

       <div  className="list">
        <ul>
          <li>Laptop</li>
          <li>Cars</li>
          <li>Motorcycles</li>
          <li>Houses</li>
          <li>TV -Video -Audio</li>
          <li>Tablets</li>
          <li>Land & Plots</li> 
        </ul>
      </div> 
    </div> 
    </div>
    <div  className="adimg" >
      <div  className="col-md- text-center">
        <img src="https://images.olx.com.pk/thumbnails/423979386-800x600.webp" alt="" />
      </div>
      
    </div>
    </div>
    
  )
}
export default HeaderNav;