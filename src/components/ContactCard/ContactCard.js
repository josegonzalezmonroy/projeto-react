import React, { createContext, useState } from "react"
import EditContact from "../EditContact/EditContact"
import './ContactCard.css'

export const IdContext = createContext() //creando contexto para aproveitar o 'id' do meu contato

export default function ContactCard() {////componente 01

    const [contact, setContact] = useState([])
    const [id, setId] = useState()

    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newTelefone, setNewTelefone] = useState("")



    useState(() => {
        fetch('http://localhost:4000/contacts')
            .then(response => response.json())
            .then(contact => {
                setContact(contact)
                console.log(contact.length+' contatos')
            }
            )
    })

    const handleDelete = async (id) => {
        await fetch(`http://localhost:4000/contacts/${id}`, {
            method: 'DELETE'
        })
        console.log(`ID ${id} deletado com sucesso`)
    }

    return id === undefined ? (
        <div>
            {contact.map((contacts) => {
                return (
                    <div key={contacts.id} className="contact-card">
                        <ul>
                            {id}
                            <li className="contact-item">Id: {contacts.id}</li>
                            <li className="contact-item">Nome: {contacts.name}</li>
                            <li className="contact-item">Telefone: {contacts.telefone}</li>
                            <li className="contact-item">Email: {contacts.email}</li>
                        </ul>
                        <div>
                            <button onClick={()=>{
                                setId(contacts.id)
                                setNewName(contacts.name)
                                setNewEmail(contacts.email)
                                setNewTelefone(contacts.telefone)
                                }} >Editar</button>
                            <button onClick={() => { handleDelete(contacts.id) }}>Apagar</button>
                        </div>

                    </div>
                )
            }
            )
            }
        </div>

    ) : <div>
        <IdContext.Provider value={ {id, newName, newEmail, newTelefone} }>
            <EditContact />
        </IdContext.Provider>
    </div>
}