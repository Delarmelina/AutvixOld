import React from "react"

export default props => {

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body table-responsive p-0" style={{ height: `${props.tam ? props.tam : "600"}px` }}>
                        {props.children}
                    </div> 
                </div>
            </div>
        </div>
    )

}