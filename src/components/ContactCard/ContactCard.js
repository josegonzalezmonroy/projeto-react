import React, { useEffect, useState } from "react"
import EditContact from "../EditContact/EditContact"
import './ContactCard.css'


export default function ContactCard() {

    const [id, setId] = useState()
    const [contact, setContact] = useState([])
    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newTelefone, setNewTelefone] = useState("")

    const pushData = () => {
        fetch('http://localhost:4000/contacts')
            .then(response => response.json())
            .then(contact =>
                setContact(contact)
            )
    }

    useEffect(() => {
        pushData()
    }, [])

    const handleDelete = async (id) => {
        await fetch(`http://localhost:4000/contacts/${id}`, {
            method: 'DELETE'
        })
        console.log(`ID ${id} deletado com sucesso`)
        pushData()
    }

    const [contactsList, setContactsList] = useState(false)//usei esse state para renderizar 'EditContact'

    function showContactsList() {//função para condicionar a renderização do componente 'EditContact'
        setContactsList(!contactsList)
    }

    return (
        <div>
            <h1>Lista de contatos</h1>

            <div className="contactsList"> 
                {contactsList && <EditContact pushData={pushData} contactsList={contactsList} showContactsList={showContactsList} id={id} newName={newName} newEmail={newEmail} newTelefone={newTelefone} />}

                {contact.map((contacts) => {
                    return (
                        <div className="contact-content" key={contacts.id}>
                            <ul className="card-contact">
                                <li className="contact-item">Id: {contacts.id}</li>
                                <li className="contact-item">Nome: {contacts.name}</li>
                                <li className="contact-item">Email: {contacts.email}</li>
                                <li className="contact-item">Telefone: {contacts.telefone}</li>
                            </ul>
                            
                                <button onClick={() => {
                                    pushData()
                                    showContactsList()
                                    setId(contacts.id)
                                    setNewName(contacts.name)
                                    setNewEmail(contacts.email)
                                    setNewTelefone(contacts.telefone)
                                }} >Alterar</button>

                                <button onClick={() => {
                                    pushData()
                                    handleDelete(contacts.id)
                                }}>Excluir</button>


                        </div>
                    )
                }
                )
                }

            </div>
        </div>
    )
}