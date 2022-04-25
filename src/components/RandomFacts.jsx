import React from 'react'
import {facts} from '../utils/facts'

const RandomFacts = () => {
  const factsArr = facts()
  return (
    <div className='facts-container'>
        <h3 className='facts-title'>This is the Random Facts section</h3>
        <ul className='facts-list'>
            {factsArr.map((fact, i) => {
                return (
                    <li className='facts-item' key={i}>
                        {fact}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default RandomFacts