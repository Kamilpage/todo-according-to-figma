import React from "react";
import { useState } from "react";
export default function NoteList({ tasks, setTasks }) {
    const [editingIndex, setEditingIndex] = useState(null);
    const [draft, setDraft] = useState("");
    const [isChecked, setIsChecked] = useState(false)
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

    return (<>
        <ol>
            {tasks.map((task, index) => (
                <li className="task-item" key={index}>
                    {editingIndex === index ? (
                        <> <div className="tasks-content">
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
                            <div className="tasks-content">
                                <input type="checkbox"
                                    value={isChecked}
                                    onChange={(e) => { setIsChecked(!isChecked) }}
                                />
                                <span style={{ textDecoration: isChecked ? 'line-through' : 'none', color: isChecked ? 'gray' : "black" }}>{task}</span>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                                <button onClick={() => startEdit(index, task)}>Edit</button>
                                <hr />
                            </div></>
                    )}
                </li>
            ))}
        </ol>

    </>)
}