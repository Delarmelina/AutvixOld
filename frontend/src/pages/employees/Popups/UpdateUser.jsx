import React, { useState, useEffect } from "react";

import * as FaIcon from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import '../Popup.css'
import DualListBox from '../../../components/duallistbox'

import { UpdateUser } from '../../../services/userMethods'
import { GetList } from '../../../services/listMethods'

function UpdateUserPopUp(props) {

    const [options, setOptions] = useState([])
    const [User, setUser] = useState(props.user)
    const [selected, setSelected] = useState(User.tags)

    useEffect(() => {
        const born = props.user.born.substr(0, 10).split('-')
        setUser({ ...User, born: `${born[2]}/${born[1]}/${born[0]}` })
    }, [])

    const opt = []
    useEffect(async () => {
        let Tags = await GetList("Tags")

        Tags.map(tag => {
            opt.push({ value: (opt.length + 1).toString(), label: tag })
        })
        await setOptions(opt)
    }, [])

    return (
        <Popup
            trigger={<td style={{ cursor: 'pointer' }}><FaIcon.FaPen color="yellow" /></td>}
            modal
        >
            {close => (
                <div className="fullPop" style={{ background: '#454D55' }}>
                    <div className="header">{User.name[0].toUpperCase() + User.name.slice(1).toLowerCase()}</div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body table-responsive" style={{ height: '400px', background: '#454D55' }}>
                                    <form>
                                        <div className="m-0"><label className="m-0">Matricula</label></div>
                                        <div><input type="text" className="form-control" value={User.id} onChange={
                                            (e) => { setUser({ ...User, id: e.target.value }) }
                                        } /></div>

                                        <div className="m-0 mt-3"><label className="m-0">Name</label></div>
                                        <div><input type="text" className="form-control" value={User.name} onChange={
                                            (e) => { setUser({ ...User, name: e.target.value }) }
                                        } /></div>

                                        <div className="m-0 mt-3"><label className="m-0">Sobrenome</label></div>
                                        <div><input type="text" className="form-control" value={User.surname} onChange={
                                            (e) => { setUser({ ...User, surname: e.target.value }) }
                                        } /></div>
                                        
                                        <div className="m-0 mt-3"><label className="m-0">Abreviatura</label></div>
                                        <div><input type="text" className="form-control" value={User.abrev} onChange={
                                            (e) => { setUser({ ...User, abrev: e.target.value }) }
                                        } /></div>

                                        <div className="m-0 mt-3"><label className="m-0">Nascimento</label></div>
                                        <div><input type="text" className="form-control date mt-1" value={User.born}
                                            placeholder="DD/MM/AAAA" maxLength={10}
                                            onChange={(e) => { setUser({ ...User, born: e.target.value }) }
                                            } /></div>

                                        <div className="m-0 mt-3"><label className="m-0">Email</label></div>
                                        <div><input type="text" className="form-control" value={User.email} onChange={
                                            (e) => { setUser({ ...User, email: e.target.value }) }
                                        } /></div>

                                        <div className="m-0 mt-3"><label className="m-0">Telefone</label></div>
                                        <div><input type="text" className="form-control" value={User.telephone} onChange={
                                            (e) => { setUser({ ...User, telephone: e.target.value }) }
                                        } /></div>

                                        <div className="m-0 mt-3"><label className="m-0">Endereço</label></div>
                                        <div><input type="text" className="form-control" value={User.adress} onChange={
                                            (e) => { setUser({ ...User, adress: e.target.value }) }
                                        } /></div>

                                        <div className="m-0 mt-3"><label className="m-0">Departamento</label></div>
                                        <div><input type="text" className="form-control" value={User.department} onChange={
                                            (e) => { setUser({ ...User, department: e.target.value }) }
                                        } /></div>

                                        <div className="m-0 mt-3"><label className="m-0">Cargo</label></div>
                                        <div><input type="text" className="form-control" value={User.office} onChange={
                                            (e) => { setUser({ ...User, office: e.target.value }) }
                                        } /></div>

                                        <div className="mt-3" style={{}}>
                                            <div><label>Permissões</label></div>
                                            <DualListBox tags={selected} options={options} setSelected={setSelected} />
                                        </div>

                                        <input type="submit" onSubmit={null} onClick={() => {
                                            UpdateUser(User, selected)
                                            props.setupdate(!props.update)
                                            close();
                                        }} hidden />
                                    </form>
                                </div>
                                <div className="footer p-3" style={{ background: '#454D55' }}>
                                    <button className="btn button btn-warning mr-5"
                                        onClick={() => {
                                            UpdateUser(User, selected)
                                            props.setupdate(!props.update)
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
                        </div>
                    </div>
                </div>
            )
            }
        </Popup >
    )
}

export default UpdateUserPopUp;