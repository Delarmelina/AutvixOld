import React, { useContext, useState } from 'react';

import AppRoutes from './AppRoutes';
import UserContext from '../context/userContext';

export default function App() {

  const [user, setUser] = useState({
    email: 'email',
    password: 'pass',
    name: 'name',
    id: 'id',
    isLogged: true
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRoutes isLogged = {user.isLogged} />
    </UserContext.Provider>
  );
}