// src/pages/Cadastro.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLock, FaEnvelope, FaAddressBook, FaUserPlus } from 'react-icons/fa';

function Cadastro() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cadastro viria aqui
    console.log('Tentativa de Cadastro');
  };

  return (
    <div className="login-page-container"> {/* Reutiliza o CSS do container de Login */}
      <div className="login-box register-box"> {/* Adiciona uma classe extra para possíveis ajustes */}
        
        <h2>{t('register_title')}</h2>
        <p className="subtitle">{t('register_welcome')}</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          
          {/* Campo de Nome Completo */}
          <div className="input-group">
            <FaAddressBook className="input-icon" />
            <input
              type="text"
              placeholder={t('name_placeholder')}
              required
            />
          </div>

          {/* Campo de Email */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
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

          {/* Campo de Confirmação de Senha */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder={t('confirm_password_placeholder')}
              required
            />
          </div>
          
          {/* Botão de Cadastro */}
          <button type="submit" className="btn-login btn-primary">
            <FaUserPlus className="button-icon" /> {t('register_btn')}
          </button>
        </form>
        
        <div className="login-footer">
          <p>
            {t('already_have_account')}
            <a href="/login" className="register-link">{t('login')}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;