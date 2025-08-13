import "./Main.css";
import React, { useState } from "react";

function AddNote() {
    const [tasks, setTasks] = useState(["ebat gandon", "chort suk"]);
    const [input, setInput] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [draft, setDraft] = useState("");

    const handleSubmit = () => {
        const value = input.trim();
        if (value !== "") {
            setTasks((t) => [...t, value]);
            setInput("");
        }
    };

    const handleInput = (event) => setInput(event.target.value);

    const handleDelete = (index) => {
        setTasks((prev) => prev.filter((_, i) => i !== index));
    };

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

    return (
        <>
            <div className="container">
                <h1>New note</h1>
                <div style={{ position: 'relative' }}><input
                    className="add-input"
                    value={input}
                    onChange={handleInput}
                    type="text"
                    placeholder="Input your note..."
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                />
                    <button className="add-btn" onClick={handleSubmit}>add</button>
                </div>
                <div>
                    <button onClick={() => setInput("")}>Cancel</button>
                    <button >Apply</button>
                </div>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li className="task-item" key={index}>
                        {editingIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={draft}
                                    onChange={(e) => setDraft(e.target.value)}
                                    autoFocus
                                />
                                <div className="save-cancel">
                                    <button onClick={cancelEdit}>Cancel</button>
                                    <button onClick={saveEdit}>Save</button>
                                </div></>
                        ) : (
                            <>
                                <div className="tasks-content">
                                    <input type="checkbox" />
                                    <span>{task}</span>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                    <button onClick={() => startEdit(index, task)}>Edit</button>
                                    <hr />
                                </div></>
                        )}
                    </li>
                ))}
            </ol>
        </>
    );
}

export default AddNote;
