import React, { useState } from "react"
import './ContactCard.css'


export default function ContactCard() {

    const [contact, setContact] = useState([])

    useState(() => {
        fetch('http://localhost:4000/contacts')
            .then(response => response.json())
            .then(contact => {
                setContact(contact)
            }
            )
    })

    const handleDelete = async(id)=>{
        await fetch(`http://localhost:4000/contacts/${id}`, {
            method: 'DELETE'})
        console.log(`ID ${id} deletado com sucesso`)
    }
    
    return (
        <div className="contact-cardd">
            {contact.map((contacts) => {
                return (
                    <div key={contacts.id} className="contact-card">
                        <ul>
                            <li className="contact-item">Nome: {contacts.name}</li>
                            <li className="contact-item">Telefone: {contacts.telefone}</li>
                            <li className="contact-item">Email: {contacts.email}</li>
                        </ul>
                        <div>
                            <button onClick={() => { console.log('editar id >>> '+ contacts.id) }} >Editar</button>
                            <button onClick={() =>{handleDelete(contacts.id)}}>Apagar</button>
                        </div>

                    </div>



                )
            }
            )
            }
        </div>
    )
}
