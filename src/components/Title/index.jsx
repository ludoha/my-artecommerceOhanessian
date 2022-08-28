import React from 'react';
import "./title.css";

export const Title = ({ greeting }) => {
    return (
        <div className="container">
            <h1><i class="bi bi-suit-heart-fill"></i> Bienvenidos a mi tienda de Arte! {greeting}</h1>
        </div>
    );
}

export default Title;