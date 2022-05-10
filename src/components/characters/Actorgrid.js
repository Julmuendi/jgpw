import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'

export default function Actorgrid({items, isLoading}) {
  return isLoading ? <Spinner /> : 
  <section className='cards'>
  {items.map((item)=>{
    return(
      <CharacterItem key={item.char_id} item={item}/>
    )
  })}
  </section>

  }

