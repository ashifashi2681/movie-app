import React from 'react'
import '../styles/Title.css'
function Title({title , icon}) {
  return (
    <div className='title-container'>
        <span>{icon}</span>
        <h3>{title} </h3>
    </div>
  )
}

export default Title