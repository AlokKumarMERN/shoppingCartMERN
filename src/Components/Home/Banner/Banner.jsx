import React from 'react'
import { Button } from 'react-bootstrap'
const Banner = () => {
  return (
    <div className=' d-flex flex-wrap justify-content-evenly p-2 m-1' style={{ backgroundColor: 'rgb(215, 255, 255)'}}>
      <Button variant="outline-dark" className='border-0'>Grocery</Button>
      <Button variant="outline-dark" className='border-0'>Makeup</Button>
      <Button variant="outline-dark" className='border-0'>Cosmetic</Button>
      <Button variant="outline-dark" className='border-0'>Perfume</Button>
      <Button variant="outline-dark" className='border-0'>Decoration</Button>
      <Button variant="outline-dark" className='border-0'>Gifts</Button>
      <Button variant="outline-dark" className='border-0'>Toys</Button>
    </div>
    
  )
}

export default Banner