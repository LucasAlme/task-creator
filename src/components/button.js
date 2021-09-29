import React from "react";
import './button.css'
export default function Button({children, onClick}) {
    return(
        <button className="add-button" onClick={onClick}>
            {children}
        </button>
    )
}