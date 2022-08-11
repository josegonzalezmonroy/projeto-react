import './Button.css'


function handleClick(event) {
    console.log('Clicado!')
}

function handleOver(event){
    console.log('Passou por cima')
}

function Button() {
    return (
        <div>
            <button onMouseOver={handleOver} >Cadastrar</button>
            <button onClick={handleClick} >Editar</button>
            <button onClick={handleClick} >Apagar</button>

        </div>
    )
}

export default Button