import Image from 'next/image'
import React from 'react'

const Footer = ({user,type='desktop' }:FooterProps) => {
  return (
   <footer className='footer'>
      <div className={type==='mobile' ? 'footer_name-mobile':'footer_name'}>

            <p className='text-xl font- '>
                  {user.name[0]}
            </p>
      
      </div>

      <div className={type==='mobile' ? 'footer_email-mobile':'footer_email'}>
        <h1 className='text-14 truncate  text-gray-600 font-semibold' >
            {user.name}
        </h1>
        <p className='text-24 truncate font-normal text-gray-400'>
            {user.email}
        </p>
      </div>

   </footer>
  )
}

export default Footer