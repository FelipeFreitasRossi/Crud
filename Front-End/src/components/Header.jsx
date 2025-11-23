// src/components/Header.jsx - SUPER MELHORADO
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/SantoPresenteLogo.svg'; 

function Header({ userName }) {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Função para pegar a primeira letra do nome
    const getInitial = (name) => {
        return name ? name.charAt(0).toUpperCase() : '?';
    };

    // Função para pegar o primeiro nome
    const getFirstName = (name) => {
        return name ? name.split(' ')[0] : 'Visitante';
    };

    // Verificar se o link está ativo
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <header className="main-header">
                
                {/* LOGO */}
                <Link to="/" className="logo-container">
                    <img 
                        src={logoImage} 
                        alt="Santo Presentesc" 
                        className="site-logo" 
                    />
                </Link>

                <div className="header-right">
                    
                    <nav className="desktop-nav-links">

                        <Link 
                            to="/destaques" 
                            className={`btn-nav ${isActive('/destaques') ? 'active' : ''}`}
                        >
                            <span className="nav-icon">⭐</span>
                            Destaques
                        </Link>
                        <Link 
                            to="/shop" 
                            className={`btn-nav ${isActive('/shop') ? 'active' : ''}`}
                        >
                            <span className="nav-icon">🛍️</span>
                            Produtos
                        </Link>
                        <Link 
                            to="/sobre" 
                            className={`btn-nav ${isActive('/sobre') ? 'active' : ''}`}
                        >
                            <span className="nav-icon">ℹ️</span>
                            Sobre Nós
                        </Link>
                    </nav>
                    
                    <button 
                        className="menu-toggle"
                        onClick={toggleMenu} 
                        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    >
                        <div className={`burger-icon ${isMenuOpen ? 'active' : ''}`}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </button>
                </div>
            </header>
            
            {/* SIDEBAR MOBILE */}
            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
            
            <nav className={`side-navbar ${isMenuOpen ? 'open' : ''}`}>
                
                {/* HEADER DO USUÁRIO */}
                {userName && (
                    <div className="sidebar-user-header">
                        <div className="sidebar-user-avatar">
                            {getInitial(userName)}
                        </div>
                        <div className="sidebar-user-name">
                            {getFirstName(userName)}
                        </div>
                        <div className="sidebar-user-greeting">
                            Bem-vindo de volta! ✨
                        </div>
                    </div>
                )}
                
                <ul className="nav-links-list">

                    <li>
                        <Link 
                            to="/destaques" 
                            onClick={toggleMenu}
                            className={isActive('/destaques') ? 'active' : ''}
                        >
                            <span className="nav-link-icon">⭐</span>
                            Destaques
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/shop" 
                            onClick={toggleMenu}
                            className={isActive('/shop') ? 'active' : ''}
                        >
                            <span className="nav-link-icon">🛍️</span>
                            Produtos
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/sobre" 
                            onClick={toggleMenu}
                            className={isActive('/sobre') ? 'active' : ''}
                        >
                            <span className="nav-link-icon">ℹ️</span>
                            Sobre Nós
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;