import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Importamos SOLO lo que ya tienes creado
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
//mport UsersList from '../pages/users/UsersList';
import AdminSidebar from '../pages/AdminSidebar/AdminSidebar';

const AppRouter = () => {
  return (
    <Routes>
      {/* --- RUTAS PÚBLICAS --- */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* --- RUTAS PRIVADAS --- */}
      {/* Como no tienes Dashboard, protegemos la lista de usuarios */}
      <Route 
        path="/AdminSidebar" 
        element={
          <PrivateRoute>
            <AdminSidebar/>
          </PrivateRoute>
        } 
      />

      {/* Redirección por defecto: Si se pierden, van al Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;