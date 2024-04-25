import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image_url} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Character name:</strong> {item.name}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birth_date}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation[0]}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem