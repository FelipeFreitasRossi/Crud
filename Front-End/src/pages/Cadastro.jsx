import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import '../App.css';

function Cadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: ''
    });

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [successUserName, setSuccessUserName] = useState(''); 
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState('');
    
    const API_URL = "http://localhost:8080/api/auth/register"; 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Limpa erro ao digitar
        if (error) setError('');
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        // Opcional: navigate('/login');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
        setShowPopup(false);
        setIsLoading(true); 

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && response.status === 201) {
                const nomeCadastrado = data.nome || formData.nome; 
                
                setSuccessUserName(nomeCadastrado);
                setPopupMessage('Seu cadastro foi concluído com sucesso! Você já pode fazer login.');
                setShowPopup(true);
                
                setFormData({ nome: '', email: '', senha: '' });
                
            } else if (response.status === 409) {
                setError(data.error || 'Este e-mail já está cadastrado em nosso sistema.');
            } else {
                setError(data.error || 'Ocorreu um erro desconhecido durante o cadastro. Tente novamente.');
            }
        } catch (err) {
            setError('Não foi possível conectar ao servidor. Verifique sua conexão ou se o Back-End está online.');
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
                    <h2 className="visual-title">Junte-se a nós</h2>
                    <p className="visual-subtitle">
                        "Vinde a mim, todos os que estais cansados e oprimidos, 
                        e eu vos aliviarei."
                    </p>
                    <p className="visual-verse">— Mateus 11:28</p>
                    <div className="visual-info">
                        <a href="/login" className="visual-link">Já sou membro →</a>
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
                        <h1>Criar conta</h1>
                        <p className="auth-subtitle">Inicie sua jornada de fé conosco</p>
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
                        
                        {/* Campo Nome */}
                        <div className={`input-group-enhanced ${focusedField === 'nome' ? 'focused' : ''}`}>
                            <label htmlFor="nome">
                                <span className="label-icon">👤</span>
                                Nome Completo
                            </label>
                            <input 
                                type="text" 
                                id="nome"
                                name="nome" 
                                placeholder="Seu nome completo" 
                                value={formData.nome} 
                                onChange={handleChange}
                                onFocus={() => setFocusedField('nome')}
                                onBlur={() => setFocusedField('')}
                                required 
                            />
                            <div className="input-border-effect"></div>
                        </div>

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
                                placeholder="Mínimo 6 caracteres" 
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
                                    Cadastrando...
                                </>
                            ) : (
                                <>
                                    <span>Cadastrar</span>
                                    <span className="btn-arrow">→</span>
                                </>
                            )}
                        </motion.button>

                        {/* Link para login */}
                        <div className="auth-divider">
                            <span>ou</span>
                        </div>

                        <p className="auth-switch-link-enhanced">
                            Já tem conta? 
                            <a href="/login">Faça Login</a>
                        </p>
                    </form>

                    {/* POP-UP DE SUCESSO MELHORADO */}
                    <AnimatePresence>
                        {showPopup && (
                            <>
                                <motion.div 
                                    className="popup-overlay-enhanced"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={handleClosePopup}
                                />
                                <motion.div 
                                    className="popup-content-enhanced"
                                    initial={{ opacity: 0, scale: 0.8, y: -50 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: -50 }}
                                    transition={{ type: "spring", duration: 0.5 }}
                                >
                                    <div className="popup-success-icon">✓</div>
                                    
                                    <h2>Cadastro Concluído!</h2>
                                    
                                    <div className="popup-body-enhanced">
                                        <p className="popup-greeting">Olá, <strong>{successUserName}</strong>!</p>
                                        <p>{popupMessage}</p>
                                    </div>
                                    
                                    <motion.button 
                                        onClick={handleClosePopup}
                                        className="btn-popup-enhanced"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Ir para o Login
                                    </motion.button>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}

export default Cadastro;