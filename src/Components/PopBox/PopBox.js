import React from 'react'

const PopBox = ({ isOpen, onClose }) => {

    const modalClasses = isOpen
        ? 'fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto '
        : 'hidden';

    return (
        <>
            <div className={modalClasses}>
                <div className="modal-overlay  absolute inset-0 bg-black opacity-50 "></div>
                <div className=" modal-container bg-white w-3/4  rounded shadow-lg z-50 overflow-y-auto">
                    <button
                        className="modal-close float-right p-2 text-3xl "
                        onClick={onClose}
                    >
                        &#215;
                    </button>
                    <div className="modal-content py-4  px-6  bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 ">
                        {/* <div className="modal-header">
                            <h3 className="text-2xl font-semibold">Modal Title</h3>

                        </div> */}
                        {/* Modal body */}
                        <div className=" modal-body grid grid-cols-2  ">
                            <div className='img'><img src='https://www.designcafe.com/wp-content/uploads/2022/05/home-interior-offer-may-d.jpg'   /></div>
                            <div className='w-1/2'>
                                <h1>Tell us about your home</h1>
                                <ul className='p-3 flex'>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    1BHK</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    2BHK</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    3BHK</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    4BHK/Duplex</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Independent Home /Villa</button></li>
                                </ul>
                                <h1>Which city is this home in?</h1>
                                <ul className='flex flex-cols p-3'>
                                   <div className='col'>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Bengaluru</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Hyderabad</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Chennai</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Mumbai</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Navi Mumbai</button></li>
                                    </div>
                                    <div className='col'>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Thane</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Mysore</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Pune</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Coimbatore</button></li>
                                    </div>
                                    <div className='col'>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Vizag</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Kolkata</button></li>
                                    <li className='m-1 ' ><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    Ahemedabad</button></li>
                                    </div>
                                </ul>
                            </div>
                            <div>
                                

                            </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button
                                className="modal-close-button"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopBox