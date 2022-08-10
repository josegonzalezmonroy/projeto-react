import './Main.css'
import ClickCounter from '../ClickCounter/ClickCounter'
import ApiContact from '../ApiContact/ApiContact'
import ContactCard from '../ContactCard/ContactCard'

function Main() {
    return (
        <main>
            <ApiContact />
            <ClickCounter />
            <ContactCard />
        </main>
    )
}

export default Main