import React from 'react'
import pic from '../images/business_img.jpeg';
export default function Profile() {
  return (
    <div className='box'>
      <div className ='content'>
        <img src={pic} alt='this is mme' />
      </div>
    </div>
  )
}
