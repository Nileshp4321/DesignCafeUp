import React from 'react'

const Body = () => {
    return (
        <>
            <div className='interiors container flex flex-col m-8 mx-auto justify-center '>
                <div className='container'>
                    <div>
                        <h1 className='text-2xl mt-8'>Home Interiors Made Easy</h1>
                    </div>
                    <div>
                        <p className='mt-5'>You book a consultation, get guided by one of the 400+ top-notch interior designers, and we take care of the rest, from start to finish. We have done it for more than 10,000 homes already.</p>
                    </div>  
                </div>
                <div className='interiors container flex m-5 '>
                    <div className="max-w-sm bg-white m-3 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src="https://media.designcafe.com/wp-content/uploads/2020/03/21013839/book-appointment-with-best-interior-designers-340x340.jpg" alt="" />
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">01 Book an appointment</h5>
                            </a>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white m-3 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src="https://media.designcafe.com/wp-content/uploads/2020/03/21013840/meet-best-interior-designers-near-me-340x340.jpg" alt="" />
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">02 Meet our designers</h5>
                            </a>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white m-3 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src="https://media.designcafe.com/wp-content/uploads/2020/03/21013836/personalised-interior-designs-by-top-interior-designers-340x340.jpg" alt="" />
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">03 Personalise your designs</h5>
                            </a>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white m-3 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src="https://media.designcafe.com/wp-content/uploads/2023/02/06110805/best-interiors-delivered-mumbai-bangalore-hyderabad-340x340-1.webp" alt="" />
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">04 Move in</h5>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <a href='#'>Learn More </a>
                    <button type="button" className="m-3 text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started Now</button>
                </div>
            </div>
        </>
    )
}

export default Body
