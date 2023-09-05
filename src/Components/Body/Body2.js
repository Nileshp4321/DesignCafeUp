import React from 'react';

const Body2 = () => {
    return (
        <>
          <div className='w-screen '>
            <div className='relative flex flex-col '>
                <div className="relative container mx-auto m-8">
                    <img src="https://media.designcafe.com/wp-content/uploads/2021/01/13191244/residential-interior-designers-bangalore-946x662.jpg" />
                    <h1 className="absolute p-8 bg-gray-100 text-3xl text-black top-1/2 left-1/2 -translate-x-11/12 -translate-y-1/2">
                        Praveen And Shilpa Bysani’s 3 BHK Home In Bengaluru</h1>
                </div>
                <div className="relative justify-self-end container mx-auto m-3 -translate-x-9/12">
                    <img className='ml-32' src="https://media.designcafe.com/wp-content/uploads/2021/01/13191244/residential-interior-designers-bangalore-946x662.jpg" />
                    <h1 className="absolute p-16 bg-gray-100 text-3xl text-black top-1/2 right-9/12 -translate-x-9/12 -translate-y-1/2">
                    Modern 3 BHK Villa Of Harsh Johari</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <a href='#'>View More Projects</a>
                    <button type="button" className="m-3 text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Start Your Project</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Body2
