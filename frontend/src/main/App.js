import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MyContext from '../context/userContext';

import LoginPage from '../pages/auth/loginPage';
import MainPage from './mainPage';

export default function App() {

  const [user, setUser] = useState({ email: 'email', password: 'pass', name: 'nome', id: 'id' });
  const [isLogged, setIsLogged] = useState(false);

  return (
    <MyContext.Provider value={{ user, setUser }}>
      <Routes>

        <Route path="*" element={isLogged ? <MainPage /> : <Navigate to="login" />} />

        <Route path="login" element={<LoginPage />} />

      </Routes>
    </MyContext.Provider>
  );
}