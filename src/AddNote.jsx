import "./Main.css";
import React, { useState } from "react";
import Modal from "./Modal";
function AddNoteModal({ isOpen, setIsOpen, onSubmit, checkDublicate }) {
    const [input, setInput] = useState("");
    const [errors, setErrors] = useState([])
    function handleSubmit() {
        const errs = []
        const value = input.trim();
        console.log(value)
        if (value === '') {
            errs.push('Field is required')
        }
        if (checkDublicate(value)) {
            errs.push('This task already exists')
        }
        setErrors([...errs])
        if (!errs.length) {
            onSubmit(value);
            setInput('');
            return;
        }
    }
    function handleCancel() {
        setInput('');
        setIsOpen(false)
        setErrors([])
    }
    const handleInput = (event) => setInput(event.target.value);
    return (
        <>
            <Modal isOpen={isOpen} onClose={handleCancel}>
                <div className="container">
                    <h1 className="modal-heading">New note</h1>
                    <div style={{ position: 'relative' }}>
                        <input
                            className="modal-input"
                            value={input}
                            onChange={handleInput}
                            type="text"
                            placeholder="Input your note..."
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                        />
                        <div>
                            <ul>
                                {errors.map((er) => {
                                    return (
                                        <li style={{ color: 'red' }}>{er}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="modal-action">
                        <button onClick={handleCancel}>Cancel</button>
                        <button onClick={handleSubmit} >Apply</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default AddNoteModal;
