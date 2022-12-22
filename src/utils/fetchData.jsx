const getAnimeByTitle = async (title) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${title}&limit=10`)
  const resData  = await response.json()

  return resData
}

const getAnimeById = async (id) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
  const resData  = await response.json()

  return resData
}

const getRandomAnime = async () => {
  const response = await fetch('https://api.jikan.moe/v4/random/anime')
  const resData  = await response.json()

  return resData
}

export { getAnimeByTitle, getAnimeById, getRandomAnime }