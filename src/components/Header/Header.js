import React from 'react'
import ClickCounter from '../ClickCounter/ClickCounter'
import './Header.css'

function Header() {
    return (
        <header>
            <h2> Eu sou o Header</h2>
            <ClickCounter />

        </header>
    )
}

export default Header