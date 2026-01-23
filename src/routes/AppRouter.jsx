import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Importaciones
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import AdminSidebar from '../pages/AdminSidebar/AdminSidebar';
import UserPage from '../pages/UserPage/UserPage'; 
import ClassPage from '../pages/ClassPage/ClassPage'; 
import TrainerPage from '../pages/Trainers/TrainerPage';

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
        {/* Redirigir al inicio del panel */}
        <Route index element={<Navigate to="usuarios" replace />} />
        
        {/* Ruta de Usuarios */}
        <Route path="usuarios" element={<UserPage />} /> 
        <Route path="clases" element={<ClassPage />} />
        <Route path="entrenadores" element={<TrainerPage />} />

      </Route>

      {/* Redirección por defecto */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;