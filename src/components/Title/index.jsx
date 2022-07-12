import React from 'react';
import "./title.css";

export const Title = ({ greeting }) => {
    return (
        <div className="container">
            <h1>{greeting}</h1>
        </div>
    );
}

export default Title;