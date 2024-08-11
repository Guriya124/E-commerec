import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Layout from "./layout"
import Product from "./pages/product"
import ProductList from './pages/ProductList'
import UpdateProduct from './pages/UpadateProduct'
import Orders from './pages/Orders'
import Customer from './pages/customer'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product/:id" element={<UpdateProduct />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customer/>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
