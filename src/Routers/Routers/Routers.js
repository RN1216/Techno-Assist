import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Catagories from "../../Pages/Catagories/Catagories/Catagories";
import Home from "../../Pages/Home/Home/Home";
import Blog from './../../Pages/Blog/Blog';
import Login from './../../Pages/Login/Login';
import Register from './../../Pages/Register/Register';
import PrivateRoutes from './../PrivateRoutes/PrivateRoutes';
import DashBoard from './../../Layout/DashBoard';
import MyBooking from "../../Pages/DashBoardLayout/MyBooking/MyBooking";
import AllUsers from "../../Pages/DashBoardLayout/AllUsers";
import AdminRouters from "../AdminRouter/AdminRouters";


const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services/:id',
                element:<PrivateRoutes><Catagories></Catagories></PrivateRoutes>,
                loader:({params})=> fetch(`https://techno-assistance-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children:[
            {
                path:'/dashboard',
                element:<MyBooking></MyBooking>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRouters><AllUsers></AllUsers></AdminRouters>
            },
        ]
    }
])

export default router;