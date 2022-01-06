import React, { useContext, useState } from 'react';
import api from '../services/api';

import AppRoutes from './AppRoutes';
import UserContext from '../context/userContext';

import { VerifyLogin } from '../services/userMethods';

export default function App() {

  const [user, setUser] = useState({
    email: localStorage.getItem('email'),
    name: localStorage.getItem('name'),
    id: localStorage.getItem('id'),
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRoutes />
    </UserContext.Provider>
  );
}