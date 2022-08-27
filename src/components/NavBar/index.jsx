import "./navBar.css";

import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="container__nav">
            <nav className="nav">
                <main className="main__marca">
                    <NavLink className="nav__linkMarca" to='/'>Ludmila Ohanessian Artista Plastica</NavLink>
                </main>
                <ul className="nav__barlist">
                    <li>
                        <NavLink className="nav__link" to='/category/Pintura'>Pinturas</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to='/category/Acuarela'>Acuarelas</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to='/category/Dibujo'>Dibujos</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/SobreMi">Sobre mí</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/ContactForm">Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/cart">
                            <CartWidget />
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ludmilaohanessian/">
                        <i className="bi bi-instagram"></i></a>
                    </li>
                    <li>
                        
                        <a href="https://www.facebook.com/LudmilaOhanessian/">
                        <i className="bi bi-facebook"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar