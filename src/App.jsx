import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import NavBar from "./comoon/NavBar.jsx";
import Footer from "./comoon/Footer.jsx";
import Home from "./views/Home.jsx";
import imgLogo from './assets/img/logo.png'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { CartProvider } from './context/CartContext.jsx'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./views/Cart.jsx";
import Checkout from "./views/Checkout.jsx";

function App() {

    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar imgLogo={imgLogo}/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/productos" element={<ItemListContainer greeting="Nuestros Productos" />} />
                    <Route exact path="/productos/:categoria" element={<ItemListContainer greeting="Nuestros Productos" />} />
                    <Route exact path="/producto-detalle/:id" element={<ItemDetailContainer />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App
