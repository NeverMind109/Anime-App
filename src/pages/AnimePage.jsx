import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import '../App'
import { getAnimeById } from '../utils/fetchData'

const AnimePage = () => {
  const [currentAnime, setCurrentAnime] = useState([])
  const { id } = useParams()

  let genres = []
  {currentAnime.genres && 
    currentAnime.genres.map(genre => (
      genres.push(genre.name)
    ))
    genres = genres.join(', ').split(' ')
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    getAnimeById(id).then(resData => setCurrentAnime(resData.data))
  }, [id])

  return (
    <main>
      <div className="container">
        <div className='anime-page'>
          <div className="anime-page__head">
            <img className='anime-page__img' src={currentAnime.images?.webp?.large_image_url} alt={currentAnime.title} />
            <div className='anime-page__body'>
              <h2 className="anime-page__title">{currentAnime.title}</h2>
              <h3 className='anime-page__another-title'>{currentAnime?.title_japanese}</h3>
              <div className='anime-page__block'>
                <span className='anime-page__item'><b>Date:</b>{currentAnime?.aired?.string}</span>
                <span className='anime-page__item'><b>Status:</b>{currentAnime?.status}</span>
              </div>
              <div className='anime-page__block'>
                <span className='anime-page__item'><b>Sourse:</b>{currentAnime?.source}</span>
                <span className='anime-page__item'><b>Type:</b>{currentAnime?.type}</span>
              </div>
              <div className="anime-page__genres">
                <span className='anime-page__text'><b>Genres:</b></span>
                <ul className='anime-page__list'>
                  {genres &&
                    genres.map((genre, idx) => (
                      <li className='anime-page__list-item' key={idx}>{genre}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='anime-page__block'>
                <span className='anime-page__item'><b>Rating:</b>{currentAnime?.score}</span>
                <span className='anime-page__item'><b>Popularity:</b>{currentAnime?.popularity}</span>
              </div>
              <div className='anime-page__block'>
                <span className='anime-page__item'><b>Episodes:</b>{currentAnime?.episodes}</span>
                <span className='anime-page__item'><b>Duration:</b>{currentAnime?.duration}</span>
              </div>
              <div className='anime-page__block'>
                <span className='anime-page__item'><b>Rating:</b>{currentAnime?.rating}</span>
              </div>
            </div>
          </div>
          <div className="anime-page__footer">
            {(currentAnime?.synopsis || currentAnime?.background) &&
              <h4 className='anime-page__subtitle'>Description:</h4>
            }
            <p className='anime-page__descr'>{currentAnime?.synopsis}</p>
            {currentAnime?.background &&
              <p className='anime-page__descr'>{currentAnime?.background}</p>
            }
            {currentAnime?.trailer?.url &&
              <a className="anime-page__trailer-video"
              href={currentAnime?.trailer?.url}
              target="_blank"
              rel="noreferrer">
                  <h4 className='anime-page__subtitle'>Trailer</h4>
                  <img className='anime-page__poster' src={currentAnime?.trailer?.images?.large_image_url} alt={currentAnime.title} />
              </a>
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default AnimePage