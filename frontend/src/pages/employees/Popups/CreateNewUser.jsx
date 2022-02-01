import React, { useState, useEffect } from "react";

import * as FaIcon from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import DualListBox from '../../../components/duallistbox'
import '../Popup.css'

import { CreateUser } from '../../../services/userMethods'
import { GetList } from '../../../services/listMethods'

function CreateNewUserPopUp(props) {

    const [User, setUser] = useState(
        {
            id: '',
            name: '',
            surname: '',
            adress: '',
            email: '',
            born: '',
            telephone: '',
            department: '',
            office: '',
            password: '',
            confirmpassword: '',
            tags: []
        }
    )

    const [options, setOptions] = useState([])
    const [selected, setSelected] = useState([]);

    const opt = []
    async function GetTags(){
        let Tags = await GetList("Tags")
        
        Tags.map(tag => {
            opt.push({value: (opt.length+1).toString(), label: tag})
        })
        await setOptions(opt)
    }

    useEffect(() => {
        GetTags()
    }, [])

    useEffect(() => {
        if (User.born.length == 2 || User.born.length == 5){
            setUser({...User, born: `${User.born}/`})
        }
    }, [User.born])

    return (
        <Popup
            trigger={
                <button type='button' className="btn btn-block btn-success float-sm-right" style={{ width: '200px ' }}>
                    <FaIcon.FaPlus className="mr-3 mb-1" />
                    <span>Novo Colaborador</span>
                </button>}
            modal
        >
            {close => (
                <div className="fullPop" style={{ background: '#454D55' }}>
                    <div className="header">Create New User</div>
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
                                            (e) => { setUser({ ...User, adress: e.target.value}) }
                                        } /></div>

                                        <div className="m-0 mt-3"><label className="m-0">Departamento</label></div>
                                        <div><input type="text" className="form-control" value={User.department} onChange={
                                            (e) => { setUser({ ...User, department: e.target.value }) }
                                        } /></div>

                                        <div className="m-0 mt-3"><label className="m-0">Cargo</label></div>
                                        <div><input type="text" className="form-control" value={User.office} onChange={
                                            (e) => { setUser({ ...User, office: e.target.value }) }
                                        } /></div>

                                        <div className="m-0 mt-3"><label className="m-0">Password</label></div>
                                        <div>
                                            <input type="password" className="form-control" value={User.password}
                                                placeholder="Password"
                                                onChange={(e) => { setUser({ ...User, password: e.target.value }) }
                                                } />
                                            <input type="password" className="form-control" value={User.confirmpassword}
                                                placeholder="Confirm Password"
                                                onChange={(e) => { setUser({ ...User, confirmpassword: e.target.value }) }
                                                } />
                                        </div>

                                        <div className="mt-3" style={{}}>
                                            <div><label>Permissões</label></div>
                                            <DualListBox tags={selected} options={options} setSelected={setSelected} />
                                        </div>

                                        <input type="submit" onSubmit={null} disabled hidden />
                                    </form>
                                </div>
                                <div className="footer p-3" style={{ background: '#454D55' }}>
                                    <button className="btn button btn-success mr-5"
                                        onClick={() => {
                                            CreateUser(User, selected)
                                            close()
                                        }}
                                    >Create</button>
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
            )}
        </Popup>
    )
}

export default CreateNewUserPopUp;