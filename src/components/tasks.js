import React from "react";
import './tasks.css'
import {CgClose, CgInfo} from 'react-icons/cg'
export default function Tasks({ tasks, onClick, onRemove }) {

    return (
        <div >
            {tasks.map((item) => (
                <div className="task-container" style={item.completed ? { borderLeft: "6px solid #8e4dff" } : {}}>
                   <div className="task-title" onClick={() => onClick(item.id)}>
                       {item.title}
                   </div>
                   <div className="buttons-container">
                       <button className="remove-task-button" onClick={() => onRemove(item.id)}><CgInfo/></button>
                       <button className="remove-task-button" onClick={() => onRemove(item.id)}><CgClose/></button>
                   </div>
                </div>
            ))}
        </div>
    )
}