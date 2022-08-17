import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import CreateContact from '../CreateContact/CreateContact';
import ContactCard from '../ContactCard/ContactCard';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <h1>Agenda de contatos</h1>
        <Routes>
          <Route path="/*" element={<ContactCard />} />
          <Route path='/newcontact' element={<CreateContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
