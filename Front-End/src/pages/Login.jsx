import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 1. IMPORTAÇÃO NECESSÁRIA
import '../App.css'; 

function Login() {
    // 2. INICIALIZAÇÃO DO HOOK DE NAVEGAÇÃO
    const navigate = useNavigate(); 

    // 1. Estados para os dados do formulário
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    });

    // 2. Estados para o feedback ao usuário
    // O successMessage não será mais necessário, pois o usuário será redirecionado
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Adicionei para melhor UX
    
    // URL do Back-End
    const API_LOGIN_URL = 'http://localhost:8080/api/auth/login'; 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Limpa erros
        setIsLoading(true); // Inicia o carregamento

        try {
            const response = await fetch(API_LOGIN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // O seu código original estava faltando a leitura do JSON, mas vamos manter a lógica:
            const data = await response.json();

            if (response.ok && response.status === 200) {
                // SUCESSO NO LOGIN!
                console.log(`Login bem-sucedido! Olá, ${data.nome}.`);

                // 🎯 3. REDIRECIONAMENTO PARA A SHOP PAGE 🎯
                navigate('/shop'); // Usamos o caminho '/shop' que definimos anteriormente.

            } else if (response.status === 401) {
                // NÃO AUTORIZADO (E-mail ou senha inválidos)
                setError(data.error || 'E-mail ou senha inválidos.');
            } else {
                // Outros erros da API
                setError(data.error || 'Ocorreu um erro desconhecido durante o login.');
            }
        } catch (err) {
            // ERRO DE CONEXÃO
            setError('Não foi possível conectar ao servidor. Verifique a API.');
        } finally {
            setIsLoading(false); // Finaliza o carregamento
        }
    };

    return (
        <div className="auth-container">
            <h1>Acesso Restrito</h1>
            
            {/* Removemos o successMessage, pois o usuário será redirecionado */}
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
                <input 
                    type="email" 
                    name="email" 
                    placeholder="E-mail de Cadastro" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="senha" 
                    placeholder="Sua Senha" 
                    value={formData.senha} 
                    onChange={handleChange} 
                    required 
                />
                
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Entrando...' : 'Entrar'}
                </button>
            </form>
        </div>
    );
}

export default Login;