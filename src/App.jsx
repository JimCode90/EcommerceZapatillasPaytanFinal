import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import NavBar from "./comoon/NavBar.jsx";
import Footer from "./comoon/Footer.jsx";

import Home from "./pages/Home.jsx";

function App() {

  return (
    <div>
        <BrowserRouter>
            <NavBar />
            <Home />
            <Footer/>
        </BrowserRouter>

    </div>
  )
}

export default App
