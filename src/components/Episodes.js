import React from 'react'
import StarIcon from '@mui/icons-material/Star'

function Episodes({ data }) {
  const { name, src, ratings, category, description, episodes} = data

  const cards = episodes.map(episode => {
    return (
        <div className="card" key={episode.id}>
            <div className="img" style={{ backgroundImage: `url('${episode.src}')`}}></div>
            <div className="carddescription">
                <h3>{episode.episode}</h3>
                <span>{episode.description}</span>
            </div>
        </div>
    )
  })

  return (
    <div className="episodes">
        
        <div className="left">
            <div className="bannercontainer" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${src})`}}>
                <div className="content">
                    <div className="text">
                        <h1>{name}</h1>
                        <p>Category: {category}</p>
                    </div>
                    <div className="ratings">
                        <StarIcon style={{ color: "#FBC94A" }} />
                        <span>{ratings}</span>
                    </div>
                </div>
            </div>
            <p>{description}</p>
        </div>

        <div className="right">
            <div className="rightheader">
                <h2>Episodes</h2>
                <h2>Season 1</h2>
            </div>
            <div className="rightcontent">
                {cards}
            </div>
        </div>
    </div>
  )
}

export default Episodes