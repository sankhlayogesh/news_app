import React from 'react'
import loader from './loader.gif'

export default function Loader() {
  return (
    <div className='text-center'>
        <img src={loader} alt='Loading'/>
    </div>
  )
}
