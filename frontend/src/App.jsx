import Maintenance from './Maintenance'
import InCharge from './InCharge'
import Meeting from './Meeting'
import Contacts from './Contacts'
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Home from './home'
import Navbar from './navbar'
import Login from './login';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
    <Router>
    {isAuthenticated && <Navbar />}
      <Routes>
      <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
       {isAuthenticated ? (<>
       <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/in-charge" element={<InCharge />} />
        <Route path="/meetings" element={<Meeting />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Home />}/>
        </>
        ):(<Route path="*" element={<Navigate to="/login" />} />)
        }
        
      </Routes>
    </Router>
    </>
  )
}

export default App
