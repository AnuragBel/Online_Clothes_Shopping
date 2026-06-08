import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    
    const {currency, wishlist, toggleWishlist} = useContext(ShopContext);

    const isWishlisted = wishlist.includes(id);

  return (
    <div className='relative group'>
      <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden relative'>
          <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className=' text-sm font-medium'>{currency}{price}</p>
      </Link>
      <button 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(id); }}
        className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-white border-none shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center z-10 transition-transform duration-200 hover:scale-110 ${isWishlisted ? 'active animate-[heartPop_0.3s_ease-in-out]' : ''}`}
        aria-label="Add to Wishlist"
      >
        <span className={`text-[18px] leading-none transition-colors duration-200 ${isWishlisted ? 'text-[#FF3B3B]' : 'text-[#AAAAAA]'}`}>
          {isWishlisted ? '♥' : '♡'}
        </span>
      </button>
    </div>
  )
}

export default ProductItem
