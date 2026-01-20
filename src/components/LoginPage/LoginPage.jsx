// import React from 'react';
// import './LoginPage.css';

// const LoginPage = () => {
//   return (
//     <div className="login-screen">
//       <div className="login-box">
//         <h2 className="login-title">GYM ACCESS</h2>
//         <p className="login-subtitle">Introduce tus credenciales</p>
        
//         <form className="login-form" onSubmit={(e) => e.preventDefault()}>
//           <div className="input-field">
//             <input type="text" placeholder="USUARIO" required />
//           </div>
//           <div className="input-field">
//             <input type="password" placeholder="CONTRASEÑA" required />
//           </div>
//           <button type="submit" className="login-btn">ENTRAR</button>
//         </form>
        
//         <a href="#!" className="forgot-password">¿Olvidaste tu contraseña?</a>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService'; // Importamos la conexión con el backend
import './LoginPage.css';

const LoginPage = () => {
  // 1. Estados para guardar los datos y errores
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // 2. Hook para navegar
  const navigate = useNavigate();

  // 3. Función que maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpiamos errores previos

    try {
      // Llamamos al backend
      await authService.login(email, password);
      
      // Si todo va bien, vamos a la lista de usuarios
      navigate('/users'); 
      
    } catch (err) {
      console.error(err);
      // Mensaje de error si falla
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-screen">
      <div className="login-box">
        <h2 className="login-title">GYM ACCESS</h2>
        <p className="login-subtitle">Introduce tus credenciales</p>
        
        {/* Mostramos el error si existe */}
        {error && (
          <div style={{ color: '#ff6b6b', marginBottom: '15px', fontSize: '0.9rem', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input 
              type="email" // Cambiado a email para validación básica
              placeholder="USUARIO (EMAIL)" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input 
              type="password" 
              placeholder="CONTRASEÑA" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-btn">ENTRAR</button>
        </form>
        
        <a href="#!" className="forgot-password">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  );
};

export default LoginPage;