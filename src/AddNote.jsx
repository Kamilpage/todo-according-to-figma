import "./Main.css";
import React, { useState, useRef, useEffect } from "react";
import Modal from "./Modal";

function AddNoteModal({ isOpen, setIsOpen, onSubmit, checkDublicate }) {
    const [input, setInput] = useState("");
    const [errors, setErrors] = useState([]);
    const inputRef = useRef(null);

    // Фокус при открытии модалки
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    function handleSubmit() {
        const errs = [];
        const value = input.trim();
        if (value === "") {
            errs.push("Field is required");
        }
        if (checkDublicate(value)) {
            errs.push("This task already exists");
        }
        setErrors([...errs]);
        if (!errs.length) {
            onSubmit(value);
            setInput("");
            return;
        }
    }

    function handleCancel() {
        setInput("");
        setIsOpen(false);
        setErrors([]);
    }

    const handleInput = (event) => setInput(event.target.value);

    return (
        <Modal isOpen={isOpen} onClose={handleCancel}>
            <h1 className="modal-heading text-center">New note</h1>

            <input
                ref={inputRef}
                className="modal-input mb-128"
                value={input}
                onChange={handleInput}
                type="text"
                placeholder="Input your note..."
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />

            <div style={{ position: "relative" }}>
                <ul>
                    {errors.map((er, idx) => (
                        <li key={idx} style={{ color: "red" }}>
                            {er}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="d-flex justify-between edit-btn">
                <button className="btn btn-white" onClick={handleCancel}>
                    Cancel
                </button>
                <button className="btn btn-purple" onClick={handleSubmit}>
                    Apply
                </button>
            </div>
        </Modal>
    );
}

export default AddNoteModal;
