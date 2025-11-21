// src/components/Header.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import MyLogo from '../assets/SantoPresenteLogo.svg'; 

function Header({ onMenuToggle, isMenuOpen }) { 
    
    const { t } = useTranslation();

    return (
        <header className="main-header">
            <div className="logo-container">
                <a href="/">
                    <img 
                        src={MyLogo} 
                        alt="Santo Presentesc Logo" 
                        className="site-logo"
                    />
                </a>
            </div>
            
            <div className="header-right">
                
                {/* ❌ REMOVIDOS AQUI: Os botões de Login/Cadastro foram movidos para a LandingPage */}
                
                <button 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                    onClick={onMenuToggle}
                    aria-label={isMenuOpen ? t('menu_close') : t('menu')}
                >
                    <div className={`burger-icon ${isMenuOpen ? 'active' : ''}`}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </button>
            </div>
        </header>
    );
}

export default Header;