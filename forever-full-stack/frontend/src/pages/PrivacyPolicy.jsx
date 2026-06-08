import React from 'react'
import Title from '../components/Title'

const PrivacyPolicy = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'PRIVACY'} text2={'POLICY'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg" alt="Privacy Policy" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>This is the Privacy Policy page. We value your privacy and are committed to protecting your personal information.</p>
          <p>Information we collect is used solely to improve your shopping experience and provide the services you request.</p>
          <p>We do not share your personal information with third parties without your consent.</p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
