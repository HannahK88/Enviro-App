import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RandomFacts from './RandomFacts'
import {FaRecycle} from 'react-icons/fa'

const Home = () => {
    const [locationInput, setLocationInput] = useState()
    const [location, setLocation] = useState('Bradford')

    const handleChange = (e) => {
      setLocationInput(e.target.value)
    }
    const handleClick = (e) => {
      e.preventDefault()
      const value = e.target.value
      console.log('value:', value)
      setLocation(value)
    }
  console.log('location:', location)    
  console.log('locationInput:', locationInput)
  return (
    <div className='page-wrapper'>
        <div className='input-container'>
          <input placeholder='Enter Your City' name='location-input' type="text" onChange={handleChange}/>
          <button className='go-btn' value={locationInput} onClick={handleClick}><FaRecycle /></button>
        </div>
        <div className='result-container'>
          <Link to='/fossil-fuels' className='result-card'>Fossil Fuels Burnt</Link>  
          <Link to='/air-pollution' className='result-card'>Air Pollution</Link>  
          <Link to='/water-pollution' className='result-card'>Water Pollution</Link>  
          <Link to='/not-recycled' className='result-card'>Waste Not Recycled</Link>  
        </div>
        <RandomFacts />
    </div>
  )
}

export default Home