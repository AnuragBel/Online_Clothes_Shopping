import React from 'react'
import Title from '../components/Title'

const Delivery = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src="https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg" alt="Delivery" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>We offer fast and reliable delivery to anywhere in the region.</p>
          <p>Standard delivery takes 3-5 business days, while express delivery options are available at checkout.</p>
          <p>For any queries about your order's delivery status, please contact our support team.</p>
        </div>
      </div>
    </div>
  )
}

export default Delivery
