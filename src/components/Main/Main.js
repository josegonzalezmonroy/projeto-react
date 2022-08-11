import React from 'react'
import './Main.css'
import ContactCard from '../ContactCard/ContactCard'
import CreateContact from '../CreateContact/CreateContact'

function Main() {
    return (
        <main>
            <CreateContact />
            <ContactCard />
        </main>
    )
}

export default Main