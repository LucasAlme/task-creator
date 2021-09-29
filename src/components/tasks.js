import React from "react";
import './tasks.css'
export default function Tasks({ tasks, onClick }) {

    return (
        <div >
            {tasks.map((item) => (
                <div className="task-container" style={item.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
                   <div className="task-title" onClick={() => onClick(item.id)}>
                       {item.title}
                   </div>
                </div>
            ))}
        </div>
    )
}