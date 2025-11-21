import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SideNavbar from './components/SideNavbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login'; 
import Cadastro from './pages/Cadastro';
import ShopPage from './pages/ShopPage'; 
import Footer from './components/Footer';
import './App.css'; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
 
        <Header onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />

        <Routes>
          
          <Route 
            path="/" 
            element={
              <main>
                <LandingPage />
              </main>
            } 
          />
          
          <Route 
            path="/Login" 
            element={
              <main>
                <Login />
              </main>
            } 
          />

          <Route 
            path="/register" 
            element={
              <main>
                <Cadastro /> 
              </main>
            } 
          />
          
          {/* 🎯 2. NOVA ROTA PARA A PÁGINA DA LOJA 🎯 */}
          <Route 
            path="/shop" 
            element={
              <main>
                <ShopPage /> 
              </main>
            } 
          />

          <Route path="/forgot-password" element={
            <main>
              <div style={{ padding: '200px', textAlign: 'center', color: 'white' }}>Página de Recuperação em Breve!</div>
            </main>
          }/>

        </Routes>
        
        <Footer /> 
        <SideNavbar isMenuOpen={isMenuOpen} onMenuClose={toggleMenu} />
      </div>
    </Router>
  );
}

export default App;