// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/SantoPresenteLogo.svg'; 

function Header({ loggedIn, onLogout, userName }) { // ← ADICIONADO userName
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        onLogout();
        setIsMenuOpen(false); 
    };

    // Função para pegar a primeira letra do nome
    const getInitial = (name) => {
        return name ? name.charAt(0).toUpperCase() : '?';
    };

    // Função para pegar o primeiro nome
    const getFirstName = (name) => {
        return name ? name.split(' ')[0] : 'Usuário';
    };

    return (
        <>
            <header className="main-header">
                
                {/* LOGO */}
                <Link to="/shop" className="logo-container">
                    <img 
                        src={logoImage} 
                        alt={t('shop_name')} 
                        className="site-logo" 
                    />
                </Link>

                <div className="header-right">
                    
                    {/* LINKS DE NAVEGAÇÃO PARA DESKTOP */}
                    <nav className="desktop-nav-links">
                        <Link to="/" className="btn-nav">{t('nav_highlights')}</Link>
                        <Link to="/shop" className="btn-nav">{t('nav_shop')}</Link>
                        <Link to="/about" className="btn-nav">{t('nav_about')}</Link>
                    </nav>

                    {/* BOTÃO DE LOGOUT (se logado) */}
                    {loggedIn && (
                        <div className="auth-buttons">
                            <button onClick={handleLogout} className="btn-auth">{t('logout')}</button>
                        </div>
                    )}
                    
                    {/* ÍCONE DO HAMBURGUER (Mobile) */}
                    <button 
                        className="menu-toggle"
                        onClick={toggleMenu} 
                        aria-label={t(isMenuOpen ? 'menu_close' : 'menu')}
                    >
                        <div className={`burger-icon ${isMenuOpen ? 'active' : ''}`}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </button>
                </div>
            </header>
            
            {/* SIDEBAR MOBILE (Fora do header) */}
            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
            
            <nav className={`side-navbar ${isMenuOpen ? 'open' : ''}`}>
                
                {/* HEADER DO USUÁRIO */}
                {loggedIn && userName && (
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
                    <li><Link to="/" onClick={toggleMenu}>{t('nav_highlights')}</Link></li>
                    <li><Link to="/shop" onClick={toggleMenu}>{t('nav_shop')}</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>{t('nav_about')}</Link></li>
                    <li><Link to="/categories" onClick={toggleMenu}>{t('nav_categories')}</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>{t('nav_contact')}</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;