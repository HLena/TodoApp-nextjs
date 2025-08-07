import Link from 'next/link'
import React from 'react'

const F1 = () => {
  return (
    <div className='p-2 border border-red-600 h-full'>
      <h1 className='text-2xl'>
        F1 page
      </h1>
      <div>
        <Link href="/f1/f2" className='text-blue-500 underline'>F2 page</Link>
      </div>
    </div>
  )
}

export default F1