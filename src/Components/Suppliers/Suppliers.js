import React from 'react'

const Suppliers = () => {
    return (
        <>
            <div className='interiors  container mx-auto mt-32'>
                <div className='suppliers w-11/12 flex flex-wrap grid grid-flow-row-dense grid-cols-3 grid-rows-1'>
                    <div className=' flex flex-wrap justify-center items-center text-gray-100 bg-gray-800 w-96 h-40'>
                        <p className='text-center p-3'>We use carefully screened, reputable suppliers for materials and fittings. They must meet our quality standards to be included in a DC home.</p>
                    </div>
                    <div className='supply flex justify-around items-center grid grid-cols-3 flex-wrap gap-4 container mx-auto justify-content-center col-span-2'>
                        <div className='mr-11'>
                            <img src='https://media.designcafe.com/wp-content/uploads/2019/12/17055041/hettich-india-kitchen-hinges-cutlery-tray-hardware-tandem-box-150x150.png' />
                        </div>
                        <div className='mr-11'>
                            <img src='https://media.designcafe.com/wp-content/uploads/2019/12/17055041/merino-laminates-industries-large-kitchen-catalogue-india-150x150.png' />
                        </div>
                        <div className='mr-11'>
                            <img src='https://media.designcafe.com/wp-content/uploads/2019/12/17055041/rehau-polymers-edge-banding-upvc-rolling-shutter-windows-150x150.png' />
                        </div>
                        <div className='mr-11'>
                            <img src='https://media.designcafe.com/wp-content/uploads/2019/12/17055041/kessebohmer-clever-kitchen-storage-solutions-india-150x150.png' />
                        </div>
                        <div className='mr-11'>
                            <img src='https://media.designcafe.com/wp-content/uploads/2019/12/17055041/kessebohmer-clever-kitchen-storage-solutions-india-150x150.png' />
                        </div>
                        <div className='mr-11'>
                            <img src='https://media.designcafe.com/wp-content/uploads/2019/12/17055041/faber-kitchen-chimney-hob-gas-stove-cooktop-supplier-150x150.png' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suppliers
