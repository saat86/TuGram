import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Error from "./components/Error";
import Photos from "./components/Photos";
import Home from "./components/Home"
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import ProtectedRoutes from "./components/ProtectedRoutes";

export const router=createBrowserRouter([
    {

        element:<ProtectedRoutes/>,
        children:[
            {
                path:'/photos',
                element:<Photos/>,
                errorElement:<Error/>,
            },
            {
                path:'/home',
                element:<Home/>,
                errorElement:<Error/>,
            },
            {
                path:'/post',
                element:<Posts/>,
                errorElement:<Error/>,
            },
            {
                path:'/profile',
                element:<Profile/>,
                errorElement:<Error/>,
            },
        ]
        ,
    }
    ,
    {
        path:'/login',
        element:<Login/>,
        errorElement:<Error/>,
    },
    
    {
        path:'/signup',
        element:<Signup/>,
        errorElement:<Error/>,
    },
])

export default router;