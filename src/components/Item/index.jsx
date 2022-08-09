import './item.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({ info }) => {

   return (
         <Link to={`/detalle/${info.id}`} className="productos">
            <div className="Contenedor_productos">
               <img src={info.image} />
               <h2>{info.title} </h2>
               <p>{info.tecnica} </p>
               <p>${info.precio} </p>
            </div>
         </Link>
   );
}

export default Item;