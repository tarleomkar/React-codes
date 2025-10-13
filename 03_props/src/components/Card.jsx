import React from 'react'

const Card = ({user, age, img}) => {
  return (
    <div className='card'>
        <img src={img} alt="img" />
        <h1>{user}, {age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card
