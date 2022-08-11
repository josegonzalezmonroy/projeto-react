import './Button.css'


function handleClick(event) {
    console.log('Clicado!')
}


export default function Button() {
    return (
        <div>
            <button onClick={handleClick} >Editar</button>
            <button onClick={handleClick} >Apagar</button>

        </div>
    )
}
