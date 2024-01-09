import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6'

export default function Footer() {
    return (
        <>
            <div className='h-96 bg-slate-800 flex flex-row p-14 gap-[120px] items-center'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-white text-md'>Glowing</h1>
                    <p className='text-slate-400 text-wrap text-xs w-44'>Keep up with our news releases, bauty tips and what Emma's been up to.</p>
                    <div className='flex flex-row gap-4 text-white'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>

                <ul className='text-slate-400 text-xs space-y-7'>
                    <li className='font-bold text-s text-white'>Company</li>
                    <li>About</li>
                    <li>Jobs</li>
                    <li>Branding</li>
                </ul>

                <ul className='text-slate-400 text-xs space-y-4'>
                    <li className='font-bold text-s text-white'>Resources</li>
                    <li>College</li>
                    <li>Support</li>
                    <li>Safety</li>
                    <li>Streamkit</li>
                </ul>

                <ul className='text-slate-400 text-xs space-y-4'>
                    <li className='font-bold text-s text-white'>Terms & Condition</li>
                    <li>Policy</li>
                    <li>Faq</li>
                    <li>Return & Delivery</li>
                    <li>Tracking</li>
                </ul>

                <ul className='text-slate-400 text-xs space-y-4'>
                    <li className='font-bold text-s text-white'>Subscribe</li>
                    <li>Get 10% off of your first order</li>
                    <li><form></form><input className='p-2' type='text' placeholder='Enter your email'></input></li>
                </ul>
            </div>
            <p className='bg-slate-800 text-slate-500 border-t-2 border-slate-500 mx-auto text-xs py-2 text-center'>Copyright @ 2022 Glowing | All Rights Reserved</p>
        </>
    )
}
