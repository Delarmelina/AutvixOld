import React from "react";

import * as FaIcon from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { getUserList, VerifyTag, DeleteUser } from '../../services/userMethods'
import './Popup.css'

import Content from '../../components/content'
import EmpTable from './emptable'

function Employees() {

    const [tableElement, settableElement] = React.useState([]);
    const [tagVerify, settagVerify] = React.useState(false);
    const [update, setupdate] = React.useState(false);

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

                        <Popup
                            trigger={<td style={{ cursor: 'pointer' }}><FaIcon.FaPen color="yellow" /></td>}
                            modal
                        >
                            {close => (
                                <div className="fullPop" style={{ background: '#454D55' }}>
                                    <div className="header">{user.name[0].toUpperCase() + user.name.slice(1).toLowerCase()}</div>
                                    <div className="content contentUpdate">
                                        <form>
                                            <div className="card-body row">
                                                <div className="col-md-6">
                                                    <div><label>Name</label></div>
                                                    <div><input type="text" className="form-control" value={user.name} /></div>

                                                    <div><label>Email</label></div>
                                                    <div><input type="text" className="form-control" value={user.email} /></div>

                                                    <div><label>Department</label></div>
                                                    <div><input type="text" className="form-control" value={user.department} /></div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div><label>Sobrenome</label></div>
                                                    <div><input type="text" className="form-control" value={user.name} /></div>

                                                    <div><label>Telefone</label></div>
                                                    <div><input type="text" className="form-control" value={user.telephone} /></div>

                                                    <div><label>Cargo</label></div>
                                                    <div><input type="text" className="form-control" value={user.office} /></div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <div className="bootstrap-duallistbox-container row moveonselect moveondoubleclick">
                                                            <div className="col-md-6">
                                                                {/* dasbnfasbfaisbhfas */}
                                                                {/* dasbnfasbfaisbhfas */}
                                                                {/* dasbnfasbfaisbhfas */}
                                                                {/* dasbnfasbfaisbhfas */}
                                                            </div>
                                                            <div className="col-md-6">
                                                                {/* dasbnfasbfaisbhfas */}
                                                                {/* dasbnfasbfaisbhfas */}
                                                                {/* dasbnfasbfaisbhfas */}
                                                                {/* dasbnfasbfaisbhfas */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="footer">
                                        <button className="btn button btn-warning mr-5"
                                            onClick={() => {
                                                setupdate(!update)
                                                close();
                                            }}
                                        >Update</button>
                                        <button className="btn button btn-dark ml-5"
                                            onClick={() => {
                                                close();
                                            }}
                                        >Cancelar</button>
                                    </div>
                                </div>
                            )}
                        </Popup>

                        <Popup
                            trigger={<td style={{ cursor: 'pointer' }}><FaIcon.FaTrash color="red" /></td>}
                            modal
                        >
                            {close => (
                                <div className="fullPop" style={{ background: '#F54848' }}>
                                    <div className="header">Delete User</div>
                                    <div className="content">
                                        <p>Are you sure you want to delete this user?</p>
                                    </div>
                                    <div className="footer">
                                        <button className="btn button btn-danger mr-5"
                                            onClick={() => {
                                                DeleteUser(user._id)
                                                setupdate(!update)
                                                close();
                                            }}
                                        >Delete</button>
                                        <button className="btn button btn-dark ml-5"
                                            onClick={() => {
                                                close();
                                            }}
                                        >Cancelar</button>
                                    </div>
                                </div>
                            )}
                        </Popup>

                    </tr>
                )
            }))
        })
    }, [update])

    React.useEffect(() => {
        VerifyTag('RH').then(res => {
            if (!res) {
                window.location.href = '/'
                settagVerify(false)
            } else {
                settagVerify(true)
            }
        })
    }, [update])

    return (
        <>
            {tagVerify ?
                <Content title='Colaboradores' >
                    <div className="row mb-3 mt-1">
                        <div className="col-12">

                            <button type="button" className="btn btn-block btn-success float-sm-right ml-3 mt-2" style={{ width: '50px' }} onClick={() => {
                                setupdate(!update)
                            }}>
                                <FaIcon.FaSync />
                            </button>

                            <button type='button' className="btn btn-block btn-success float-sm-right" style={{ width: '200px ' }}>
                                <FaIcon.FaPlus className="mr-3 mb-1" />
                                <span>Novo Colaborador</span>
                            </button>

                        </div>
                    </div>

                    <EmpTable>
                        <thead style={{ textAlign: 'center' }}>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Departamento</th>
                                <th><FaIcon.FaPen /></th>
                                <th><FaIcon.FaTrash /></th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                            {
                                tableElement
                            }
                        </tbody>
                    </EmpTable>
                </Content> : null}
        </>
    );
}

export default Employees;