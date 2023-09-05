import React from 'react'

const Desinger = () => {
    return (
        <>
            <div className='container mx-auto m-32'>
                <div className='flex interiors justify-center grid grid-cols-2 gap-4'>
                    <div className=''>
                        <h1 className='text-2xl m-3 font-bold'>Meet Our Designers</h1>
                        <h1 className='text-xl m-3  '>The magicians who transform and create space...</h1>
                        <h1 className='text-xl m-3 text-justify'>Boho chic, rustic, mediterranean, minimalist, modern, industrial, classic-contemporary, art deco, traditional – do you get lost with these terms? Or perhaps you know what you want, but don’t know how to get there?</h1>
                        <h1 className='text-xl m-3 text-justify'>That is why we have a team of 400+ designers to advise customers.</h1>
                        <button type="button" className="ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Talk To Us Today!</button>
                    </div>
                    <div className='m-3'>
                        <img src='https://media.designcafe.com/wp-content/uploads/2023/01/03120622/top-10-best-interior-designers-bangalore-mumbai-hyderabad-india-690x380.webp' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Desinger
