import React, { useState } from 'react';
import '../App.css'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = window.innerWidth <= 1024; 
  const sidebarClass = `side-navbar ${isMobile ? 'mobile' : 'desktop'} ${isMobile && isOpen ? 'open' : ''}`;

  return (
    <>
      {isMobile && isOpen && <div className="sidebar-overlay visible" onClick={() => setIsOpen(false)} />}
      
      <nav className={sidebarClass}>
        {isMobile && <button className="close-sidebar-btn" onClick={() => setIsOpen(false)}>&times;</button>}
        
        <div className="sidebar-header">
          <i className="fas fa-bolt"></i> Meu App
        </div>
        
        <ul className="sidebar-links">
          <li><a href="#" className="active"><i className="fas fa-home"></i> Início</a></li>
          <li><a href="#"><i className="fas fa-cube"></i> Produtos</a></li>
          <li><a href="#"><i className="fas fa-chart-line"></i> Analytics</a></li>
        </ul>
        
        <div className="sidebar-footer">
          <button className="btn-logout">
            <i className="fas fa-sign-out-alt"></i> Sair
          </button>
        </div>
      </nav>
      
      {/* Exemplo de botão para abrir (apenas em mobile) */}
      {isMobile && !isOpen && (
        <button 
          style={{ position: 'fixed', right: '20px', top: '20px', zIndex: 50 }} 
          onClick={() => setIsOpen(true)}
        >
          Menu
        </button>
      )}
    </>
  );
};

export default Sidebar;