import React from "react";
import { useCartContext } from '../../context/CartContext';
import './itemCart.css';

const ItemCart = ({ product })  => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.image} alt={product.title} className="imgCart"/>
            <div className="textoProduct" >
                <p>Obra: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: ${product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button className="btnCart" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;