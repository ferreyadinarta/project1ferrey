import React from 'react'
import Reason from './Reason'
import Questions from './Questions'
export default function Body2() {
    return (
        <>
            <div className='h-screen'>
                <div className='flex flex-row h-1/2'>
                    <Reason />
                    <div className='w-1/2 border-black border bg-cyan-300'>
                        <img className='h-full mx-auto' src='pictures/gambarbody2.png' />
                    </div>
                </div>
                <div className='flex flex-row h-1/2'>
                    <div className='w-1/2 border-black border bg-indigo-300'>
                        <img className='h-full mx-auto' src='pictures/skincare.png' />
                    </div>
                    <Questions />
                </div>
            </div>
        </>
    )
}
