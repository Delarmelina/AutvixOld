import React from "react";

import * as FaIcon from "react-icons/fa";
import 'reactjs-popup/dist/index.css';

import { getUserList, VerifyTag } from '../../services/userMethods'
import './Popup.css'
import UpdateUser from './Popups/UpdateUser'
import DeleteUser from './Popups/DeleteUser'
import CreateNewUser from './Popups/CreateNewUser'

import Content from '../../components/content'
import EmpTable from './emptable'

function Employees() {

    const [tableElement, settableElement] = React.useState([]);
    const [tagVerify, settagVerify] = React.useState(false);
    const [update, setupdate] = React.useState(false);

    React.useEffect(() => {
        getUserList().then(res => {
            settableElement(res.map(user => {

                return (
                    <tr key={user._id}>
                        <td>{user.id}</td>
                        <td>{user.name[0].toUpperCase() + user.name.slice(1).toLowerCase()}</td>
                        <td>{user.email}</td>
                        <td>{user.department}</td>

                        <UpdateUser user={user} />

                        <DeleteUser user={user} update={update} setupdate={setupdate}/>
                    </tr >
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
                <Content title='Colaboradores'>
                    <div className="row mb-3 mt-1">
                        <div className="col-12">

                            <button type="button" className="btn btn-block btn-success float-sm-right ml-3 mt-2" style={{ width: '50px' }} onClick={() => {
                                setupdate(!update)
                            }}>
                                <FaIcon.FaSync />
                            </button>

                            <CreateNewUser />

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