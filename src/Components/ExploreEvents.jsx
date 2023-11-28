import React from 'react'
import EEcarousel from './EEcarousel'
import EEResults from './EEResults'

export default function ExploreEvents() {
  return (
    <>
    <div className='yellow-strip'></div>
    <div className='padding'>
    <EEcarousel/>
    <EEResults/>
    </div>
    
    </>
  )
}
