import React from 'react';
import "./title.css";

export const Title = ({ greeting }) => {
    return (
        <div className="container">
            <h1>Bienvenidos a mi tienda de Arte!{greeting}</h1>
        </div>
    );
}

export default Title;