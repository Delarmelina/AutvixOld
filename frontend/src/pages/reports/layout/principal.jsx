import React from "react";

export default function ReportPrincipal(props) {

    return (
        <div className='row'>
            <div className='col-md-12'>
                <div className='card'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}