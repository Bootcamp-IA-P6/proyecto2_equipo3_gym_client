import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-screen">
      <div className="login-box">
        <h2 className="login-title">GYM ACCESS</h2>
        <p className="login-subtitle">Introduce tus credenciales</p>
        
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-field">
            <input type="text" placeholder="USUARIO" required />
          </div>
          <div className="input-field">
            <input type="password" placeholder="CONTRASEÑA" required />
          </div>
          <button type="submit" className="login-btn">ENTRAR</button>
        </form>
        
        <a href="#!" className="forgot-password">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  );
};

export default LoginPage;