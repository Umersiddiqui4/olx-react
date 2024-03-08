
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HeaderNav from './component/headerNav';
// import Dashboard from './view/Dashboard';
// import DetailPage from './view/DetailPage';
// import Footer from './component/footer'
// import Category from './component/category';
// import Register from './view/register/index';
// import Login from './view/login/index'
// import Sell from './view/sell/index'

// function App() {
//   return (
//     <Router>
//       <div>

     
//         <HeaderNav />
//         <br/>
//         <br/> <br/> <br/> <br/> <br/> <br/> 
//         <Category/>
   
     
//         <br/><br/>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/DetailPage/:productId" element={<DetailPage />} />
//            <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login/>} /> 
        
        
//           <Route path="/sell" element={<Sell/>} />
//           {/* <Route path="/" element={<Dashboard />} />
//           <Route path="/DetailPage/:productId" element={<DetailPage />} /> */}
//         </Routes>
//         <br/><br/><br/>
//         {/* <Footer/> */}
//       </div>
      
//     </Router>
 
  
//   );


  
// }

// export default App;


// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './view/Dashboard';
import DetailPage from './view/DetailPage';
import Register from './view/register/index';
import Login from './view/login/index';
import Sell from './view/sell/index';
import HeaderNav from './component/headerNav';
import Category from './component/category';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Include HeaderNav and Category inside Dashboard */}
          <Route
            path="/"
            element={
              <>
                <HeaderNav />
<br /><br /><br /><br /><br></br><br />
                <Category />
                <Dashboard />
              </>
            }
          />
          <Route path="/DetailPage/:productId" element={<DetailPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
