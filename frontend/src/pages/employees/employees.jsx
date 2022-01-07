import React from "react";

import { getUserList } from '../../services/userMethods'

import Content from '../../components/content'

import * as FaIcon from "react-icons/fa";

function Employees() {

    const [tableElement, settableElement] = React.useState([]);

    React.useEffect(() => {
        getUserList().then(res => {
            settableElement(res.map(user => {

                console.log(user.email && '')

                return (
                    <tr key={user._id}>
                        <td>{user.id}</td>
                        <td>{user.name[0].toUpperCase() + user.name.slice(1).toLowerCase()}</td>
                        <td>{user.email}</td>
                        <td>{user.department}</td>
                        <td><FaIcon.FaPen color="yellow" style={{ cursor: 'pointer' }}/></td>
                        <td><FaIcon.FaTrash color="red" style={{ cursor: 'pointer' }}/></td>
                    </tr>
                )
            }))
        })
    }, [])

    return (
        <Content title='Colaboradores' >
            <div className="row mb-3 mt-1">
                <div className="col-12">
                    <button type='button' className="btn btn-block btn-sucess float-sm-right" style={{ width: '200px ', backgroundColor: 'lime' }}>
                        <FaIcon.FaPlus className="mr-3 mb-1" />
                        <span>Novo Colaborador</span>
                    </button>
                </div>
            </div>
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
                        <div className="card-body table-responsive p-0" style={{ height: '500px' }}>
                            <table className="table table-head-fixed text-nowrap">
                                <thead style={{ textAlign: 'center' }}>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>E-mail</th>
                                        <th>Departamento</th>
                                        <th><FaIcon.FaPen /></th>
                                        <th><FaIcon.FaUpload /></th>
                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: 'center' }}>
                                    {
                                        tableElement
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default Employees;