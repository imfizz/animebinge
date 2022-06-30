import React, { useEffect, useState } from 'react'
import '../styles/layout.sass'
import Header from './Header'
import Navbar from './Navbar'
import HeaderLink from './HeaderLink'
import Trending from './Trending'
import Episodes from './Episodes'


function Layout() {
  const [anime, setAnime] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    fetch('./animeData.json')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setAnime(data)
    })
  }, [])

  function updateAnime(id){
    setAnime(prevAnimes => {
      return prevAnimes.map(prevAnime => {
        if(prevAnime.id == id) {
          setActive(id)
          return { ...prevAnime, enabled: true }
        }
    
        return { ...prevAnime, enabled: false }
      })
    })
  }

  const [images, setImages] = useState([])
  useEffect(() => {
    fetch('./throwbackData.json')
    .then(res => res.json())
    .then(data => setImage(data))
  }, [images])


  const cards = anime.map(card => (<Trending data={card} key={card.id} updateAnime={updateAnime} />))


  const episodes = anime.map(episode => {
    if(episode.id == active) return <Episodes data={episode} key={episode.id} />
  })

  return (
    <div className="main-container">
      <div className="top">
        <Navbar />
        <Header />
        <HeaderLink />
      </div>
      <div className="bottom">
        <h1>Trending <span>this week</span></h1>
        <div className="cardscontainer">
          { active > 0 ? 
              episodes 
              : 
              <div> 
                {cards} 
                <Throwback />
              </div> 
          }
        </div>
      </div>
    </div>
  )
}

export default Layout