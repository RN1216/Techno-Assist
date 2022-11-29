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
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
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
            }
        ]
    }
])

export default router;