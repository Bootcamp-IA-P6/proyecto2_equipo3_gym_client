import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Importaciones
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import AdminSidebar from '../pages/AdminSidebar/AdminSidebar';
import UserPage from '../pages/UserPage/UserPage'; // Tu nueva página de usuarios

const AppRouter = () => {
  return (
    <Routes>
      {/* --- RUTAS PÚBLICAS --- */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* --- RUTAS PRIVADAS (Dashboard) --- */}
      <Route 
        path="/AdminSidebar" 
        element={
          <PrivateRoute>
            <AdminSidebar />
          </PrivateRoute>
        } 
      >
        {/* Al entrar a /admin, redirigimos automáticamente a usuarios */}
        <Route index element={<Navigate to="usuarios" replace />} />
        
        {/* Aquí es donde se conectan tus carpetas de Pages */}
        <Route path="usuarios" element={<UserPage />} />
        
        {/* Cuando crees las otras, solo las añades aquí:
        <Route path="clases" element={<ClassPage />} />
        <Route path="entrenadores" element={<TrainerPage />} /> 
        */}
      </Route>

      {/* Redirección por defecto */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;