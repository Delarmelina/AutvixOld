import React, { useState } from "react";

import * as FaIcon from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import '../Popup.css'
import DualListBox from '../../../components/duallistbox'

import { UpdateUser } from '../../../services/userMethods'

function UpdateUserPopUp(props) {

    const [User, setUser] = useState(props.user)
    const [selected, setSelected] = useState(User.tags);

    const options = [
        { value: '1', label: 'ADM' },
        { value: '2', label: 'FINANCEIRO' },
        { value: '3', label: 'RH' },
        { value: '4', label: 'Automação' },
        { value: '5', label: 'Engenharia II' },
    ]

    return (
        <Popup
            trigger={<td style={{ cursor: 'pointer' }}><FaIcon.FaPen color="yellow" /></td>}
            modal
        >
            {close => (
                <div className="fullPop" style={{ background: '#454D55' }}>
                    <div className="header">{User.name[0].toUpperCase() + User.name.slice(1).toLowerCase()}</div>
                    <div className="content contentUpdate">
                        <form>
                            <div className="card-body row">
                                <div className="col-md-6">
                                    <div><label>Name</label></div>
                                    <div><input type="text" className="form-control" value={User.name} onChange={
                                        (e) => { setUser({ ...User, name: e.target.value }) }
                                    } /></div>

                                    <div><label>Email</label></div>
                                    <div><input type="text" className="form-control" value={User.email} onChange={
                                        (e) => { setUser({ ...User, email: e.target.value }) }
                                    } /></div>

                                    <div><label>Departamento</label></div>
                                    <div><input type="text" className="form-control" value={User.department} onChange={
                                        (e) => { setUser({ ...User, department: e.target.value }) }
                                    } /></div>
                                </div>
                                <div className="col-md-6">
                                    <div><label>Sobrenome</label></div>
                                    <div><input type="text" className="form-control" value={User.surname} onChange={
                                        (e) => { setUser({ ...User, surname: e.target.value }) }
                                    } /></div>

                                    <div><label>Telefone</label></div>
                                    <div><input type="text" className="form-control" value={User.telephone} onChange={
                                        (e) => { setUser({ ...User, telephone: e.target.value }) }
                                    } /></div>

                                    <div><label>Cargo</label></div>
                                    <div><input type="text" className="form-control" value={User.office} onChange={
                                        (e) => { setUser({ ...User, office: e.target.value }) }
                                    } /></div>
                                </div>

                                <div><label>Endereço</label></div>
                                <div><input type="text" className="form-control" value={User.adress} onChange={
                                    (e) => { setUser({ ...User, adress: e.target.value }) }
                                } /></div>

                                <div className="" style={{ width: '95%' }}>
                                    <div><label>Permissões</label></div>
                                    <DualListBox tags={selected} options={options} setSelected={setSelected} />
                                </div>
                            </div>

                        <input type="submit" hidden />
                        </form>
                    </div>
                    <div className="footer">
                        <button className="btn button btn-warning mr-5"
                            onClick={() => {
                                UpdateUser(User, selected)
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
            )
            }
        </Popup >
    )
}

export default UpdateUserPopUp;