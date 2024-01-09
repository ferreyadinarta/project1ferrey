import React from 'react'

export default function Product() {
    const datas = [
        {
            bgcolor: 'bg-green-500',
            image: 'pictures/perfume1.png',
            imgheight: '200px',
            name: 'Perfume 1',
            price: 'Rp.100,000'
        },
        {
            bgcolor: 'bg-orange-500',
            image: 'pictures/perfume2.png',
            imgheight: '200px',
            name: 'Perfume 2',
            price: 'Rp.200,000'
        },
        {
            bgcolor: 'bg-pink-500',
            image: 'pictures/perfume3.png',
            imgheight: '200px',
            name: 'Perfume 3',
            price: 'Rp.300,000'
        }
    ]
    return (
        <div className='flex flex-row gap-8 justify-center'>
            {datas.map((data, index) => {
                return (
                    <div key={index} className='hover:cursor-pointer'>
                        <div className={`${data.bgcolor} align-center w-52 h-60 border-black border-2 shadow-[8px_8px_0_0_rgba(0,0,0,1)]`}>
                            <img src={data.image} className={`h-[${data.imgheight}]`}/>
                        </div>
                        <h2 className='font-light text-xl text-center pt-4'>{data.name}</h2>
                        <p className='font-bold text-xs text-center'>{data.price}</p>
                    </div>
                )
            })}
        </div>
    )
}
