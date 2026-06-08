import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Build trust before the customer even clicks Buy.
            Clearly feature trust-building policies like "30-Day Money-Back Guarantee" or "Free & Easy Returns" in a prominent banner or near your primary calls to action — and place recognisable security and payment logos in your site footer to assure customers their information is safe.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><Link to='/' onClick={() => window.scrollTo(0,0)}>Home</Link></li>
                <li><Link to='/about' onClick={() => window.scrollTo(0,0)}>About us</Link></li>
                <li><Link to='/delivery' onClick={() => window.scrollTo(0,0)}>Delivery</Link></li>
                <li><Link to='/privacy-policy' onClick={() => window.scrollTo(0,0)}>Privacy policy</Link></li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 98276 54728</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
        </div>

    </div>

  )
}

export default Footer
