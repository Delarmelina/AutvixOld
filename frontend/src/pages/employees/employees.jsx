import React from "react";

import Content from '../../components/content'

import * as FaIcon from "react-icons/fa";

function Employees() {

    return (
        <Content title='Colaboradores' >
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-tools">
                                <div className="input-group input-group-sm" style={{ width: '350px' }}>
                                    <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-default"><FaIcon.FaSearch size={15} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default Employees;