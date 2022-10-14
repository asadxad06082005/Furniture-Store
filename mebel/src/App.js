import React from "react";
import "./index.css"
import NavbarCom from "./components/NavbarCom/NavbarCom";
import Home from "./pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import styled from 'styled-components'
import Card from "./pages/Card/Card";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import AboutCom from "./components/about/AboutCom";


function App() {
    return (

        <NavbarStyle>
            <NavbarCom/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/card" element={<Card/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/products" element={<Products/>}/>
            </Routes>
        </NavbarStyle>
    );
}

const NavbarStyle = styled.div`

`

export default App;

