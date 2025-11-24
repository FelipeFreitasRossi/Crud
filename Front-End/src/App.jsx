import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Cadastro';
import SobreNos from './pages/SobreNos';
import Destaques from './pages/Destaque';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function AppContent() {
    const location = useLocation();
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    // Rotas onde o Header NÃO deve aparecer (Landing, Login, Cadastro)
    const noHeaderPaths = ['/', '/login', '/register']; 
    
    // Rotas onde o Footer NÃO deve aparecer
    const noFooterPaths = ['/login', '/register'];
    
    // Rotas onde o ChatBot NÃO deve aparecer
    const noChatBotPaths = ['/', '/login', '/register'];
    
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

    // Componente de Proteção de Rota
    const ProtectedRoute = ({ children }) => {
        if (!loggedIn) {
            return <Navigate to="/login" replace />;
        }
        return children;
    };

    return (
        <div className="app-container">
            
            {/* HEADER - Renderização Condicional */}
            {shouldShowHeader && (
                <Header userName={userName} />
            )}
            
            {/* CONTEÚDO PRINCIPAL */}
            <main>
                <Routes>
                    {/* Landing Page - SEM LOGIN */}
                    <Route path="/" element={<LandingPage />} />
                    
                    {/* Login Page */}
                    <Route 
                        path="/login" 
                        element={<LoginPage onLoginSuccess={handleLogin} />} 
                    />
                    
                    {/* Register Page */}
                    <Route path="/register" element={<RegisterPage />} />
                    
                    <Route 
                        path="/destaques" 
                        element={
                            <ProtectedRoute>
                                <Destaques />
                            </ProtectedRoute>
                        } 
                    />
                    
                    <Route 
                        path="/shop" 
                        element={
                            <ProtectedRoute>
                                <ShopPage />
                            </ProtectedRoute>
                        } 
                    />
                    
                    <Route 
                        path="/sobre" 
                        element={
                            <ProtectedRoute>
                                <SobreNos />
                            </ProtectedRoute>
                        } 
                    />
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