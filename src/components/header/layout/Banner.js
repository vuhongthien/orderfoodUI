import React from 'react'
import banner from '../../../assets/bn.jpg'

function Banner() {
  return (
    <div className='container-fluid p-0'>
      <div className='row d-flex justify-content-center'>
        <img src={banner} alt="abc" style={{ width: "100%" }} ></img>
          <input className='col-md-4 border-0 position-absolute rounded-pill d-flex justify-content-center' style={{ height: "50px" }} type="search"></input>
      </div>
    </div>
  )
}

export default Banner