import React from 'react'

export default function Questions() {
    return (
        <div className='w-1/2 p-8 border-black border'>
            <p className='font-bold text-2xl w-72'>You have <span className='text-pink-500'>questions</span> we have answers</p>
            <hr className='my-2' />
            <p className='text-l font-bold'>What is slugging in skincare?<button className='float-right font-light'>-</button></p>
            <img />
            <p className='text-xs'>Ea laborum sunt culpa duis in sunt amet nostrud ullamco tempor ullamco sit. Culpa in ut anim laboris excepteur aute. Culpa irure exercitation elit commodo ullamco incididunt cillum.</p>

            <hr className='my-2' />
            <p className='text-l font-bold'>Where are products made? <button className='float-right font-light'>+</button></p>

            <hr className='my-2' />
            <p className='text-l font-bold pb-2'>How to purchase our product? <button className='float-right font-light'>+</button></p>
        </div>
    )
}
