import React from 'react'

const Notification = () => {
  return (
    <div className='sticky top-0 z-40 h-14 bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white px-4 flex items-center justify-center text-center font-semibold text-sm md:text-base cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 animate-pulse'>
      <span className='max-w-2xl'>🎉 Free delivery for all orders over $50. Order your food now!</span>
    </div>
  )
}

export default Notification