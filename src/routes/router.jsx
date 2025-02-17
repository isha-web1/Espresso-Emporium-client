import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        loader : ()=>fetch('http://localhost:5000/coffee')
    },
    {
        path : 'addCoffee',
        element : <AddCoffee/>
    },
    {
        path : 'updateCoffee',
        element : <UpdateCoffee/>
    }
])