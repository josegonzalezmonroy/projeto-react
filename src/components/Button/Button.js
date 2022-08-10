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
            <button onClick={handleClick} >Me clique</button>
            <button onMouseOver={handleOver} >Me clique 2</button>
        </div>
    )
}

export default Button