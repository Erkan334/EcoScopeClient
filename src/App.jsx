import { useState } from 'react'
import { Routes, Route } from 'react-router'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import CreateExpensePage from './pages/CreateExpense'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
      <Route path='/expense/create' element={<ProtectedRoute><CreateExpensePage/></ProtectedRoute>}/>
      <Route path='/login' element={<LoginPage/>}/>

    </Routes>
  )
}

export default App
