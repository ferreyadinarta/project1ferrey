import React from 'react'

export default function Navbar() {
  const texts = ['Home', 'About', 'Products', 'Blogs']
  return (
    <div className='flex flex-row w-screen border border-black'>
      <div className='border-r-2 border-black p-3 w-1/5 text-center font-mono text-teal-600 font-bold'>Glowing</div>
      <div className='flex border-r-2 border-black w-3/6 items-center justify-center text-center gap-8 text-xs'>
        {texts.map((text, index) =>
          <a key={index} className='hover:cursor-pointer hover:text-teal-600' href='/test'>{text}</a>
        )
        }

      </div>
      <button className='p-3 w-1/6 text-xs hover:text-teal-600'>Login</button>
      <button className='p-3 w-1/6 text-xs bg-black text-white hover:text-teal-600'>Register</button>
    </div>
  )
}
