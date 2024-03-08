//// app.js
import "./App.css";
import Header from "./component/reuseable/header/App"
import Navbaar from "./component/reuseable/navbaar/App"
import Categories from "./component/screen/categories/App";
import Cards from "./component/screen/cards/App";
import Footer from "./component/reuseable/footer/App";
import {store} from './store/index'
import { Provider } from 'react-redux'

import { useEffect, useState } from "react";
import Router from "./config/router"
import CardDetail from "./component/screen/cardDetails/App";
// import { useNavigate } from "react-router-dom";
function App() {
  // const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const toTop = document.querySelector(".to-top");
      if (toTop) {
        if (window.pageYOffset > 100) {
          toTop.classList.add("active");
        } else {
          toTop.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Provider store={store}>
    <div className="App">

      <Router />
      <a href="#" className="to-top">
        <i className="fas fa-chevron-up"></i>
      </a>
      {/* <Footer/> */}



    </div>
</Provider>
  )
}
export default App;
