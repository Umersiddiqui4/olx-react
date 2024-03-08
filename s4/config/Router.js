

// // import {createBrowserRouter,RouterProvider} from "react-router-dom";
// // import Dashboard from '../view/Dashboard/index'
// // import Detail from '../view/Detail'
// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <Dashboard/>
// //   },
// //   {
// //     path: "/Detail/:adId",
// //     element: <Detail/>
// //   },
// // ]);
// // function Router(){
// //     return<RouterProvider router={router}/>
// // }
// // export default Router;

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import DetailPage from '../view/DetailPage/index'
// import Dashboard from '../view/Dashboard/index'

// // import AboutUs from '../views/AboutUs'
// // import Detail from '../views/Detail'
// const router = createBrowserRouter([
// {
// path: "/",
// element: <Dashboard/>,
// },
// {
// path: "/DetailPage/:productId",
// element: <DetailPage/>,
// },

// ]);
// function Router() {
// return <RouterProvider router={router} />
// }
// export default Router



// import { createBrowserRouter, RouterProvider } from "react-router-dom";
//  import Dashboard from '../view/Dashboard/index'
// import DetailPage from "../view/DetailPage/index";
// const router = createBrowserRouter([
// {
// path: "/",
// element: <Dashboard />,
// },
// {
// path:  "/DetailPage/:productId",
// element: <DetailPage />,
// },

// ]);
// function Router() {
// return <RouterProvider router={router} />
// }
// export default Router



// Router.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from '../view/Dashboard/index';
import DetailPage from "../view/DetailPage/index";
import Register from "../view/register/index";
import Login from "../view/Login";
import Sell from '../view/sell'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/DetailPage/:productId",
    element: <DetailPage />,
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/sell',
    element: <Sell/>,
  },

 
  {
    path: "/",
    element: <Dashboard />,
  },
 
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
