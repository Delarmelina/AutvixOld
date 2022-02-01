import React from "react"

export default props => {

    return (
        <div className="ml-2 mr-2 pl-3 p-2" style={{ fontSize: '1.3em', fontWeight: "bold" }}>
            {props.title}
            <div>
                <input type={props.type} placeholder={props.title} 
                    className="p-0 pt-1 pb-1" 
                    style={{ height: 'auto', width:'100%' }} />
            </div>
        </div>
    )

}