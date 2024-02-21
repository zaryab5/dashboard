import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../pages/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Transaction from "../pages/Transaction";
import Customer from "../pages/Customer";
const Routers= createBrowserRouter([
    {
        path:'/admin/dashboard',
        element:<DashboardLayout/>,
        children:[
            {
                path:'/admin/dashboard',
               element:<Dashboard/>
            },
            {
                path:'/admin/dashboard/product',
                element:<Products/>
            },
            {
                path:'/admin/dashboard/customer',
                element:<Customer/>
            },
            {
                path:'/admin/dashboard/transaction',
                element:<Transaction/>
            }
 
        ]
    }
])

export default Routers;