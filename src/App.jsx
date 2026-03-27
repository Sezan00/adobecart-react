import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Singup from './AuthUser/SignUp'
import LoginPage from './AuthUser/Login'
import HomePage from './Home/Home'
import AccountDropdown from './Component/AccountDropdown'
import ManageAccount from './Pages/ManageAccount'
import Address from './Adress/Address'
import CreateAddress from './Adress/CreateAddress'
function App() {
  return(
   <Routes>
    <Route path='/singup' element={<Singup/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='comp' element={<AccountDropdown/>}/>
    <Route path='/manage-account' element={<ManageAccount/>}/>
    <Route path='/address' element={<Address/>}/>
    <Route path='/create-address' element={<CreateAddress/>}/>
  </Routes>
  )
 
}

export default App
