import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(productos => {
                return productos.id === item.id ? { ...productos, quantity: productos.quantity + quantity } : productos
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(productos => productos.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(productos => productos.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;