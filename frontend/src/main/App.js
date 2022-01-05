import React, { useContext, useState } from 'react';

import AppRoutes from './AppRoutes';
import UserContext from '../context/userContext';

export default function App() {

  const [user, setUser] = useState({
    email: localStorage.getItem('email'),
    name: localStorage.getItem('name'),
    id: localStorage.getItem('id'),
    isLogged: localStorage.getItem('isLogged') == 'true'? true : false
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRoutes isLogged = {user.isLogged} />
    </UserContext.Provider>
  );
}