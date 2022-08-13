import { useContext, useState } from "react"
import { IdContext } from "../ContactCard/ContactCard"

export default function EditContact() {
    const { id, newName, newEmail, newTelefone } = useContext(IdContext)

    //novas variaveis para mandar o PATCH
    const [patchName, setPatchName] = useState(newName)
    const [patchEmail, setPatchEmail] = useState(newEmail)
    const [patchTelefone, setPatchTelefone] = useState(newTelefone)


    const handleSubmit = async () => {

        const newContact = {
            name: patchName,
            email: patchEmail,
            telefone: patchTelefone
        }
        console.log('Contato alterado', newContact)

        const patch = await fetch(`http://localhost:4000/contacts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(newContact),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        if (patch.ok) {
            console.log('<<< Contato modificado >>>', 'ID', id, patch.ok)
        } else (console.log(' <<< ERRO >>> '))
    }




    return(
        <form>
            <label>Nome:<input type='text' defaultValue={newName}
                onChange={(e) => setPatchName(e.target.value)}
            ></input></label>
            <label>Email: <input type='text' defaultValue={newEmail}
                onChange={(e) => setPatchEmail(e.target.value)}
            /></label>
            <label>Telefone: <input type='text' defaultValue={newTelefone}
                onChange={(e) => setPatchTelefone(e.target.value)}
            /></label>
            <button type="submit" onClick={(event) => {
                event.preventDefault()
                handleSubmit(id)
            }} >Alterar contato</button>
        </form>
    )
}