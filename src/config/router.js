
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Dashboard from '../component/reuseable/Dashboard/App'
import CardDetails from '../component/screen/cardDetails/App'
import Login from '../component/screen/login/App'
import Reg from '../component/screen/register/App'
import Post from '../component/screen/postAd/App'
import Profile from '../component/screen/profile/App'
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged , signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import {getApiData} from "./firebase/App"



const router = createBrowserRouter([
    
{
path: "/",
element: <Layout />,
children:[
    {
    path: "/",
    element: <Dashboard />,
    },
    {
    path:  `/cardDetails/:Id`,
    element: <CardDetails />,
    },
    {
    path:  "/login",
    element: <Login />,
    },
    {
    path:  `/register`,
    element: <Reg />,
    },
    {
    path:  `/postAd`,
    element: <Post />,
    },
    {
    path:  `/profile`,
    element: <Profile />,
    },


]
},

]);
function Layout(){

    const navigate = useNavigate();
    const [user,setUser] = useState();
    useEffect(() => {
        const {pathname} = window.location;
        
        if (user) {
            if(pathname === "/login" || pathname === "/register"){
            navigate("/")
        }
        
    } else {
        if(pathname === "/carddetails" || pathname === "/postAd" || pathname === "/profile"){
             navigate("/login")

         }
        }
      ;
  },[window.location.pathname,user]);
  
    
  useEffect(()=>{
        
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUser(user);
          });
        },[]);


        return <>
        
        <Outlet/>
        </>




}
function Router() {
return <RouterProvider router={router} />
}
export default Router