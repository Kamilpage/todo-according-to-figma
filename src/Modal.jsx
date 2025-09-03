import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    useEffect(() => {
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])

    const handleEscape = (e) => {
        if (e.key === "Escape") { onClose() };
    }
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body
    );
}