import React from 'react'

function Throwback({ src }) {

  return (
    <div className="throwback" style={{ backgroundImage: `url('${src}')`}}></div>
  )
}

export default Throwback