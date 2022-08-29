
import React from 'react';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import './contactForm.css';

const ContactForm = () => {

    const [ form, setForm ] = useState({
        name: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
    });
    
    const [id, setId] = useState();


    const changeHandler = (ev) => {
        const {value, name} = ev.target;
        setForm({...form, [name]: value});
    }
    
    const submitHandler = (ev) => {
        ev.preventDefault();
        console.log(form);

        const db =  getFirestore();
        const formContacto = collection(db, "ContactForm");
        addDoc(formContacto, form).then(snapshot => setId(snapshot.id));
    }

    return (
        <div>
            {(typeof id !== "undefined") ?
            <div className="consulta">
                <h2 className="enviado">Enviado!</h2>
                <h3>Código de consulta: {id}</h3></div> : 
            <form onSubmit={submitHandler} className="ContactForm">
                <h2>Contactate para encargar obras a pedido!</h2>
                <h3>O dejanos tu consulta:</h3>
                <div className="labelForm">
                    <label htmlFor="name">Nombre:</label>
                    <input name="name" className="inputForm" id="name" value={form.name} onChange={changeHandler} />
                </div>
                <div className="labelForm">
                    <label htmlFor="name">Apellido:</label>
                    <input name="lastname" className="inputForm" id="lastname" value={form.lastname} onChange={changeHandler} />
                </div>
                <div className="labelForm">
                    <label htmlFor="phone">Teléfono:</label>
                    <input type="phone" className="inputForm" name="phone" id="phone" value={form.phone} onChange={changeHandler} />
                </div>
                <div className="labelForm">
                    <label htmlFor="email">Mail:</label>
                    <input type="email" className="inputForm" name="email" id="email" value={form.email} onChange={changeHandler} />
                </div>
                <div className="labelForm">
                    <label htmlFor="name">Mensaje:</label>
                    <textarea name="message" className="inputForm" id="message" value={form.message} onChange={changeHandler} />
                </div>
                <button className="btnFormCart">Enviar</button>
            </form> 
            }
            <ul className='datosContacto'>
                <li className='liCont'><i class="bi bi-telephone-fill"></i>
                <h3>+54 9 11 5745-1254</h3></li>
                <li className='liCont'><i class="bi bi-envelope-fill"></i>
                <h3><a href="mailto:ludmilaoha.arte@gmail.com">ludmilaoha.arte@gmail.com</a></h3></li>
                <li className='liCont'><i class="bi bi-geo-alt-fill"></i>
                <h3>Buenos Aires, Argentina.</h3></li>
            </ul>
        </div>
        );
}

export default ContactForm;