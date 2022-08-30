import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import './itemListContainer.css';
import { TabTitle } from '../../GeneralFuntions/Generalfuntions';



export const ItemListContainer = ({ texto }) => {
    TabTitle('Arte Ludmila Ohanessian');
    
    const  [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items');
        if (categoriaId) {  
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
            } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [categoriaId])
    
    return (
        <>
        <Title greeting={texto} className="titulo" />
        <div className="containerPrueba">
        <ItemList data={data} className="obras" />
        </div>
        </>
    );
}

export default ItemListContainer;