import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Navbar() {
  
  return (
   <>
   <div>
      <nav className="navbar top-0 left-0 right-0 bg-gray-700 p-4 shadow-md flex justify-between items-center">
        <div className="logo text-2xl">
          <Link to="/" className="text-white hover:text-gray-300">Shriniketan</Link>
        </div>
        <ul className="flex space-x-6 p-2">
          <li><Link to="/maintenance" className="text-white hover:text-gray-300">Maintenance</Link></li>
          <li><Link to="/in-charge" className="text-white hover:text-gray-300">In-charge</Link></li>
          <li><Link to="/meetings" className="text-white hover:text-gray-300">Meetings</Link></li>
          <li><Link to="/contacts" className="text-white hover:text-gray-300">Contacts</Link></li>
        </ul>
      </nav>
      
      
    </div>
   </>
  )
}

export default Navbar