import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import ViewProducts from './ViewProducts'
import AddProducts from './AddProducts'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/user" element={<Dashboard/>}>
        <Route path="home" element={<Home/>}></Route>
        <Route path="view" element={<ViewProducts/>}></Route>
        <Route path="add" element={<AddProducts/>}></Route>
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
