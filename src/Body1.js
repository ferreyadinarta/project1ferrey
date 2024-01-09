import React from 'react'

export default function Body1() {
    return (
        <div className='flex flex-row'>
            <div className='flex flex-col gap-3 w-1/2 h-96 border border-black bg-yellow-300 justify-center items-center relative'>
                <h1 className='w-1/2 font-bold text-wrap text-3xl'>Holistic beauty and wellness essential oil based product</h1>
                <p className='w-1/2 text-xs'>We want to build to the world through our products that very special feeling of oveflowing joy.</p>
                <button className='font-bold text-white bg-black px-3 py-1 shadow-[3px_3px_0_0_rgba(0,0,0,0.3)]'>Shop Now</button>
            </div>

            <div className='w-1/2 h-96 border border-black bg-teal-400 relative'>
                <img src='pictures\gambarbody1.png' className='h-96 border-1 border-b border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-2' />
            </div>
        </div>
    )
}
