import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

import { getAnimeByTitle, getRandomAnime } from '../utils/fetchData'
import AnimeCard from '../components/AnimeCard'


const Home = ({ searchValue }) => {
  const [animeData, setAnimeData] = useState([])
  const [anime, setAnime] = useState([])

  useEffect(() => {
    getAnimeByTitle(searchValue)
    .then(resData =>setAnimeData(resData.data))
    .catch((err) => {console.log(err)})
  }, [searchValue])

  useEffect(() => {
      getRandomAnime().then(resData =>setAnime(resData.data))
    }, [])

  return (
    <main className='content'>
      <div className="container">
        <h2 className="content__title">Anime List</h2>
        <ul className="content__list">
          {
            animeData.map((anime) => 
            <AnimeCard anime={anime} key={anime.mal_id} />)
          }
        </ul>
        <div className='content__random-btn-wrapper'>
          <Link className='content__random-btn' to={`/Anime-App/anime/${anime.mal_id}`}>Get random anime</Link>
        </div>
      </div>
    </main>
  )
}


export default Home