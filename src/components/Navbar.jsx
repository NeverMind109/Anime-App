import React from 'react'
import { useNavigate } from 'react-router-dom';

import '../App.css'

const Navbar = ({ searchValue, setSearchValue }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      navigate(`/Anime-App/`);
    }
    searchValue = ''
  }

  return (
    <header className="header">
      <a className="header__title" href='/'>MyAnimeList</a>
      <form className="header__form" onSubmit={handleSubmit}>
        <input className="header__search" type="search" placeholder='Search your anime' onChange={(e) => {setSearchValue(e.target.value)}}/>
      </form>
    </header>
  )
}

export default Navbar