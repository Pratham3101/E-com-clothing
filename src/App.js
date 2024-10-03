import './App.css';
import Navbar from "./components/navbar/Navbar.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from './pages/Shop.jsx';
import Shopcategory from './pages/Shopcategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Footer from './components/Footer/Footer.jsx';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/> 
         <Routes>
          <Route path='/'element={<Shop></Shop>}></Route>
          <Route path='/mens'element={<Shopcategory banner={men_banner} category="men"/>}></Route>
          <Route path='/womens'element={<Shopcategory banner={women_banner} category="women"/>}></Route>
          <Route path='/kids'element={<Shopcategory banner={kid_banner} category="kid"/>}></Route>

          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
             
          <Route path='/cart'element={<Cart></Cart>}></Route>
          <Route path='/login'element={<LoginSignup></LoginSignup>}></Route>

         </Routes>
         <Footer/>
      </BrowserRouter>
    
    </>
  );
}

export default App;
