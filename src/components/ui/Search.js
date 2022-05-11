import React, { useState } from 'react'

function Search({getQuery}) {
    const[text, setText]=useState('')

const onChange=(q)=>{
  setText(q)
  getQuery(q)
}


  return (
    <section className='search'>
        <form>
            <input onChange={(e)=>onChange(e.target.value)} type='text' value={text} className='form-control' placeholder='Enter the name of a character' autoFocus/>
        </form>
    </section>
  )
}

export default Search