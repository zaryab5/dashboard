import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
// import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Transaction from "./pages/Transaction";
import Customer from "./pages/Customer";
import AddProduct from "./pages/AddProduct";
import ManageTransaction from "./pages/ManageTransaction";
import EditProduct from "./pages/EditProduct";
import Analytics from "./pages/Analytics";



// const Dashboard=lazy(()=>import("./pages/Dashboard"));
// const DashboardLayout=lazy(()=>import("./pages/DashboardLayout"));
// const Products=lazy(()=>import("./pages/Products"));
// const Customer=lazy(()=>import("./pages/Customer"));
// const Transaction=lazy(()=>import("./pages/Transaction"));

const App = () => {
  return (
   <Router>
     {/* <Suspense fallback={<Loader/>}> */}
     <Routes>
       <Route path="/" element={<Loader/>}></Route>
       <Route path="/admin/dashboard/*" element={<DashboardLayout/>}>
       <Route index element={<Dashboard/>}/>
        <Route path="product" element={<Products/>}/>
        <Route path="product/new" element={<AddProduct/>}/> 
        <Route path="product/edit" element={<EditProduct/>}/> 
        <Route path="customer" element={<Customer/>}/>
        <Route path="transaction" element={<Transaction/>}/> 
        <Route path="transaction/manage" element={<ManageTransaction/>}/> 
        <Route path="analytics" element={<Analytics/>}/> 
       </Route>
     </Routes>
     {/* </Suspense> */}
   </Router>
  )
}

export default App