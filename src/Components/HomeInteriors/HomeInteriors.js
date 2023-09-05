import React from 'react'

const HomeInteriors = () => {
  return (
    <>
        <div className='container mx-auto m-8'>  
                <div><h1 className='text-2xl'>Guides For Home Interiors</h1></div>
                <div>
                    <ul className='flex justify-between mt-5'>
                        <li>Kitchen Guides</li>
                        <li>Bedroom Guides</li>
                        <li>Living Room Guides</li>
                        <li>Kids Room Guides</li>
                        <li>Study Room Guides</li>
                    </ul>
                    <div className='w-full border border-gray-900 m-2'></div>
                </div>
                <div>
                <h1 className='text-2xl mt-8'>Are You Designing Your Study Room?</h1>
                <h1 className='text-lg mt-4'>Below are the few guides which will help you to design you study room in most elegant way</h1>
                </div>
        </div>
    </>
  )
}

export default HomeInteriors
