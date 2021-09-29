import React from "react";
import './tasks.css'
export default function Tasks({ tasks }) {
    console.log(tasks)
    return (
        <div >
            {tasks.map((item) => (
                <div className="task-container">
                    <a>{item.title}</a>
                </div>
            ))}
        </div>
    )
}