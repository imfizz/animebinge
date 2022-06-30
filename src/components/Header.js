import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import FavoriteIcon from '@mui/icons-material/Favorite'

function Header() {

  return (
    <div className="header">
        <h1>Kimetsu no Yaiba</h1>
        <div className="content">
          <div className="ratings">
            <StarIcon style={{ color: "#FBC94A" }} />
            <span>5.0</span>
          </div>
          <div className="categories">
            <span>Category: Adventure fiction, Dark fantasy, Martial Arts</span>
          </div>
        </div>
        <p>Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.</p>
        <div className="buttons">
          <div className="watchnow">
            <PlayArrowIcon style={{ color: "#fff" }}/>
            <span>Watch Now!</span>
          </div>
          <div className="heart">
            <FavoriteIcon style={{ color: "#fff" }} />
          </div>
        </div>
    </div>
  )
}

export default Header