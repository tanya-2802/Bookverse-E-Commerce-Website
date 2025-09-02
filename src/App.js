import './App.css';
import AuthorDashboard from './Components/AuthorDashboard/AuthorDashboard';
import { ForgotPassword } from "./Pages/AuthenticationPages/ForgotPassword";
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import { useEffect, useLayoutEffect } from 'react';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact'; 
import axios from "axios"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { 
  Navbar, 
  Toast,
  Home,
  Shop, 
  ProductPage,
  Login,
  Signup,
  Wishlist,
  Cart,
  Orders,
  useUserLogin,
  useWishlist,
  useCart} from "./index"

function App() {

  const { userLoggedIn } = useUserLogin()
  const { dispatchUserWishlist } = useWishlist()
  const { dispatchUserCart } = useCart()


  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/"         exact element={<Home/>} />
          <Route path="/shop"     exact element={<Shop/>} />
          <Route path="/shop/:id"       element={<ProductPage/>} />
          <Route path="/login"          element={<Login/>} />
          <Route path="/signup"         element={<Signup/>} />
          <Route path="/wishlist"       element={<Wishlist/>} />
          <Route path="/cart"           element={<Cart/>} />
          <Route path="/orders"         element={<Orders/>} />
          <Route path="/author-dashboard" element={<AuthorDashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
        <Toast position="bottom-right"/>
      </div>
    </Router>
  );
}

export default App;