import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/ui/Header'
import Actorgrid from './components/characters/Actorgrid'
import axios from 'axios'


export default function App(){
    const[items, setItems]=useState([])
    const[isLoading, setIsloading]=useState(true)

useEffect(()=>{
    const fetchItems=async()=>{
        const response=await axios(`https://www.breakingbadapi.com/api/characters`)

        console.log(response.data)
        setItems(response.data)
        setIsloading(false)
    }

    fetchItems()
})
    
    return(
        <div className='App'>
            <Header />
            <Actorgrid isLoading={isLoading} items={items}/>
        </div>
    )
}