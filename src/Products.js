import React from 'react'

export default function Products({ children }) {
    return (
        <div className='flex flex-col bg-orange-200 items-center gap-5 h-{40rem}'>
            <h1 className='font-bold text-3xl text-wrap pt-5'>Featured New Products</h1>
            <p className='text-xs text-wrap w-96 text-center'>Nourish your skin with fan favourite SPF body products. Shop limited-edition kits, special launches and more, only available here.</p>
            <div className='flex flex-row w-full h-96 justify-center'>
                {children}
            </div>
        </div>
    )
}
