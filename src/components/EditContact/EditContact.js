import { useState } from "react"

export default function EditContact({ id, newName, newEmail, newTelefone, showContactsList, pushData }) {

    const [editName, setEditName] = useState(newName)
    const [editEmail, setEditEmail] = useState(newEmail)
    const [editTelefone, setEditTelefone] = useState(newTelefone)

    const handleSubmit = async () => {
        const editContact = {
            name: editName,
            email: editEmail,
            telefone: editTelefone
        }

        const patch = await fetch(`http://localhost:4000/contacts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(editContact),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        if (patch.ok) {
            pushData()
            console.log('<<< Contato modificado >>>', 'ID', id, patch.ok, editContact)
        } else (console.log(' <<< ERRO >>> '))
    }

    return (
        <div>
            <div>
                <form>
                    <label>Nome:<input type='text' defaultValue={newName}
                        onChange={(e) => setEditName(e.target.value)}
                    ></input></label>
                    <br />
                    <label>Email: <input type='text' defaultValue={newEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                    /></label>
                    <br />
                    <label>Telefone: <input type='text' defaultValue={newTelefone}
                        onChange={(e) => setEditTelefone(e.target.value)}
                    /></label>
                    <br />
                    <button type="submit" onClick={(event) => {
                        event.preventDefault()
                        showContactsList()
                        handleSubmit()
                    }} >Alterar contato</button>
                </form>
            </div>
        </div>
    )
}