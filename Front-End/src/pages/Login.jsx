import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import '../App.css'; 

function Login({ onLoginSuccess }) { // ← RECEBE A FUNÇÃO DO APP.JS
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState('');
    
    const API_LOGIN_URL = 'http://localhost:8080/api/auth/login'; 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
        setIsLoading(true); 

        try {
            const response = await fetch(API_LOGIN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && response.status === 200) {
                // SUCESSO NO LOGIN!
                console.log(`Login bem-sucedido! Olá, ${data.nome || formData.email}.`);
                
                // ← CHAMA A FUNÇÃO PASSADA PELO APP.JS
                onLoginSuccess(data.nome || formData.email);
                
                // Redirecionamento para a Shop Page
                navigate('/shop'); 

            } else if (response.status === 401) {
                setError(data.error || 'E-mail ou senha inválidos.');
            } else {
                setError(data.error || 'Ocorreu um erro desconhecido durante o login.');
            }
        } catch (err) {
            setError('Não foi possível conectar ao servidor. Verifique a API.');
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <div className="auth-split-container">
            
            {/* COLUNA VISUAL ESQUERDA */}
            <div className="auth-visual-side">
                <motion.div 
                    className="visual-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="visual-icon">✝</div>
                    <h2 className="visual-title">Bem-vindo de volta</h2>
                    <p className="visual-subtitle">
                        "Eu sou a luz do mundo. Quem me segue não andará nas trevas, 
                        mas terá a luz da vida."
                    </p>
                    <p className="visual-verse">— João 8:12</p>
                    <div className="visual-info">
                        <a href="/" className="visual-link">← Voltar à Página Inicial</a>
                    </div>
                </motion.div>
            </div>

            {/* COLUNA DO FORMULÁRIO DIREITA */}
            <div className="auth-form-side">
                <motion.div 
                    className="auth-form-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="auth-form-header">
                        <h1>Entrar</h1>
                        <p className="auth-subtitle">Acesse sua conta e continue sua jornada</p>
                    </div>
                    
                    {/* Mensagem de erro com animação */}
                    {error && (
                        <motion.div 
                            className="error-message-enhanced"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="error-icon">⚠</span>
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="auth-form-enhanced">
                        
                        {/* Campo Email */}
                        <div className={`input-group-enhanced ${focusedField === 'email' ? 'focused' : ''}`}>
                            <label htmlFor="email">
                                <span className="label-icon">📧</span>
                                E-mail
                            </label>
                            <input 
                                type="email" 
                                id="email"
                                name="email" 
                                placeholder="seu@email.com" 
                                value={formData.email} 
                                onChange={handleChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField('')}
                                required 
                            />
                            <div className="input-border-effect"></div>
                        </div>

                        {/* Campo Senha */}
                        <div className={`input-group-enhanced ${focusedField === 'senha' ? 'focused' : ''}`}>
                            <label htmlFor="senha">
                                <span className="label-icon">🔒</span>
                                Senha
                            </label>
                            <input 
                                type="password" 
                                id="senha"
                                name="senha" 
                                placeholder="••••••••" 
                                value={formData.senha} 
                                onChange={handleChange}
                                onFocus={() => setFocusedField('senha')}
                                onBlur={() => setFocusedField('')}
                                required 
                            />
                            <div className="input-border-effect"></div>
                        </div>
                        
                        {/* Botão Submit */}
                        <motion.button 
                            type="submit" 
                            disabled={isLoading}
                            className="btn-login-enhanced"
                            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(255, 215, 0, 0.4)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isLoading ? (
                                <>
                                    <span className="spinner"></span>
                                    Entrando...
                                </>
                            ) : (
                                <>
                                    <span>Entrar</span>
                                    <span className="btn-arrow">→</span>
                                </>
                            )}
                        </motion.button>

                        {/* Link para cadastro */}
                        <div className="auth-divider">
                            <span>ou</span>
                        </div>

                        <p className="auth-switch-link-enhanced">
                            Ainda não tem conta? 
                            <a href="/register">Cadastre-se agora</a>
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

export default Login;