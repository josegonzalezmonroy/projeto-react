import Main from '../Main/Main';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateContact from '../CreateContact/CreateContact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='content'>
          <Routes>
            <Route path="/*" element={<Main />} />
            <Route path='/newcontact' element={<CreateContact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
