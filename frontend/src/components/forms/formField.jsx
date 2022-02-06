import React from "react"

export default props => {

    return (
        <div className="ml-2 mr-2 pl-3 p-2" style={{ fontSize: '1.3em', fontWeight: "bold" }}>
            <h4 className='ml-2'>{props.title}</h4>
            <div>
                <input type={props.type} 
                    value={props.value}
                    onChange={props.setValue}
                    disabled={props.disabled}
                    className="pl-3 p-0 pt-1 pb-1" 
                    style={{ height: 'auto', width:'100%', textAlign:"left", borderRadius:'5px', 
                    backgroundColor:`${props.disabled?'#aaa':""}`, fontWeight:"bold" }} />
            </div>
        </div>
    )

}