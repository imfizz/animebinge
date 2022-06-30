import React, { useEffect, useState } from 'react'
import './styles/app.sass'
import Header from './components/Header'
import Navbar from './components/Navbar'
import HeaderLink from './components/HeaderLink'
import Trending from './components/Trending'
import Episodes from './components/Episodes'
import Throwback from './components/Throwback'

function App() {
  // for trending
  const [anime, setAnime] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    fetch('./trendyData.json')
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

  const cards = anime.map(card => (<Trending data={card} key={card.id} updateAnime={updateAnime} />))
  const episodes = anime.map(episode => {
    if(episode.id == active) return <Episodes data={episode} key={episode.id} />
  })

  // for throwback
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch('./throwbackData.json')
    .then(res => res.json())
    .then(data => setImages(data))
  }, [images])

  const cards2 = images.map(image => (<Throwback key={image.id} src={image.src} />))


  return (
    <div className="main-container">
      <div className="top">
        <Navbar />
        <Header />
        <HeaderLink />
      </div>
      <div className="bottom">
        <div>
          { active > 0 ? 
              episodes 
              : 
              <div className="container">
                <div className="trendycontainer">
                  <h1>Trending <span>this week</span></h1>
                  <div className="content">
                    {cards}
                  </div>
                </div>
                <div className="throwbackcontainer">
                  <h1>Throwback Anime!</h1>
                  <div className="content">
                    {cards2}
                  </div>
                </div>
              </div>  
          }
        </div>
      </div>
    </div>
  );
}

export default App;
