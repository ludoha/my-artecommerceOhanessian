import React, { useEffect, useState } from 'react';

import ItemDetail from '../ItemDetail';


const productos = 
    { id: 1, image: "https://arteludmilaohanessian.com/img/atardecerconveleros.jpg", title: "Atardecer", tecnica:"Tecnica: Acrílico profesional", precio: "$120000"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;