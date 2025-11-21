import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; 
import i18n from '../i18n';

function SideNavbar({ isMenuOpen, onMenuClose }) {
    
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            {isMenuOpen && (
                <motion.div 
                    className="menu-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onMenuClose}
                />
            )}

            <motion.div 
                className="side-navbar"
                initial={{ x: '100%' }}
                animate={{ x: isMenuOpen ? '0%' : '100%' }}
                transition={{ type: 'tween', duration: 0.4 }}
            >
                <nav>
                    <ul className="nav-links-list">
                        <li><a href="#highlight-section" onClick={onMenuClose}>{t('nav_highlights')}</a></li>
                        <li><a href="#about-section" onClick={onMenuClose}>{t('nav_about')}</a></li>
                        <li><a href="#categories-section" onClick={onMenuClose}>{t('nav_categories')}</a></li>
                        <li><a href="#">{t('nav_help')}</a></li>
                        <li><a href="#">{t('nav_contact')}</a></li>
                    </ul>
                </nav>
                
                <div className="language-switcher">
                    <p>{t('lang_switch')}:</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button 
                            className="lang-btn" 
                            onClick={() => changeLanguage('pt')} 
                            style={{ backgroundColor: i18n.language === 'pt' ? '#FFD700' : 'transparent', color: i18n.language === 'pt' ? 'black' : 'white' }}
                        >
                            <FaGlobe className="lang-icon" /> PT
                        </button>
                        <button 
                            className="lang-btn" 
                            onClick={() => changeLanguage('en')}
                            style={{ backgroundColor: i18n.language === 'en' ? '#FFD700' : 'transparent', color: i18n.language === 'en' ? 'black' : 'white' }}
                        >
                            <FaGlobe className="lang-icon" /> EN
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default SideNavbar;