import React from 'react'
import { Link } from 'react-router-dom'

const AnimeCard = ({ anime }) => {
  return (
    <li>
      <Link className='anime-card' to={`/Anime-App/anime/${anime.mal_id}`}>
        <img className='anime-card__img' src={anime.images?.webp?.large_image_url} alt={anime.title} />
        <div className='anime-card__body'>
          <h3 className="anime-card__title">{anime.title}</h3>
          <div className='anime-card__info'>
            <span className="anime-card__type">{anime?.type}</span>
            <span className="anime-card__rating">{anime?.score}</span>
          </div>
        </div>
        {anime.synopsis &&
          <div className="anime-card__layout">
            <span className='anime-card__heading'>Information:</span>
            <p className="anime-card__descr">{anime?.synopsis}</p>
          </div>
        }
      </Link>
    </li>
  )
}

export default AnimeCard