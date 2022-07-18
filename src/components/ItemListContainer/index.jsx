import React from 'react';
import Title from '../Title';
import ItemCount from '../ItemCount';

export const ItemListContainer = ({ texto }) => {

    const onAdd = (quantify) => {
    console.log(`Compraste ${quantify} unidades`);
    }
    return (
        <>
        <Title greeting={texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;