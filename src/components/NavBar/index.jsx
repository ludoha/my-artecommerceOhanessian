import "./navBar.css";

import React from "react";
import CartWidget from "../CartWidget";

export const NavBar = () => {
    return (
        <div className="container__nav">
            <nav className="nav">
                <main className="main__marca">
                    <a className="nav__linkMarca" href="#">Ludmila Ohanessian Artista Plastica</a>
                </main>
                <ul className="nav__barlist">
                    <li>
                        <a className="nav__link" href="#">Tienda</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Galeria</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Sobre mí</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Contacto</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">
                            <CartWidget />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar