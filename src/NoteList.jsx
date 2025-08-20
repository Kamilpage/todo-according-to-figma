import React from "react";
import { useState } from "react";
import detective from './assets/Detective.png'
import './Main.css'
export default function NoteList({ tasks, setTasks }) {
    const [editingIndex, setEditingIndex] = useState(null);
    const [draft, setDraft] = useState("");
    const [checkedTasks, setCheckedTasks] = useState([]);

    const startEdit = (index, currentText) => {
        setEditingIndex(index);
        setDraft(currentText);
    };
    const cancelEdit = () => {
        setEditingIndex(null);
        setDraft("");
    };
    const saveEdit = () => {
        const value = draft.trim();
        if (!value) return;
        setTasks((prev) => prev.map((t, i) => (i === editingIndex ? value : t)));
        setEditingIndex(null);
        setDraft("");
    };
    const handleDelete = (index) => {
        setTasks((prev) => prev.filter((_, i) => i !== index));
    };

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
                                    <input
                                        type="text"
                                        value={draft}
                                        onChange={(e) => setDraft(e.target.value)}
                                        autoFocus
                                    />
                                    <button className="btn-white btn" onClick={cancelEdit}>Cancel</button>
                                    <button className="btn-purple btn" onClick={saveEdit}>Save</button>
                                    {tasks.length > index + 1 ? <hr /> : ''}
                                </div>
                            ) : (
                                <>
                                    <div className="tasks-content ">
                                        <div className="task-left">
                                            <input type="checkbox"
                                                checked={!!checkedTasks[index]}
                                                onChange={() => toggleCheck(index)}
                                            />
                                            <span onClick={() => { toggleCheck(index) }} className="taskEl" style={{ textDecoration: checkedTasks[index] ? 'line-through' : 'none', color: checkedTasks[index] ? 'gray' : "black" }}>{task}</span>
                                        </div>
                                        <div className="task-right">
                                            <button onClick={() => handleDelete(index)}>🗑️</button>
                                            <button onClick={() => startEdit(index, task)}>✏️</button>
                                        </div>
                                    </div>
                                    {tasks.length > index + 1 ? <hr /> : ''}
                                </>
                            )}
                        </div>
                    ))
                    : <div className="empty-box">
                        <img src={detective} alt="Detective" />
                        <p>Empty</p></div>
            }
        </div>
    </>)
}