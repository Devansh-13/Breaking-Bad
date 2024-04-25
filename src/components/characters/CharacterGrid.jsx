import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    items.length > 0 ?
    <section className='cards'>
      
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
    :
    <div style={{textAlign:"center"}}>No characters found</div>
    
  )
}

export default CharacterGrid;