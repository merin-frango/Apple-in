import React from 'react'
import { FaApple } from "react-icons/fa";

const Promo = () => {
    return (
        <>
            {/* Trade */}
            <div className='w-full bg-white relative mt-5'>
                <div className='relative w-full'>
                    <img src="./public/images/p-1a.jpg" alt="" className='w-screen h-auto' />
                    <div className='absolute inset-0 md:inset-y-20 inset-x-0 flex flex-col items-center text-center gap-1 md:gap-3'>
                        <h2 className='flex items-center font-semibold  md:font-bold md:text-6xl text-2xl'><FaApple />Trade In</h2>
                        <p className='md:text-2xl md:w-96 text-wrap text-xs w-48'>Get extra credit towards a new iPhone when you trade in.</p>
                        <p className='text-gray-400 text-xs md:text-xl'>Now through 6.18</p>
                        <button className='text-xs md:text-lg rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 transition'>Get your Estimate</button>
                    </div>
                </div>
            </div>

            {/* MacBook*/}
            <div className='w-full bg-white relative mt-5'>
                <div className='relative w-full'>
                    <img src="./public/images/p-2.jpg" alt="" className='w-screen h-auto' />
                    <div className='absolute inset-0 md:inset-y-20 inset-x-0 flex flex-col items-center text-center gap-1 md:gap-3'>
                        <h2 className='flex items-center font-semibold md:font-bold md:text-6xl text-2xl'>MacBook Air</h2>
                        <p className='md:text-2xl md:w-96 text-wrap text-xs w-48'>Sky blue color.</p>
                        <p className='md:text-2xl md:w-96 text-wrap text-xs w-48'>Sky high performance with M4.</p>
                        <div className='flex gap-3 md:text-lg text-xs'>
                            <button className='rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 transition'>Learn more</button>
                            <button className="border border-blue-500 text-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">Buy</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid Section */}

            <div className='grid grid-clos-1 md:grid-cols-2 gap-4 p-4 bg-white'>

                <div className='relative'>
                    <img src="./public/images/p-3.jpg" alt="" className='w-screen' />
                    <div className='absolute md:inset-24 inset-10 items-center text-center gap-2 flex flex-col'>
                        <h2 className='flex items-center font-semibold text-2xl md:text-3xl'>College Students</h2>
                        <div>
                            <p className='md:text-xl md:w-96 text-wrap text-xs w-48'>Mac and iPhone.</p>
                            <p className='md:text-xl md:w-96 text-wrap text-xs w-48'>Major.In any field.</p>
                        </div>
                        <div className='flex gap-3 md:text-lg text-xs'>
                            <button className='md:text-base rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 transition'>Learn more</button>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img src="./public/images/p-4.jpg" alt="" className='w-screen' />
                    <div className='absolute md:inset-24 inset-7 items-center text-center gap-2 flex flex-col'>
                        <h2 className='flex items-center font-semibold text-3xl text-white'><FaApple />Privacy</h2>
                        <div>
                            <p className='md:text-xl md:w-96 text-wrap text-xs w-48 text-white'>That's iPhone.</p>
                        </div>
                        <div className='flex gap-3 md:text-lg text-xs'>
                            <button className='md:text-base rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 transition'>Learn more</button>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img src="./public/images/p-5.jpg" alt="" className='w-screen' />
                    <div className='absolute md:inset-96 inset-52 items-center text-center gap-2 flex flex-col'>
                        <h2 className='flex items-center font-semibold text-3xl text-white text-nowrap'>AirPods Pro 2</h2>
                        <div>
                            <p className='md:text-xl md:w-96 text-wrap text-xs w-48 text-white'>Now with a Hearing Aid feature.</p>
                        </div>
                        <div className='flex gap-3 md:text-lg text-xs'>
                            <button className='text-nowrap md:text-base rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 transition'>Learn more</button>
                            <button className=" md:text-base border border-blue-500 text-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">Buy</button>

                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img src="./public/images/p-6.jpg" alt="" className='w-screen' />
                    <div className='absolute md:inset-24 inset-10 items-center text-center gap-2 flex flex-col'>
                        <h2 className='flex items-center font-semibold text-3xl'><FaApple/>Card</h2>
                        <div>
                            <p className='md:text-xl md:w-80 text-wrap text-xs w-48'>Get up to 3% Daily Cash back with every purchase.</p>
                        </div>
                        <div className='flex gap-3 md:text-lg text-xs'>
                            <button className=' md:text-base rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 transition'>Learn more</button>
                            <button className="md:text-base border border-blue-500 text-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">Apply now</button>

                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img src="./public/images/p-7.jpg" alt="" className='w-screen' />
                    <div className='absolute md:inset-24 inset-10 items-center text-center gap-2 flex flex-col'>
                        <h2 className='flex items-center font-semibold md:text-3xl text-base'><img src="./public/images/watch.jpg" alt="" /></h2>
                        <div>
                            <p className='md:text-xl md:w-96 text-wrap text-xs w-48'>Thinstant classic.</p>
                        </div>
                        <div className='flex gap-3 md:text-lg text-xs'>
                            <button className='md:text-base rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 transition'>Learn more</button>
                            <button className="md:text-base border border-blue-500 text-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">Buy</button>

                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img src="./public/images/p-8.jpg" alt="" className='w-screen' />
                    <div className='absolute md:inset-24 inset-10 items-center text-center gap-2 flex flex-col'>
                        <h2 className='flex items-center font-semibold md:text-3xl text-base'><img src="./public/images/air.jpg" alt="" /></h2>
                        <div>
                            <p className='md:text-xl md:w-96 text-wrap text-xs w-48'>Now supercharged by the M3 chip.</p>
                        </div>
                        <div className='flex gap-3 md:text-lg text-xs'>
                            <button className='md:text-base rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 transition'>Learn more</button>
                            <button className="md:text-base border border-blue-500 text-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">Buy</button>
                        </div>
                    </div>
                </div>



            </div >

        </>
    )
}

export default Promo 