import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/ui/Header'
import Actorgrid from './components/characters/Actorgrid'
import axios from 'axios'
import Search from './components/ui/Search'


export default function App(){
    const[items, setItems]=useState([])
    const[isLoading, setIsloading]=useState(true)
    const[query, setQuery]=useState('')
    

useEffect(()=>{
    const fetchItems=async()=>{
        const response=await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

        console.log(response.data)
        setItems(response.data)
        setIsloading(false)
    }

    fetchItems()
},[query])
    
    return(
        <div className='App'>
            <Header />
            <Search getQuery={(q)=>setQuery(q)}/>
            <Actorgrid isLoading={isLoading} items={items}/>
        </div>
    )
}