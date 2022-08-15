import './item.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({ info }) => {

   return (
         <Link to={`/detalle/${info.id}`} className="productos">
            <div className="Contenedor_productos">
               <img src={info.image} alt="" />
               <h2>{info.title} </h2>
               <p>{info.category} </p>
               <p>${info.price} </p>
            </div>
         </Link>
   );
}

export default Item;