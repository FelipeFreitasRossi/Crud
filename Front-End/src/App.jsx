import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Cadastro';
// import SobreNos from './pages/SobreNos';
import Destaques from './pages/Destaque';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function AppContent() {
    const location = useLocation();
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    // Rotas onde o Header NÃO deve aparecer
    const noHeaderPaths = ['/login', '/register']; 
    
    // Rotas onde o Footer NÃO deve aparecer
    const noFooterPaths = ['/login', '/register'];
    
    // Rotas onde o ChatBot NÃO deve aparecer
    const noChatBotPaths = ['/login', '/register'];
    
    // Verificações
    const shouldShowHeader = !noHeaderPaths.includes(location.pathname);
    const shouldShowFooter = !noFooterPaths.includes(location.pathname);
    const shouldShowChatBot = !noChatBotPaths.includes(location.pathname);

    // Carregar dados do usuário ao iniciar (localStorage)
    useEffect(() => {
        const storedUser = localStorage.getItem('userName');
        const storedLoginStatus = localStorage.getItem('loggedIn');
        
        if (storedUser && storedLoginStatus === 'true') {
            setUserName(storedUser);
            setLoggedIn(true);
        }
    }, []);

    // Função para fazer login
    const handleLogin = (nome) => {
        setUserName(nome);
        setLoggedIn(true);
        localStorage.setItem('userName', nome);
        localStorage.setItem('loggedIn', 'true');
    };

    // Função para fazer logout
    const handleLogout = () => {
        setUserName('');
        setLoggedIn(false);
        localStorage.removeItem('userName');
        localStorage.removeItem('loggedIn');
    };

    return (
        <div className="app-container">
            
            {/* HEADER - Renderização Condicional */}
            {shouldShowHeader && (
                <Header 
                    userName={userName}
                />
            )}
            
            {/* CONTEÚDO PRINCIPAL */}
            <main>
                <Routes>
                    {/* Landing Page */}
                    <Route path="/" element={<LandingPage />} />
                    
                    {/* Destaques */}
                    <Route path="/destaques" element={<Destaques />} />
                    
                    {/* Shop Page (Produtos) */}
                    <Route path="/shop" element={<ShopPage />} />
                    
                    {/* Sobre Nós */}
                    {/* <Route path="/sobre" element={<SobreNos />} /> */}
                    
                    {/* Login Page */}
                    <Route 
                        path="/login" 
                        element={<LoginPage onLoginSuccess={handleLogin} />} 
                    />
                    
                    {/* Register Page */}
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </main>

            {/* FOOTER - Renderização Condicional */}
            {shouldShowFooter && <Footer />}
            
            {/* CHATBOT - Renderização Condicional */}
            {shouldShowChatBot && <ChatBot />}
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