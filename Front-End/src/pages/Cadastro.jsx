import React, { useState } from 'react';
import '../App.css'; // Importa o CSS principal com os estilos do pop-up

function Cadastro() {
    // 1. Estados para os dados do formulário
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: ''
    });

    // 2. Estados para o feedback ao usuário
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [successUserName, setSuccessUserName] = useState(''); 
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); 
    
    // URL do Back-End 
    const API_URL = "http://localhost:8080/api/auth/register"; 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
        setShowPopup(false);
        setIsLoading(true); // Inicia o carregamento

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
                // SUCESSO!
                const nomeCadastrado = data.nome || formData.nome; 
                
                setSuccessUserName(nomeCadastrado); // Armazena o nome
                setPopupMessage('Seu cadastro foi concluído com sucesso! Seja bem-vindo(a)!'); // Mensagem mais genérica
                setShowPopup(true);
                
                // Limpa o formulário
                setFormData({ nome: '', email: '', senha: '' });
                
            } else if (response.status === 409) {
                // CONFLITO (E-mail já existe)
                setError(data.error || 'Este e-mail já está cadastrado em nosso sistema.');
            } else {
                // Outros erros da API
                setError(data.error || 'Ocorreu um erro desconhecido durante o cadastro. Tente novamente.');
            }
        } catch (err) {
            // ERRO DE CONEXÃO
            setError('Não foi possível conectar ao servidor. Verifique sua conexão ou se o Back-End está online.');
        } finally {
             setIsLoading(false); // Finaliza o carregamento
        }
    };

    return (
        <div className="auth-container">
            {/* Título Atualizado para "Crie sua conta" */}
            <h1>📝 Crie sua conta</h1> 
            
            {/* Mensagem de erro */}
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
                <input 
                    type="text" 
                    name="nome" 
                    placeholder="Nome Completo" 
                    value={formData.nome} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="E-mail" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="senha" 
                    placeholder="Senha" 
                    value={formData.senha} 
                    onChange={handleChange} 
                    required 
                />
                
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                </button>
            </form>
            
            {/* POP-UP / MODAL DE SUCESSO (ESTILIZADO) */}
            {showPopup && (
                <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                    <div className="popup-content success" onClick={e => e.stopPropagation()}>
                        <span className="close-btn" onClick={() => setShowPopup(false)}>&times;</span>
                        
                        <div className="popup-header">
                            <h2>✅ Cadastro Concluído!</h2>
                        </div>
                        
                        <div className="popup-body">
                            {/* Personalização com o nome e mensagem genérica */}
                            <p>Olá, **{successUserName}**! Agradecemos por se juntar a nós.</p>
                            <p>{popupMessage}</p>
                            <p className="call-to-action">Você já pode fazer login e explorar os produtos.</p>
                        </div>
                        
                        <div className="popup-footer">
                            {/* Botão com texto genérico, mas que remete à ação de continuar */}
                            <button onClick={() => setShowPopup(false)}>Continuar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cadastro;