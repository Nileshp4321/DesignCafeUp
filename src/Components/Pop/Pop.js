import React from 'react'

const Pop = ({ isOpen, onClose }) => {

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
                    <div className="modal-content py-4  px-6  ">
                        <div className="modal-header">
                            <h3 className="text-2xl font-semibold">Modal Title</h3>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pop