import Button from "../Button/Button"

function ContactCard(props) {
    return (
        <div className="contact-card">
            <h2>Identificação: {props.id}</h2>
            <h3>Nome: {props.name}</h3>
            <h3>Idade: {props.age}</h3>
            <Button />
        </div>
    )
}

export default ContactCard