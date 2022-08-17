import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CreateContact.css'

export default function CreateContact() {

    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newTelefone, setNewTelefone] = useState("")

    const handleSubmit = async () => {

        const newContact = {
            name: newName,
            email: newEmail,
            telefone: newTelefone
        }

        const response = await fetch('http://localhost:4000/contacts', {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        if (response.ok) {
            console.log('OK', response.ok)
        } else { console.log('nada') }
    }

    return (
        <div className="create-contact">
            <form className='form-create'>
                    <span className='title'>Nome:</span>
                <label>
                    <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} />
                </label>
                <br />
                <span className='title'>Email:</span>
                <label> <input type='text' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} /></label><br />
                <span className='title'>Telefone:</span>
                <label> <input type='text' value={newTelefone} onChange={(e) => setNewTelefone(e.target.value)} /></label><br />
            </form>
            <Link to='/'> {/*link para ir até a página principal*/}
                <button type="submit" onClick={handleSubmit}>Criar contato</button>
            </Link>
        </div>
    )
}