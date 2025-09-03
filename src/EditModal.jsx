import React, { useRef, useEffect } from 'react';
import Modal from './Modal';

export default function EditModal({isEditOpen, cancelEdit, saveEdit, handleDraft, draft}) {
    const inputRef = useRef(null);
    useEffect(() => {
        if (isEditOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditOpen]);
    return (
        <>
            <Modal isOpen={isEditOpen} onClose={cancelEdit}>
                <div className='edit-content' style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', gap:'128px'}}>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
                <h1 className='modal-heading text-center'>
                    Save changes?
                </h1>
                <input
                    className={'modal-input'}
                    ref={inputRef}
                    rows="3"
                    type="text"
                    value={draft}
                    onChange={handleDraft}
                    autoFocus
                />
            </div>
            <div className='edit-btn' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <button className="btn-white btn" onClick={cancelEdit}>No</button>
                <button className="btn-purple btn" onClick={saveEdit}>Yes</button>
            </div>
                </div>
        </Modal>


        </>


    )


}