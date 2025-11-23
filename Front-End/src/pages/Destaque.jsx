import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logoImage from '../assets/SantoPresenteLogo.svg'; 

function Destaques() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }, []);

    // Produtos em Destaque
    const produtosDestaque = [
        {
            id: 1,
            name: "Camisa Fé em Cristo",
            category: "Camiseta",
            price: 89.90,
            imageUrl: "camisa-fe.jpg",
            badge: "🔥 Mais Vendido",
            badgeColor: "#FF6B6B",
            description: "Nossa camiseta mais popular! Design moderno e confortável que expressa sua fé com estilo."
        },
        {
            id: 2,
            name: "Oversized Cruz Sagrada",
            category: "Oversized",
            price: 129.90,
            imageUrl: "oversized-cruz.jpg",
            badge: "✨ Novo",
            badgeColor: "#4ECDC4",
            description: "Lançamento exclusivo! Estilo urbano com propósito. Caimento perfeito e design impactante."
        },
        {
            id: 3,
            name: "Babylook Maria",
            category: "Babylook",
            price: 79.90,
            imageUrl: "baby-maria.jpg",
            badge: "💫 Destaque",
            badgeColor: "#FFD93D",
            description: "Delicadeza e fé em uma peça única. Modelagem feminina e elegante para todas as ocasiões."
        },
        {
            id: 4,
            name: "Moletom Esperança",
            category: "Blusa de Frio",
            price: 149.90,
            imageUrl: "moletom-esperanca.jpg",
            badge: "❄️ Inverno",
            badgeColor: "#6BCB77",
            description: "Perfeito para os dias frios! Conforto máximo e mensagem inspiradora. Qualidade premium."
        },
        {
            id: 5,
            name: "Camisa Salmo 23",
            category: "Camiseta",
            price: 89.90,
            imageUrl: "camisa-salmo.jpg",
            badge: "📿 Inspiradora",
            badgeColor: "#A8E6CF",
            description: "O salmo mais amado estampado com arte exclusiva. Evangelize através da moda."
        },
        {
            id: 6,
            name: "Oversized Jesus Salva",
            category: "Oversized",
            price: 139.90,
            imageUrl: "oversized-jesus.jpg",
            badge: "⭐ Premium",
            badgeColor: "#FFD700",
            description: "Frase poderosa em design impactante. Espalhe a mensagem de Cristo com estilo único."
        }
    ];

    const handleVerProduto = () => {
        navigate('/shop');
        window.scrollTo(0, 0);
    };

    return (
        <div className="destaques-page-container">
            
            {/* HERO SECTION MELHORADO */}
            <section className="destaques-hero-section">
                <motion.div 
                    className="destaques-hero-content"
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="hero-icon-float"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                    <img 
                        src={logoImage} 
                        alt="Santo Presentesc" 
                        className="site-logo" 
                    /> 
                    </motion.div>
                    <h1>Produtos em Destaque</h1>
                    <p>Nossas peças mais especiais e procuradas</p>
                    <motion.div
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Selecionados especialmente para você
                    </motion.div>
                </motion.div>
            </section>

            {/* INTRO COM ANIMAÇÃO */}
            <section className="destaques-intro" data-aos="fade-up">
                <motion.div 
                    className="intro-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Escolhidos com Amor</h2>
                    <p>
                        Cada produto em destaque foi cuidadosamente selecionado pela nossa equipe. 
                        Qualidade premium, designs exclusivos e mensagens que tocam o coração. 
                        Descubra as peças que estão fazendo sucesso entre nossos clientes!
                    </p>
                </motion.div>
            </section>

            {/* GRID DE PRODUTOS DESTAQUE MELHORADO */}
            <section className="destaques-produtos-section">
                <div className="destaques-grid">
                    {produtosDestaque.map((produto, index) => (
                        <motion.div
                            key={produto.id}
                            className="destaque-card"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -15, scale: 1.03 }}
                        >
                            {/* Badge com cor dinâmica */}
                            <motion.div 
                                className="destaque-badge"
                                style={{ background: produto.badgeColor }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                {produto.badge}
                            </motion.div>

                            {/* Imagem com efeitos */}
                            <div className="destaque-image-container">
                                <motion.img 
                                    src={`/assets/images/${produto.imageUrl}`}
                                    alt={produto.name}
                                    className="destaque-image"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/400x400/1a1a2e/FFD700?text=Produto+em+Destaque';
                                    }}
                                    whileHover={{ scale: 1.15, rotate: 2 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div 
                                    className="destaque-overlay"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    <motion.button 
                                        className="btn-ver-produto"
                                        onClick={handleVerProduto}
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Ver na Loja →
                                    </motion.button>
                                </motion.div>
                            </div>

                            {/* Detalhes melhorados */}
                            <div className="destaque-details">
                                <span className="destaque-category">{produto.category}</span>
                                <h3>{produto.name}</h3>
                                <p>{produto.description}</p>
                                <div className="destaque-footer">
                                    <div className="destaque-price">
                                        R$ {produto.price.toFixed(2).replace('.', ',')}
                                    </div>
                                    <motion.button
                                        className="btn-quick-view"
                                        onClick={handleVerProduto}
                                        whileHover={{ x: 5 }}
                                    >
                                        Ver mais →
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* POR QUE ESCOLHER MELHORADO */}
            <section className="porque-section" data-aos="fade-up">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Por Que Escolher a Santo Presentesc?
                </motion.h2>
                
                <div className="porque-grid">
                    {[
                        { icon: "✨", title: "Design Exclusivo", desc: "Estampas únicas criadas especialmente para expressar sua fé com estilo e originalidade" },
                        { icon: "🌟", title: "Qualidade Premium", desc: "Tecidos de primeira linha, acabamento impecável e durabilidade garantida em todas as peças" },
                        { icon: "💜", title: "Atendimento Humanizado", desc: "Equipe dedicada a te ajudar em cada etapa, do pedido até a entrega com carinho" }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            className="porque-card" 
                            data-aos="fade-right" 
                            data-aos-delay={index * 100}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                        >
                            <motion.div 
                                className="porque-icon"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                            >
                                {item.icon}
                            </motion.div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CATEGORIAS MELHORADAS */}
            <section className="categorias-destaques-section" data-aos="fade-up">
                <h2>Explore Todas as Categorias</h2>
                <p className="categorias-subtitle">Encontre o produto perfeito para você</p>
                
                <div className="categorias-grid">
                    {[
                        { icon: "👕", title: "Camisetas", desc: "Conforto e estilo para o dia a dia" },
                        { icon: "🎽", title: "Oversized", desc: "Design urbano e moderno" },
                        { icon: "👗", title: "Babylooks", desc: "Delicadeza e feminilidade" },
                        { icon: "🧥", title: "Blusas de Frio", desc: "Conforto para o inverno" }
                    ].map((cat, index) => (
                        <motion.div 
                            key={index}
                            className="categoria-card"
                            whileHover={{ scale: 1.08, y: -10 }}
                            data-aos="flip-up"
                            data-aos-delay={index * 100}
                            onClick={handleVerProduto}
                        >
                            <motion.div 
                                className="categoria-icon"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                {cat.icon}
                            </motion.div>
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA FINAL MELHORADO */}
            <section className="cta-section" data-aos="zoom-in">
                <motion.div 
                    className="cta-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="cta-icon"
                    >
                   </motion.div>
                    <h2>Pronto para Expressar sua Fé?</h2>
                    <p>Explore toda nossa coleção e encontre a peça perfeita que toca seu coração</p>
                    <motion.button
                        className="cta-button"
                        onClick={handleVerProduto}
                        whileHover={{ scale: 1.1, boxShadow: "0 20px 60px rgba(255, 215, 0, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Ver Todos os Produtos</span>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
}

export default Destaques;