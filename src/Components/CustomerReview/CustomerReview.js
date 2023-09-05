import React from 'react'

const CustomerReview = () => {
    return (
        <>
            <div className='container mx-auto mt-16'>
                <div><h1 className='text-2xl'>What Our Happy Customers Say</h1></div>
                <div className='customerReview container flex flex-wrap mt-8'>
                    <div className="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="https://img.youtube.com/vi/dTN3a9ES2f0/mqdefault.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <p className="mb-3 p-3 text-center font-normal text-gray-700 dark:text-gray-400"><span className='text-3xl'><img width={20} height={20} src='https://cdn-icons-png.flaticon.com/128/7350/7350737.png' /></span>We hired DC for our home interiors. The sales team led
                                by Kajol Mishra, Designer Nikita and project manager
                                Prabhu was very responsive. They took our requests to
                                a desirable conclusion. It has been a value for money
                                outcome, with good finishes as promised.</p>
                            <a href="#">
                                <h5 className=" text-md text-center font-bold tracking-tight text-gray-900 dark:text-white">Manish Chandgothia</h5>
                                <h5 className=" text-sm text-center  tracking-tight text-gray-900 dark:text-white">3 BHK, Bren Imperia, Bengaluru</h5>
                            </a>
                        </div>
                    </div>
                    <div className="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="https://img.youtube.com/vi/61lGrxiSnck/mqdefault.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <p className="mb-3 p-3 text-center font-normal text-gray-700 dark:text-gray-400"><span className='text-3xl'><img width={20} height={20} src='https://cdn-icons-png.flaticon.com/128/7350/7350737.png' /></span>We wanted a home that was minimal and simple yet
                                one where three generations could live together
                                comfortably. DesignCafe's team did a wonderful job
                                understanding all our requirements and gave us a
                                home that is appreciated by everyone who visits us!</p>
                            <a href="#">
                                <h5 className=" text-md text-center font-bold tracking-tight text-gray-900 dark:text-white">Rashmi Seta</h5>
                                <h5 className=" text-sm text-center  tracking-tight text-gray-900 dark:text-white">2 BHK, Anirudha, Mumbai</h5>
                            </a>
                        </div>
                    </div>
                    <div className="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="https://img.youtube.com/vi/hZPkZ4IzfVg/mqdefault.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <p className="mb-3 p-3 text-center font-normal text-gray-700 dark:text-gray-400"><span className='text-3xl'><img width={20} height={20} src='https://cdn-icons-png.flaticon.com/128/7350/7350737.png' /></span>We had a great experience with DesignCafe! Their
                                team understood our preferences, creating the exact
                                look we wanted in our home. Their Anna Salai
                                Experience Center offers impressive modular designs,
                                20% extra space, and a 10-year warranty, ideal for our
                                compact home.</p>
                            <a href="#">
                                <h5 className=" text-md text-center font-bold tracking-tight text-gray-900 dark:text-white">Shanthanu Bhagyaraj & Keerthi</h5>
                                <h5 className=" text-sm text-center  tracking-tight text-gray-900 dark:text-white">3 BHK, Nungambakkam, Chennai</h5>
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-content-center text-center' ><a className='text-center' href='#'>View All Customer Reviews </a></div>


                </div>
            </div>
        </>
    )
}

export default CustomerReview
