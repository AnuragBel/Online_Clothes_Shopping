import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { Link, useNavigate } from 'react-router-dom'

const Wishlist = () => {

    const { products, wishlist } = useContext(ShopContext);
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (products.length > 0) {
            const wishlistItems = products.filter(item => wishlist.includes(item._id));
            setWishlistProducts(wishlistItems);
        }
    }, [products, wishlist])

  return (
    <div className='pt-10'>
      
      <div className=' text-2xl mb-8'>
          <Title text1={'MY'} text2={`WISHLIST (${wishlistProducts.length} items)`} />
      </div>

      {wishlistProducts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6'>
            {
                wishlistProducts.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2'>
                        <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
                        <button 
                          onClick={() => navigate(`/product/${item._id}`)}
                          className='w-full bg-black text-white text-sm py-2 px-4 hover:bg-gray-800 transition-colors mt-auto'
                        >
                          Add to Cart
                        </button>
                    </div>
                ))
            }
        </div>
      ) : (
        <div className='text-center py-20 flex flex-col items-center'>
            <p className='text-xl text-gray-500 mb-6'>Your wishlist is empty 💔</p>
            <Link to='/collection' className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
                Continue Shopping
            </Link>
        </div>
      )}
      
    </div>
  )
}

export default Wishlist