import React, {useState, useEffect} from 'react';
import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';


const productos = [
    { id: 1, image: "https://arteludmilaohanessian.com/img/atardecerconveleros.jpg", title: "Atardecer", tecnica:"Acrílico profecional"},
    { id: 2, image: "https://arteludmilaohanessian.com/img/barcocontainero.jpg", title: "Barco Containero", tecnica:"Tecnica mixta acrílico y óleo"},
    { id: 3, image: "https://arteludmilaohanessian.com/img/merakio.jpg", title: "Merakio", tecnica:"Acuarela"},
    { id: 4, image: "https://arteludmilaohanessian.com/img/tomates.jpg", title: "Tomates", tecnica:"Pintura al óleo"},
];

export const ItemListContainer = ({ texto }) => {
    const  [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        });
        getData.then(res => setData(res));


    }, [])
    
    const onAdd = (quantify) => {
    console.log(`Compraste ${quantify} unidades`);
    }
    return (
        <>
        <Title greeting={texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;