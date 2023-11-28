import React from 'react'
import Logo from "../Assets/posh-logo-w-typeface.svg"

export default function Navbar() {
  return (
    <>
    <div className='nav d-flex justify-content-between align-items-center px-4 py-2 position-absolute '>
    <div className='logo '>
        <img src={Logo} alt="Logo of POSH"  className='w-50 '/>
    </div>
    <div className='credentials'>
        <span className='me-4 text-white fw-light'>Login</span>
        <button className='btn rounded-5 px-4 py-2 color-Gold'> Create An Event</button>
    </div>
    </div>
    </>
  )
}
