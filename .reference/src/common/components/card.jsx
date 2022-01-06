import React from "react";

import * as FaIcon from "react-icons/fa";

export default props => {
    
    const getIcon = () => {
        return (
            <>
            {props.icon}
            </>
        )
    }

    return (
        <a href={`./Reports/${props.link || props.title}`} className='col-lg-4 col-6 pointer-event'>
            <div className={`small-box bg-${props.color}`}>
                <div className='inner'>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                <div className='icon'>
                    {getIcon()}
                </div>
                <a href='#' className='small-box-footer'>
                    Mais Informações <FaIcon.FaArrowCircleRight />
                </a>
            </div>
        </a>
    )
}
