import ContactCard from './ContactCard'
import contactsTeste from '../ContactCard/ContactsTeste'

function ContactCards() {

    const contacts = contactsTeste.map(

        (contact) => {
            return (
                <ContactCard
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    age={contact.age}
                />
            )
        }
    )
    return (
        <div>{contacts}</div>
    )


}
export default ContactCards