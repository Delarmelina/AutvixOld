import React, { useContext } from "react";

import UserContext from "../../context/userContext";

export	default props => {

    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h1>Relatórios</h1>

            <h5>{user.name}</h5>
            <h5>{user.email}</h5>
            <h5>{user.id}</h5>
            <h5>{user.isLogged? "Logged": "Not Logged"}</h5>

            <input type='button' onClick={() => {
                setUser({...user, name: 'Nome alterado'});
            }}></input>
        </div>
    );
}