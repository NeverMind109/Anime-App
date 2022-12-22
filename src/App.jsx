import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import AnimePage from './pages/AnimePage'
import Footer from './components/Footer';

function App() {
  const [searchValue, setSearchValue] = useState('Naruto')

  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path='/Anime-App/' element = {<Home searchValue={searchValue} />}/>
        <Route path='/Anime-App/anime/:id' element = {<AnimePage searchValue={searchValue} />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
