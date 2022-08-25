import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import '../ItemCart/itemCart.css';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    

    
    if (cart.length === 0) {
        return (
            <>  
                <div className="carritoVacio">
                    <p>No hay productos en el carrito...</p>
                    <Link to='/' className="carritoVacioLink">Compra tus obras preferidas!</Link>
                </div>
            </>
        )
    }
    const FormCompra = () => {
        
        const order = {
            items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
            total: totalPrice(),
        }
    
        const [ form, setForm ] = useState({
            name: "",
            phone: "",
            email: "",
            order: order
        });
        
        const [id, setId] = useState();
    
    
        const changeHandler = (ev) => {
            const {value, name} = ev.target;
            setForm({...form, [name]: value});
        }
        
        const submitHandler = (ev) => {
            ev.preventDefault();
            console.log(form, order);
    
            const db =  getFirestore();
            const formFinalCompra = collection(db, "FormCompra");
            addDoc(formFinalCompra, form, order).then(snapshot => setId(snapshot.id));
        }
    
        return (
            <div>
                {(typeof id !== "undefined") ?
                <div className="numPedido"><h2>Número de pedido: {id}</h2></div> : 
                <form onSubmit={submitHandler} className="formularioCompra">
                    <div className="labelForm">
                        <label htmlFor="name">Nombre:</label>
                        <input name="name" className="inputCart" id="name" value={form.name} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="phone">Teléfono:</label>
                        <input type="phone" className="inputCart" name="phone" id="phone" value={form.phone} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="email">Mail:</label>
                        <input type="email" className="inputCart" name="email" id="email" value={form.email} onChange={changeHandler} />
                    </div>

                    <button className="btnFormCart">Enviar</button>
                </form> 
                }
            </div>
        )
    }
    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p className="textoPrecioCart">
                Total: ${totalPrice()}
            </p>
            <FormCompra />
        </>
    );
}

export default Cart;