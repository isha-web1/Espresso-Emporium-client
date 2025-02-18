import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Layout from "../components/Layout";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        children : [
            {
                path : '/',
                element : <App/>,
                loader : ()=>fetch('http://localhost:5000/coffee'),
            },
            {
                path : 'addCoffee',
                element : <AddCoffee/>
            },
            {
                path : 'updateCoffee/:id',
                element : <UpdateCoffee/>,
                loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path : '/signin',
                element : <Signin/>
            },
            {
                path : '/signup',
                element : <Signup/>
            }
        ]
    },
    
    
])