import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import '../ItemCart/itemCart.css';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    
    if (cart.length === 0) {
        return (
            <>  
                <div className="carritoVacio">
                    <p>No hay productos en el carrito...</p>
                    <Link to='/' className="carritoVacioLink">Compra tus obras preferidas!</Link>
                </div>
            </>
        )
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p className="textoPrecioCart">
                Total: ${totalPrice()}
            </p>
        </>
    );
}

export default Cart;