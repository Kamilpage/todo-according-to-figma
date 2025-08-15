import React from "react";
import { useState } from "react";
import detective from './assets/Detective.png'
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
        {
            tasks.length
                ?
                <ol>
                    {tasks.map((task, index) => (
                        <li className="task-item" key={index}>
                            {editingIndex === index ? (
                                <> <div className="tasks-content container">
                                    <input
                                        type="text"
                                        value={draft}
                                        onChange={(e) => setDraft(e.target.value)}
                                        autoFocus
                                    />

                                    <button onClick={cancelEdit}>Cancel</button>
                                    <button onClick={saveEdit}>Save</button>
                                    <hr />
                                </div></>
                            ) : (
                                <>
                                    <div className="tasks-content ">
                                        <input type="checkbox"
                                            checked={!!checkedTasks[index]}
                                            onChange={() => toggleCheck(index)}
                                        />
                                        <span style={{ textDecoration: checkedTasks[index] ? 'line-through' : 'none', color: checkedTasks[index] ? 'gray' : "black" }}>{task}</span>
                                        <div className="task-action">
                                            <button onClick={() => handleDelete(index)}>🗑️</button>
                                            <button onClick={() => startEdit(index, task)}>✏️</button>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            )}

                        </li>
                    ))}
                </ol>
                : <div className="empty-box">
                    <img src={detective} alt="Detective" />
                    <p>Empty</p></div>
        }

    </>)
}