import './item.css';

import React from 'react';

const Item = ({info}) => {
   return (
         <a href='' className="productos">
            <img src={info.image} />
            <h2>{info.title} </h2>
            <p>{info.tecnica} </p>
         </a>
   );
}

export default Item;