import React, { useState } from 'react'
import './CreateContact.css'

export default function CreateContact() {

    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newTelefone, setNewTelefone] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        const newContact = {
            name: newName,
            email: newEmail,
            telefone: newTelefone
        }
        console.log(newContact)

        setNewEmail('')
        setNewName('')
        setNewTelefone('')

        const response = await fetch('http://localhost:4000/contacts', {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        if (response.ok) {
            console.log('OK', response.ok)

        }
    }

    return (
        <div>
            <form className="create-contact">
                <label>Nome: <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} /></label>
                <label>Email: <input type='text' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} /></label>
                <label>Telefone: <input type='text' value={newTelefone} onChange={(e) => setNewTelefone(e.target.value)} /></label>
            </form>
            <button type="submit" onClick={handleSubmit} >Criar contato</button>

        </div>
    )
}