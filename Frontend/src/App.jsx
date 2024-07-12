import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import ReportGneneration from './components/ReportGeneration/ReportGneneration'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/report" element={<ReportGneneration/>} />
        <Route path="*" element={<div>404 Not Found!</div>} />
      </Routes>
    </Router>
  )
}

export default App
