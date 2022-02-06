import React from "react";

export default function Aba(props) {

    return (
        <div id={`${props.teste}`} className={`tab-pane ${props.active ? "active" : null}`}>
            {props.children}    
        </div>
    )
}