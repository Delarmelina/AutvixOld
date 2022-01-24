import React from "react";

import * as FaIcon from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import '../Popup.css'

import { DeleteUser } from '../../../services/userMethods'

function DeleteUserPopUp(props) {

    return (
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
                                DeleteUser(props.user._id)
                                props.setupdate(!props.update)
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
    )
}

export default DeleteUserPopUp;