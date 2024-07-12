import React from 'react'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import ReportGneneration from './components/ReportGneneration'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/report" element={<ReportGneneration/>} />
        <Route path="*" element={<div>404 Not Found!</div>} />
      </Routes>
    </Router>
  )
}

export default App
