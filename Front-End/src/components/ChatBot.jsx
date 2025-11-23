import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            text: "Olá! 👋 Sou o assistente virtual da Santo Presentesc. Como posso te ajudar hoje?",
            sender: 'bot',
            time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // Scroll automático para última mensagem
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Base de conhecimento do bot
    const botKnowledge = {
        // Saudações
        saudações: {
            keywords: ['oi', 'olá', 'ola', 'hey', 'bom dia', 'boa tarde', 'boa noite'],
            response: "Olá! 😊 Seja bem-vindo à Santo Presentesc! Como posso te ajudar hoje?"
        },
        
        // Produtos
        produtos: {
            keywords: ['produto', 'produtos', 'tem', 'vende', 'vendas', 'coleção', 'coleções'],
            response: "Temos várias opções incríveis! 🛍️\n\n• Camisetas católicas\n• Oversized exclusivos\n• Babylooks delicadas\n• Blusas de frio\n\nQual te interessa mais?"
        },
        
        // Preços
        preços: {
            keywords: ['preço', 'precos', 'valor', 'quanto custa', 'custa', '$', 'r$'],
            response: "Nossos preços variam: 💰\n\n• Camisetas: R$ 59,90 - R$ 79,90\n• Oversized: R$ 99,90 - R$ 139,90\n• Babylooks: R$ 59,90 - R$ 79,90\n• Blusas de Frio: R$ 169,90 - R$ 199,90\n\nVisite nossa loja para ver todos os produtos!"
        },
        
        // Entrega
        entrega: {
            keywords: ['entrega', 'entregar', 'frete', 'envio', 'correios', 'prazo'],
            response: "📦 Informações de entrega:\n\n• Entregamos para todo o Brasil\n• Prazo: 1-7 dias úteis\n• Rastreamento disponível\nEntre em contato via WhatsApp para mais detalhes!"
        },
        
        // Pagamento
        pagamento: {
            keywords: ['pagamento', 'pagar', 'forma', 'cartão', 'pix', 'boleto', 'parcelado'],
            response: "💳 Formas de pagamento:\n\n• PIX (5% desconto)\n• Cartão de crédito\n• Parcelamento disponível\n\nFinalize seu pedido via WhatsApp para escolher a melhor opção!"
        },
        
        // Tamanhos
        tamanhos: {
            keywords: ['tamanho', 'tamanhos', 'tam', 'size', 'numeração', 'medida'],
            response: "📏 Trabalhamos com os tamanhos:\n\n• Camisetas: P, M, G, GG\n• Oversized: Tamanho único (veste P ao GG)\n• Babylooks: PP, P, M, G\n• Blusas: P, M, G, GG, XGG\n\nPrecisa de ajuda com medidas?"
        },
        
        // WhatsApp/Contato
        contato: {
            keywords: ['whatsapp', 'whats', 'contato', 'falar', 'atendimento', 'telefone', 'número', 'instagram', 'insta'],
            response: "📱 Entre em contato conosco:\n\n• WhatsApp: (11) 99616-7381\n• Instagram: @santo_presentesc\n\nEstamos prontos para te atender!"
        },
        
        // Equipe/Quem Somos
        equipe: {
            keywords: ['equipe', 'quem', 'gerente', 'dono', 'responsável', 'felipe', 'patricia', 'desenvolveu', 'fez'],
            response: "👥 Nossa Equipe:\n\n• Patricia Helena de Freitas Rossi - Gerente & Co-fundadora\n• Felipe de Freitas Rossi - Desenvolvedor & Co-fundador (17 anos)\n\nFelipe desenvolve sites para diversas empresas e criou este sistema completo!\n\nJuntos, cuidamos de cada detalhe da Santo Presentesc com amor e dedicação."
        },
        
        // Chatbot/Sistema
        chatbot: {
            keywords: ['chatbot', 'bot', 'sistema', 'site', 'quem fez', 'desenvolvedor', 'programador'],
            response: "🤖 Sobre o ChatBot:\n\nEste assistente virtual foi desenvolvido por Felipe de Freitas Rossi, com apenas 17 anos!\n\nFelipe é desenvolvedor web e cria sites para diversas empresas. Todo o sistema da Santo Presentesc foi projetado e desenvolvido por ele, incluindo este chatbot que está te atendendo agora! 💻✨"
        },
        
        // Dúvidas sobre site
        site: {
            keywords: ['site', 'navegar', 'como usar', 'funciona', 'menu', 'loja'],
            response: "🖥️ Como usar o site:\n\n• Use o menu para navegar\n• Clique nos produtos para ver detalhes\n• Use os filtros para encontrar o que procura\n• Finalize pedidos via WhatsApp\n\nPrecisa de ajuda com algo específico?"
        },
        
        // Sobre a loja
        sobre: {
            keywords: ['sobre', 'quem', 'historia', 'história', 'empresa', 'marca'],
            response: "✝️ Santo Presentesc:\n\nSomos uma loja católica especializada em roupas que expressam fé e estilo. Cada peça é cuidadosamente desenvolvida para você demonstrar sua devoção com elegância.\n\nNossa missão é espalhar a mensagem de Cristo através da moda!"
        },
        
        // Troca/Devolução
        troca: {
            keywords: ['troca', 'trocar', 'devolução', 'devolver', 'defeito', 'problema'],
            response: "🔄 Política de trocas:\n\n• 7 dias para solicitar troca\n• Produto sem uso e etiqueta\n• Frete de devolução por conta do cliente\n• Entre em contato via WhatsApp\n\nEstamos aqui para resolver qualquer problema!"
        }
    };

    // Função para encontrar resposta
    const findResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase();
        
        for (const [category, data] of Object.entries(botKnowledge)) {
            if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
                return data.response;
            }
        }
        
        // Resposta padrão
        return "Desculpe, não entendi sua pergunta. 😅\n\nPerguntas que posso responder:\n\n• Produtos e preços\n• Entrega e frete\n• Formas de pagamento\n• Tamanhos disponíveis\n• Trocas e devoluções\n• Contato e WhatsApp\n\nOu fale diretamente conosco via WhatsApp!";
    };

    // Enviar mensagem
    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage = {
            text: inputValue,
            sender: 'user',
            time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simula delay de digitação do bot
        setTimeout(() => {
            const botResponse = {
                text: findResponse(inputValue),
                sender: 'bot',
                time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    // Sugestões rápidas
    const quickSuggestions = [
        "Ver produtos",
        "Preços",
        "Entrega",
        "Tamanhos",
        "WhatsApp"
    ];

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
    };

    return (
        <>
            {/* Botão Flutuante */}
            <motion.button
                className="chatbot-float-button"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={isOpen ? { scale: 0 } : { scale: 1 }}
            >
                💬
            </motion.button>

            {/* Janela do Chat */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-container"
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        {/* Header do Chat */}
                        <div className="chatbot-header">
                            <div className="chatbot-header-info">
                                <div className="chatbot-avatar">✝</div>
                                <div>
                                    <div className="chatbot-title">Assistente Santo Presentesc</div>
                                    <div className="chatbot-status">
                                        <span className="status-dot"></span>
                                        Online
                                    </div>
                                </div>
                            </div>
                            <button 
                                className="chatbot-close-btn"
                                onClick={() => setIsOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Área de Mensagens */}
                        <div className="chatbot-messages">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    className={`message ${message.sender}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {message.sender === 'bot' && (
                                        <div className="message-avatar">✝</div>
                                    )}
                                    <div className="message-content">
                                        <div className="message-text">{message.text}</div>
                                        <div className="message-time">{message.time}</div>
                                    </div>
                                </motion.div>
                            ))}
                            
                            {isTyping && (
                                <div className="message bot">
                                    <div className="message-avatar">✝</div>
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            )}
                            
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Sugestões Rápidas */}
                        <div className="chatbot-suggestions">
                            {quickSuggestions.map((suggestion, index) => (
                                <button
                                    key={index}
                                    className="suggestion-btn"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>

                        {/* Input de Mensagem */}
                        <div className="chatbot-input-area">
                            <input
                                type="text"
                                className="chatbot-input"
                                placeholder="Digite sua mensagem..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button 
                                className="chatbot-send-btn"
                                onClick={handleSend}
                            >
                                ➤
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;