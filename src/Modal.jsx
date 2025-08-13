import React from 'react';
import './Main.css'
export default function Modal() {
    return (
        <div >
            <h2>New Note</h2>
            <input type="text" placeholder="Input your note..." id="" />
            <div>
                <button>Cancel</button>
                <button>Apply</button>
            </div>
        </div>

    );
}
