import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Importamos SOLO lo que ya tienes creado
import HomePage from '../components/HomePage/HomePage';
import LoginPage from '../components/LoginPage/LoginPage';
import UsersList from '../pages/users/UsersList';

const AppRouter = () => {
  return (
    <Routes>
      {/* --- RUTAS PÚBLICAS --- */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* --- RUTAS PRIVADAS --- */}
      {/* Como no tienes Dashboard, protegemos la lista de usuarios */}
      <Route 
        path="/users" 
        element={
          <PrivateRoute>
            <UsersList />
          </PrivateRoute>
        } 
      />

      {/* Redirección por defecto: Si se pierden, van al Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;