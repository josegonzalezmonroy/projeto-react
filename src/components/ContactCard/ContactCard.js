import React from "react"
import { useState } from "react"
import Button from "../Button/Button"
import './ContactCard.css'


export default function ContactCard() {

    const [contact, setContact] = useState([])

    useState(() => {
        fetch('http://localhost:4000/contacts')
            .then(response => response.json())
            .then(contact => {
                setContact(contact)
                console.log(contact)
            }
            )
    })

    return (
        <div className="contact-cardd">
            {contact.map((contacts) => {
                return (
                    <div className="contact-card">
                        <ul key={contacts.id}>
                            <li className="contact-item">Nome: {contacts.name}</li>
                            <li className="contact-item">Telefone: {contacts.telefone}</li>
                            <li className="contact-item">Email: {contacts.email}</li>

                            </ul>
                        <Button />
                    </div>

                )
            })}
        </div>
    )
}
