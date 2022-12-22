import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

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
      <Link className="header__title" to='/Anime-App/'>MyAnimeList</Link>
      <form className="header__form" onSubmit={handleSubmit}>
        <input className="header__search" type="search" placeholder='Search your anime' onChange={(e) => {setSearchValue(e.target.value)}}/>
      </form>
    </header>
  )
}

export default Navbar