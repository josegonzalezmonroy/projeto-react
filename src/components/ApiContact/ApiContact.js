import { useEffect, useState } from "react"

export default function ApiContact() {

    const [contact, setContact] = useState([])

    useState(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(contact => {
                setContact(contact)
                console.log(contact)
            }
            )
    })

    useEffect(
        ()=>{}
    )

    return (
        <div>
            <h1>Olá sou API contact</h1>
            <p>aaa{contact.length}aaa</p>
            <ul>
                {contact.map(
                    data => <li key={data.id}> {data.name}</li>
                )}
            </ul>
        </div>
    )

}