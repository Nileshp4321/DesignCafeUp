import React from 'react'

const Footer2 = () => {
    return (
        <>
            <div className='container mx-auto  grid grid-rows-1 grid-flow-col grid-col-2 gap-4'>
                <div className='col-span '>
                    <div><h1 className='text-2xl font-semibold mt-3'>Get Design Ideas On Our Blog</h1></div>
                    <div className=''>
                        <img src='https://media.designcafe.com/wp-content/uploads/2021/06/25133536/home-interior-on-emi-800x492.jpg' />
                    </div>
                    <div className='flex justify-center grid grid-cols-2 gap-4'>
                        <div className=''>
                            <h1 className='text-2xl m-3 font-semibold'>Home Interior Design Ideas</h1>
                            <p className='text-xl m-3  '>Your home deserves the best just like you. Don't let budget constraints ruin your dream. Choose our affordable EMI options instead. Home Interiors play ...</p>
                            <h1 className='text-xl m-3 text-justify'>Our key strengths include:</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto  '>
                <div id="gallery" className="relative w-full " data-carousel="slide">
                    {/* <!-- Carousel wrapper --> */}
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {/* <!-- Item 1 --> */}
                        <div className="hidden duration-300 ease-in-out" data-carousel-item>
                            <img src="https://media.designcafe.com/wp-content/uploads/2021/03/30154814/most-innovative-home-interior-solutions-times-business-award.png" className="absolute mt-32 block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div className="hidden duration-300 ease-in-out" data-carousel-item="active">
                            <img src="https://media.designcafe.com/wp-content/uploads/2021/03/30154810/most-entreprising-businesss-entrepreneur-india-award.png" className="absolute mt-32 block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div className="hidden duration-300 ease-in-out" data-carousel-item>
                            <img src="https://media.designcafe.com/wp-content/uploads/2021/03/30154806/most-innovative-home-interior-startup-entrepreneur-india-award.png" className="absolute mt-32 block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                        </div>
                        {/* <!-- Item 4 --> */}
                        <div className="hidden duration-300 ease-in-out" data-carousel-item>
                            <img src="https://media.designcafe.com/wp-content/uploads/2021/03/30154819/most-innovative-interior-design-company-quikr-homes.png" className="absolute mt-32 block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                        </div>
                        {/* <!-- Item 5 --> */}
                        <div className="hidden duration-300 ease-in-out" data-carousel-item>
                            <img src="https://media.designcafe.com/wp-content/uploads/2021/03/30154824/best-home-interior-design-company-commonfloor-realty-award.png" className="absolute mt-32 block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                        </div>
                        <div className="hidden duration-300 ease-in-out" data-carousel-item>
                            <img src="https://media.designcafe.com/wp-content/uploads/2021/03/30154814/most-innovative-home-interior-solutions-times-business-award.png" className="absolute mt-32 block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                        </div>
                        <div className="hidden duration-300 ease-in-out" data-carousel-item>
                            <img src="https://media.designcafe.com/wp-content/uploads/2021/03/30154810/most-entreprising-businesss-entrepreneur-india-award.png" className="absolute mt-32 block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                        </div>
                    </div>
                    {/* <!-- Slider control s --> */}
                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default Footer2
