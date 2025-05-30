import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Feature from '../components/Feature'
import Near from '../components/Near'

const Landingpage = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Feature />
      <div className='container-fluid p-5'>
        <Near />
      </div>
    </>
  )
}

export default Landingpage
