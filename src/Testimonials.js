import React from 'react'

export default function Testimonials() {
    return (
        <div className='bg-emerald-400 h-[450px] border border-black py-14'>
            <div className='flex flex-row justify-center'>
                <div className='w-1/2'>
                    <h1 className='text-4xl font-bold'>User Testimonials</h1>
                    <p className='font-bold text-md mt-8 mb-5'>"Best organic product that you could find!"</p>
                    <p className='font-light text-md mt-8 mb-5'>Consequat aliquip do velit Lorem consequat velit amet. Laborum fugiat eu ullamco mollit sint eu id id sunt id culpa cupidatat exercitation. Minim sunt Lorem proident Lorem cillum ullamco labore aute. Et dolore duis fugiat elit do. Ad velit aute consectetur nostrud cillum eiusmod in eiusmod quis. Est dolore eiusmod Lorem irure fugiat veniam fugiat qui enim minim ad officia minim irure.</p>
                    <div>
                        <button className='hover:cursor-default'><img className='inline-block rotate-180 mx-2 opacity-40' src='pictures/arrow-right-solid.svg' /></button>
                        <button href="/">
                            <img className='inline-block' src='pictures/arrow-right-solid.svg' />
                        </button>
                    </div>
                </div>
                <div className='relative bg-pink-400 w-60 h-72 my-auto shadow-[8px_8px_0_0_rgba(0,0,0,0.8)] ml-5'>
                    <img className='absolute bottom-0' src='pictures/gambarbody1.png'/>
                </div>
            </div>
        </div>
    )
}
