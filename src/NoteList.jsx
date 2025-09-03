import React from "react";
import {useState} from "react";
import detective from './assets/Detective.png'
import './Main.css'
import bin from './assets/bin.svg'
import pen from './assets/pen.svg'
import Modal from "./Modal.jsx";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import EditModal from "./EditModal.jsx";

export default function NoteList({tasks, setTasks}) {
    const [editingIndex, setEditingIndex] = useState(null);
    const [draft, setDraft] = useState("");
    const [checkedTasks, setCheckedTasks] = useState([]);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const startEdit = (index, currentText) => {
        setEditingIndex(index);
        setDraft(currentText);
        setIsEditOpen(true)
    };

    const handleDraft = (e) => {
        setDraft(e.target.value)
    }

    const cancelEdit = () => {
        setEditingIndex(null);
        setDraft("");
        setIsEditOpen(false);
    };
    const saveEdit = () => {
        const value = draft.trim();
        if (!value) return;
        setTasks((prev) => prev.map((t, i) => (i === editingIndex ? value : t)));
        setEditingIndex(null);
        setDraft("");
        setIsEditOpen(false);
    };

    const handleDelete = (index) => {
        setDeleteIndex(index)
        setIsOpen(true)
    };
    const onClose = () => {
        setIsOpen(false);
        setDeleteIndex(null);

    }

    const deleteTask = (index) => {
        setTasks((prev) => prev.filter((_, i) => i !== index));
        onClose()
    }

    const toggleCheck = (index) => {
        setCheckedTasks((prev) => {
            const newChecked = [...prev];
            newChecked[index] = !newChecked[index];
            return newChecked;
        });
    };

    return (<>
        <div className="task-container mt-30">
            {
                tasks.length ?
                    tasks.map((task, index) => (
                        <div className="task-item" key={index}>
                            {editingIndex === index ? (
                                <div className="tasks-content-edit">

                                    {tasks.length > index + 1 ? <hr/> : ''}
                                </div>
                            ) : (
                                <>
                                    <div className="tasks-content ">
                                        <div className="task-left">
                                            <input type="checkbox"
                                                   checked={!!checkedTasks[index]}
                                                   onChange={() => toggleCheck(index)}
                                            />
                                            <p onClick={() => {
                                                toggleCheck(index)
                                            }} className="taskEl" style={{
                                                lineHeight: '100%',
                                                textDecoration: checkedTasks[index] ? 'line-through' : 'none',
                                                color: checkedTasks[index] ? 'gray' : "black"
                                            }}>{task}</p>
                                        </div>
                                        <div className="task-right">
                                            <button onClick={() => handleDelete(index)}>
                                                <img src={bin} alt=""/>
                                            </button>
                                            <button onClick={() => startEdit(index, task)}>
                                                <img src={pen} alt=""/>
                                            </button>
                                        </div>
                                    </div>
                                    {tasks.length > index + 1 ? <hr/> : ''}
                                </>
                            )}
                        </div>
                    ))
                    : <div className="empty-box">
                        <img src={detective} alt="Detective"/>
                        <p>Empty</p></div>
            }
        </div>
        <ConfirmDeleteModal
            isOpen={isOpen}
            deleteIndex={deleteIndex}
            onClose={onClose}
            onDelete={deleteTask}
        />

        <EditModal
            isEditOpen={isEditOpen}
        cancelEdit={cancelEdit}
startEdit={startEdit}
saveEdit={saveEdit}
        handleDraft={handleDraft}
        draft={draft}
        />
    </>)
}