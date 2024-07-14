import React,{useEffect} from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import ReportGneneration from './components/ReportGeneration/ReportGneneration'
import UserEntryForm from './components/UserEntryForm/UserEntryForm'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {insertEmployee} from './redux/actions.js'
import data from './Data'
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    data.forEach(employee => {
      dispatch(insertEmployee(employee));
    });
  }, [dispatch]);


  return (
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Report" element={<ReportGneneration/>} />
        <Route path="/UserEntryForm" element={<UserEntryForm/>} />

        <Route path="*" element={<div>404 Not Found!</div>} />
      </Routes>
    </Router>
  )
}

export default App
