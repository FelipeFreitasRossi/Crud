// src/components/Footer.jsx

import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Importa o hook

function Footer() {
  
  // Inicializa o hook de tradução
  const { t } = useTranslation();

  const instagramHandle = "santo_presentesc";
  const whatsappNumber = "5511999999999"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer-area">
      <div className="footer-content">
        
        {/* Coluna 1: Logo e Direitos Autorais */}
        <div className="footer-column footer-brand">
          <h3>SANTO PRESENTESC</h3>
          <p className="copyright">
            {/* TRADUÇÃO AQUI */}
            &copy; {currentYear} Santo Presentesc. {t('copyright')}
          </p>
        </div>

        {/* Coluna 3: Contato e Redes Sociais */}
        <div className="footer-column footer-social">
          {/* TRADUÇÃO AQUI */}
          <h4>{t('social_contact')}</h4>
          <div className="social-icons">
            <a 
              href={`https://instagram.com/${instagramHandle}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
            >
              <FaInstagram className="social-icon instagram" />
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="social-icon whatsapp" />
            </a>
          </div>
          <p className="social-handle">@{instagramHandle}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;