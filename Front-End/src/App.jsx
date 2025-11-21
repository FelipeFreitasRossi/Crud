import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header'; // Seu componente Header
import LandingPage from './pages/LandingPage'; // Sua LandingPage (rota: '/')
import ShopPage from './pages/ShopPage';     // Sua ShopPage (rota: '/shop')
import LoginPage from './pages/Login'; // Importe conforme o seu path real
import RegisterPage from './pages/Cadastro'; // Importe conforme o seu path real
import Footer from './components/Footer';

// Componente Wrapper para lidar com a lógica de exibição do Header
function AppContent() {
    const location = useLocation();
    const [loggedIn, setLoggedIn] = useState(false); // Estado de login

    // ✅ ATUALIZADO: Define quais caminhos NÃO devem exibir o Header
    // Header será ocultado em: LandingPage (/), Login (/login) e Cadastro (/register)
    const noHeaderPaths = ['/', '/login', '/register']; 
    
    // Verifica se o caminho atual NÃO está na lista de exclusão
    const shouldShowHeader = !noHeaderPaths.includes(location.pathname);

    return (
        <div className="app-container">
            
            {/* 1. RENDERIZAÇÃO CONDICIONAL DO HEADER */}
            {shouldShowHeader && (
                <Header 
                    loggedIn={loggedIn} 
                    onLogout={() => setLoggedIn(false)} 
                />
            )}
            
            <main>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route 
                        path="/shop" 
                        element={<ShopPage />} 
                    />
                    <Route path="/login" element={<LoginPage onLogin={() => setLoggedIn(true)} />} />
                    <Route path="/register" element={<RegisterPage />} />
                    {/* Adicione outras rotas aqui */}
                </Routes>
            </main>

            {/* O Footer aparecerá em todas as páginas */}
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;