import './itemDetail.css';

import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
            setGoToCart(true);
            addProduct(data, quantity);
    }

    return (
        <div className="container__detail">
            <div className="detail">
                <img className="detail_image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <h2>{data.category}</h2>
                    <h3>Técnica: {data.description}</h3>
                    <h3>{data.detail}</h3>
                    <h3>Medida: {data.size}</h3>
                    <br></br>
                    <h2 className="separacionPrice">${data.price}</h2>
                    {
                        goToCart
                            ? <Link to='/cart' className="btn_comprar">Terminar la compra!</Link>
                            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;