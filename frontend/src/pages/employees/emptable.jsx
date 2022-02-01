import React from "react"

import * as FaIcon from "react-icons/fa"


export default function emmtable(props) {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <div className="card-tools">
                            <div className="input-group input-group-sm" style={{ width: '350px' }}>
                                {/* <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                <div className="input-group-append" disabled>
                                    <button type="submit" disabled className="btn btn-default"><FaIcon.FaSearch size={15} /></button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="card-body table-responsive p-0" style={{ height: '600px' }}>
                        <table className="table table-head-fixed text-nowrap">
                            {props.children}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}