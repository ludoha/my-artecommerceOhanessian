import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css';



export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'items', detalleId);
        getDoc(queryDoc)
        .then(res => setData({ id: res.id, ...res.data() }))
    }, [detalleId])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;