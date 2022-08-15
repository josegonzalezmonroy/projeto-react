import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <nav>
                <Link to='/'>{/*Deixei uma pequena navegação entre a página principal e o 'CreateContact'*/}
                    <button>Inicio</button>
                </Link>
                <Link to='/newcontact'>
                    <button>Criar contato</button>
                </Link>
            </nav>
        </header>
    )
}

export default Header