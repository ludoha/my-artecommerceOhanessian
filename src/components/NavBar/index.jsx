import React from "react"

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <main className="main__marca">
                    <a className="nav__linkMarca" href="#">Ludmila Ohanessian Artista Plastica</a>
                </main>
                <ul className="nav__barlist">
                    <li>
                        <a clasName="nav__link" href="#">Tienda</a>
                    </li>
                    <li>
                        <a clasName="nav__link" href="#">Obras</a>
                    </li>
                    <li>
                        <a clasName="nav__link" href="#">Sobre mí</a>
                    </li>
                    <li>
                        <a clasName="nav__link" href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar