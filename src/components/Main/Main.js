import './Main.css'
import ContactCards from '../ContactCard/ContactData'
import ClickCounter from '../ClickCounter/ClickCounter'

function Main() {
    return (
        <main>
            <ClickCounter />
            <ContactCards />
        </main>
    )
}

export default Main