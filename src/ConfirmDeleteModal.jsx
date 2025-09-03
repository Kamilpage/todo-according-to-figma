import Modal from "./Modal.jsx";
import React from 'react'
import './Main.css'
 function ConfirmDeleteModal({isOpen, onDelete, onClose, deleteIndex}) {

    return( <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className='d-flex justify-content-center align-items-center edit-btn' style={{flexDirection: 'column', gap: '128px'}}>
                    <div>
                    <h1 className='text-center'>Are you sure to delete?</h1>
                    </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <button className='btn-purple btn' onClick={()=>onDelete(deleteIndex)}>Yes</button>
                    <button className='btn-white btn' onClick={()=>onClose()}>No</button>
                    </div>
                    </div>
            </Modal>
        </>
 )
}
export default ConfirmDeleteModal;