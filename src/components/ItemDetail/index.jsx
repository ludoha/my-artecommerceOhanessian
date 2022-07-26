import React from 'react';
import './itemDetail.css';

export const ItemDetail = ({ data }) => {
    return (
        <div className="container__detail">
            <div className="detail">
                <img className="detail_image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <h2>{data.tecnica}</h2>
                    <h2>{data.precio}</h2>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;