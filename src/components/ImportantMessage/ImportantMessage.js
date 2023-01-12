import React, { useState } from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons'

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'red',
        // border: '10px double white',
        boxShadow: '0px 0px 20px 2px red',
        width: '75%'
    },
};

const ImportantMessage = () => {
    const [modalIsOpen, setIsOpen] = useState(true);



    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Important Message"
        >
                <h1 className='text-3xl pb-3 sm:text-base pt-2 text-white text-center'>All items and services reflect a cash payment price. Should you wish to pay with credit card, the full price of the item or service is assessed at a 4.00% increase.</h1>
                <button onClick={closeModal} className='p-1 bg-white rounded-lg hover:text-red-600 hover:bg-red-200 m-auto flex font-semibold'>Close</button>
        </Modal>
    );
}

export default ImportantMessage