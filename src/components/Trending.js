import React from 'react'
import StarIcon from '@mui/icons-material/Star'

function Trending({ data, updateAnime }) {
  const {id, name, src, ratings, category } = data

  return (
    <div className="trending" onClick={(e) => updateAnime(id) }>
        <div className="content">
            <div className="text">
                <h1>{name}</h1>
                <p>{category}</p>
            </div>
            <div className="ratings">
                <StarIcon style={{ color: "#FBC94A" }}/>
                <span>{ratings}</span>
            </div>
        </div>
        <div className="bg" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.9)), url(${src})`}}></div>
    </div>
  )
}

export default Trending