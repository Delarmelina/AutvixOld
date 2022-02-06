import React from "react";

export default function CardHeader(props) {

    return (
        <div className='card-body'>
            <div className='tab-content'>
                {props.children}
            </div >
        </div >
    )
}