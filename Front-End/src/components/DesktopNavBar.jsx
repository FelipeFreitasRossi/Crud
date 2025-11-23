// ./components/DesktopNavBar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DesktopNavBar = () => {
    const location = useLocation();

    // Define os links de navegação para a barra
    const navLinks = [
        { name: 'Loja', path: '/shop' },
        { name: 'Produtos', path: '/shop' }, // Pode ter um link de 'Produtos' genérico
        { name: 'Sobre Nós', path: '/about' }, // Se você tiver uma rota /about
        { name: 'Contato', path: '/contact' }, // Se você tiver uma rota /contact
    ];

    return (
        // A classe 'desktop-nav-bar' será estilizada no seu arquivo CSS de 4205 linhas
        <nav className="desktop-nav-bar">
            <ul className="desktop-nav-links-list">
                {navLinks.map((link) => (
                    <li key={link.path}>
                        <Link 
                            to={link.path}
                            // Adiciona a classe 'active' se o caminho atual corresponder ao link
                            className={location.pathname === link.path ? 'active' : ''}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DesktopNavBar;