import React, { useState } from 'react'; // ✅ CORRETO
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/SantoPresenteLogo.svg'; 

function Header({ loggedIn, onLogout }) {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        onLogout();
        setIsMenuOpen(false); 
    };

    return (
        <header className="main-header">
            
            {/* 1. LOGO: Aponta para /shop */}
            <Link to="/shop" className="logo-container">
                <img 
                    src={logoImage} 
                    alt={t('shop_name')} 
                    className="site-logo" 
                />
            </Link>

            <div className="header-right">
                
                {/* 2. LINKS DE NAVEGAÇÃO PARA DESKTOP */}
                <nav className="desktop-nav-links">
                    <Link to="/" className="btn-nav">{t('nav_highlights')}</Link>
                    <Link to="/shop" className="btn-nav">{t('nav_shop')}</Link>
                    <Link to="/about" className="btn-nav">{t('nav_about')}</Link>
                </nav>

                {loggedIn && (
                    <div className="auth-buttons">
                        {/* Se o usuário estiver logado, o botão de Logout é mantido */}
                        <button onClick={handleLogout} className="btn-auth">{t('logout')}</button>
                    </div>
                )}
                
                {/* 4. Ícone do Hamburguer (Mobile) */}
                <button 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu} 
                    aria-label={t(isMenuOpen ? 'menu_close' : 'menu')}
                >
                    <div className="burger-icon">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </button>
            </div>
            
            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
            <nav className={`side-navbar ${isMenuOpen ? 'open' : ''}`}>
                <ul className="nav-links-list">
                    <li><Link to="/" onClick={toggleMenu}>{t('nav_highlights')}</Link></li>
                    <li><Link to="/shop" onClick={toggleMenu}>{t('nav_shop')}</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>{t('nav_about')}</Link></li>
                    <li><Link to="/categories" onClick={toggleMenu}>{t('nav_categories')}</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>{t('nav_contact')}</Link></li>
                </ul>
                <div className="language-switcher">
                </div>
            </nav>
        </header>
    );
}

export default Header;