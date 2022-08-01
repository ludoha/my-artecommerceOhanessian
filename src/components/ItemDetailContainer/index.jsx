import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css';

const productos = [
    { id: 1, image: "https://arteludmilaohanessian.com/img/atardecerconveleros.jpg",  category: 'Pinturas', title: "Atardecer", tecnica:"Tecnica: Acrílico profesional", precio: "$120000"},
    { id: 2, image: "https://arteludmilaohanessian.com/img/barcocontainero.jpg",  category: 'Pinturas', title: "Barco Containero", tecnica:"Tecnica: mixta acrílico y óleo",  precio: "$140000"},
    { id: 3, image: "https://arteludmilaohanessian.com/img/merakio.jpg", category: 'Pinturas', title: "Merakio", tecnica:"Tecnica: Acuarela", precio: "$8000"},
    { id: 4, image: "https://arteludmilaohanessian.com/img/tomates.jpg",  category: 'Pinturas', title: "Tomates", tecnica:"Tecnica: Pintura al óleo", precio: "$80000"},
    { id: 5, image: "https://arteludmilaohanessian.com/img/mujerfelina.JPG",  category: 'Dibujos', title: "Mujer Felina", tecnica:"Microfibra sobre papel",  precio: "$8000"},
    { id: 6, image: "https://arteludmilaohanessian.com/img/condorandino.JPG", category: 'Dibujos', title: "Cóndor Andino", tecnica:"Microfibra sobre papel", precio: "$8000"},
    { id: 7, image: "https://arteludmilaohanessian.com/img/esterosdelibera.jpg",  category: 'Dibujos', title: "Esteros del Iberá", tecnica:"Microfibra sobre papel", precio: "$8000"},
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();
    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getData.then(res => setData(res.find(Productos => Productos.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;