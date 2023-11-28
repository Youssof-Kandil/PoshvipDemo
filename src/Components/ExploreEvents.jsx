import React from 'react'
import EEcarousel from './EEcarousel'
import EEResults from './EEResults'
import EEfilterBar from './EEfilterBar'

export default function ExploreEvents() {
  return (
    <>
    <div className='yellow-strip'></div>
    <div className='padding'>
    <EEcarousel/>
    <EEfilterBar/>
    <EEResults/>
    </div>
    
    </>
  )
}
