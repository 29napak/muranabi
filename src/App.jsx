import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { gql,useQuery } from '@apollo/client'
import {BrowserRouter,NavLink,Routes,Route} from "react-router-dom"


// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Blog from './pages/Blog'



function App() {
let activeClassName = "nav-active"
  return (
    <BrowserRouter>
   
    <nav>
      <NavLink end to="/" className={({isActive}) => isActive ? activeClassName : undefined}>home</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? activeClassName : undefined}>about</NavLink>
      <NavLink to="/contact" className={({isActive}) => isActive ? activeClassName : undefined}>contact</NavLink>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/posts/:id" element={<Blog/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
