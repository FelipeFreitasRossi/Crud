// src/pages/Login.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';

function Login() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação viria aqui
    console.log('Tentativa de Login');
  };

  return (
    <div className="login-page-container">
      <div className="login-box">
        
        <h2>{t('login_title')}</h2>
        <p className="subtitle">{t('login_welcome')}</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          
          {/* Campo de Email */}
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="email"
              placeholder={t('email_placeholder')}
              required
            />
          </div>
          
          {/* Campo de Senha */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder={t('password_placeholder')}
              required
            />
          </div>
          
          {/* Botão de Login */}
          <button type="submit" className="btn-login btn-primary">
            <FaSignInAlt className="button-icon" /> {t('login')}
          </button>
        </form>
        
        <div className="login-footer">
          <a href="/forgot-password" className="forgot-link">{t('forgot_password')}</a>
          <p>
            {t('no_account_yet')} 
            <a href="/register" className="register-link">{t('register')}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;