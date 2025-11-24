import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
// A "AnimatePresence" foi removida, pois não é necessária sem o pop-up
import '../App.css'; 
// Importe o 'useNavigate' se estiver usando o React Router para redirecionamento:
// import { useNavigate } from 'react-router-dom'; 

function Cadastro() {
    // Se estivesse usando o React Router: const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: ''
    });

    // Mantive os estados do pop-up, mas eles não são usados no JSX
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [successUserName, setSuccessUserName] = useState(''); 
    
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState('');
    
    // URL da API
    const API_URL = "http://localhost:8080/api/auth/register"; 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError('');
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        // Coloque aqui o redirecionamento para o login, se necessário:
        // navigate('/login'); 
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
                // Cadastro bem-sucedido
                const nomeCadastrado = data.nome || formData.nome; 
                setSuccessUserName(nomeCadastrado);
                setPopupMessage('Seu cadastro foi concluído com sucesso! Redirecionando para o login...');
                
                // Limpa o formulário
                setFormData({ nome: '', email: '', senha: '' });
                
                // 🚀 Ação após o sucesso: Redirecionar
                // Idealmente, você chamaria: navigate('/login');
                
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
    
    // O useEffect relacionado ao modal-open pode ser removido, pois o modal foi removido
    useEffect(() => {
        // Se a classe modal-open estiver no seu CSS, remova o código abaixo
        // para evitar manipulação desnecessária do body.
        /*
        if (showPopup) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        };
        */
    }, [showPopup]);


    return (
        // O container principal, que será 100% da tela
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
                                    <span className="btn-arrow"></span>
                                </>
                            )}
                        </motion.button>

                        <div className="auth-divider">
                            <span>ou</span>
                        </div>

                        <p className="auth-switch-link-enhanced">
                            Já tem conta? 
                            <a href="/login">Faça Login</a>
                        </p>
                    </form>
                </motion.div>
            </div>
            
        </div> 
    );
}

export default Cadastro;