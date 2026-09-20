import { useState } from 'react'
import { Routes, Route } from 'react-router'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import CreateExpensePage from './pages/CreateExpense'
import RegisterPage from './pages/Register'
import CreateUsernamePage from './pages/CreateUsername'
import LandingPage from './pages/LandingPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
      {/* <Route path='/expense/create' element={<ProtectedRoute><CreateExpensePage/></ProtectedRoute>}/> */}
      <Route path='/username' element={<CreateUsernamePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>

    </Routes>
  )
}

export default App
