import React, { useEffect } from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import ReportGneneration from './components/ReportGeneration/ReportGneneration'
import UserEntryForm from './components/UserEntryForm/UserEntryForm'
import AdminPanel from './components/AdminPanel/AdminPanel'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  // this is basically to build the bst at app startup. do not remove these lines. they are working perfectly ok.


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Report" element={<ReportGneneration />} />
        <Route path="/UserEntryForm" element={<UserEntryForm />} />
        <Route path="/adminpanel" element={<AdminPanel/>} />
        <Route path="*" element={<div>404 Not Found!</div>} />
      </Routes>
    </Router>
  )
}

export default App
