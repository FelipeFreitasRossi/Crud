import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Destaques() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
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
            badge: "Mais Vendido",
            description: "Nossa camiseta mais popular! Design moderno e confortável."
        },
        {
            id: 2,
            name: "Oversized Cruz Sagrada",
            category: "Oversized",
            price: 129.90,
            imageUrl: "oversized-cruz.jpg",
            badge: "Novo",
            description: "Lançamento exclusivo! Estilo urbano com propósito."
        },
        {
            id: 3,
            name: "Babylook Maria",
            category: "Babylook",
            price: 79.90,
            imageUrl: "baby-maria.jpg",
            badge: "Destaque",
            description: "Delicadeza e fé em uma peça única."
        },
        {
            id: 4,
            name: "Moletom Esperança",
            category: "Blusa de Frio",
            price: 149.90,
            imageUrl: "moletom-esperanca.jpg",
            badge: "Inverno",
            description: "Perfeito para os dias frios! Conforto e estilo."
        }
    ];

    const handleVerProduto = () => {
        navigate('/shop');
    };

    return (
        <div className="destaques-page-container">
            
            {/* HERO SECTION */}
            <section className="destaques-hero-section">
                <motion.div 
                    className="destaques-hero-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>⭐ Produtos em Destaque</h1>
                    <p>Nossas peças mais especiais e procuradas</p>
                </motion.div>
            </section>

            {/* INTRO */}
            <section className="destaques-intro" data-aos="fade-up">
                <div className="intro-content">
                    <h2>Selecionados Especialmente para Você</h2>
                    <p>
                        Confira nossa seleção de produtos mais amados pelos nossos clientes. 
                        Cada peça foi escolhida por sua qualidade, design único e capacidade de 
                        expressar a fé católica com estilo e elegância.
                    </p>
                </div>
            </section>

            {/* GRID DE PRODUTOS DESTAQUE */}
            <section className="destaques-produtos-section">
                <div className="destaques-grid">
                    {produtosDestaque.map((produto, index) => (
                        <motion.div
                            key={produto.id}
                            className="destaque-card"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                            whileHover={{ y: -15, scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Badge */}
                            <div className="destaque-badge">{produto.badge}</div>

                            {/* Imagem */}
                            <div className="destaque-image-container">
                                <img 
                                    src={`/assets/images/${produto.imageUrl}`}
                                    alt={produto.name}
                                    className="destaque-image"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/400x400/1a1a2e/FFD700?text=Produto';
                                    }}
                                />
                                <div className="destaque-overlay">
                                    <button 
                                        className="btn-ver-produto"
                                        onClick={handleVerProduto}
                                    >
                                        Ver Produto
                                    </button>
                                </div>
                            </div>

                            {/* Detalhes */}
                            <div className="destaque-details">
                                <span className="destaque-category">{produto.category}</span>
                                <h3>{produto.name}</h3>
                                <p>{produto.description}</p>
                                <div className="destaque-price">
                                    R$ {produto.price.toFixed(2).replace('.', ',')}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* POR QUE ESCOLHER */}
            <section className="porque-section" data-aos="fade-up">
                <h2>Por Que Escolher a Santo Presentesc?</h2>
                
                <div className="porque-grid">
                    <div className="porque-card" data-aos="fade-right">
                        <div className="porque-icon">✨</div>
                        <h3>Design Exclusivo</h3>
                        <p>Estampas únicas criadas especialmente para expressar sua fé</p>
                    </div>

                    <div className="porque-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="porque-icon">🌟</div>
                        <h3>Qualidade Premium</h3>
                        <p>Tecidos de alta qualidade, conforto e durabilidade garantidos</p>
                    </div>

                    <div className="porque-card" data-aos="fade-left" data-aos-delay="200">
                        <div className="porque-icon">💜</div>
                        <h3>Atendimento Personalizado</h3>
                        <p>Equipe dedicada a te ajudar em cada etapa da compra</p>
                    </div>
                </div>
            </section>

            {/* CATEGORIAS */}
            <section className="categorias-destaques-section" data-aos="fade-up">
                <h2>Explore Todas as Categorias</h2>
                <p className="categorias-subtitle">Encontre o produto perfeito para você</p>
                
                <div className="categorias-grid">
                    <motion.div 
                        className="categoria-card"
                        whileHover={{ scale: 1.05 }}
                        data-aos="flip-left"
                    >
                        <div className="categoria-icon">👕</div>
                        <h3>Camisetas</h3>
                        <p>Conforto e estilo para o dia a dia</p>
                    </motion.div>

                    <motion.div 
                        className="categoria-card"
                        whileHover={{ scale: 1.05 }}
                        data-aos="flip-left"
                        data-aos-delay="100"
                    >
                        <div className="categoria-icon">🎽</div>
                        <h3>Oversized</h3>
                        <p>Design urbano e moderno</p>
                    </motion.div>

                    <motion.div 
                        className="categoria-card"
                        whileHover={{ scale: 1.05 }}
                        data-aos="flip-left"
                        data-aos-delay="200"
                    >
                        <div className="categoria-icon">👗</div>
                        <h3>Babylooks</h3>
                        <p>Delicadeza e feminilidade</p>
                    </motion.div>

                    <motion.div 
                        className="categoria-card"
                        whileHover={{ scale: 1.05 }}
                        data-aos="flip-left"
                        data-aos-delay="300"
                    >
                        <div className="categoria-icon">🧥</div>
                        <h3>Blusas de Frio</h3>
                        <p>Conforto para o inverno</p>
                    </motion.div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="cta-section" data-aos="zoom-in">
                <motion.div 
                    className="cta-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Pronto para Expressar sua Fé?</h2>
                    <p>Explore toda nossa coleção e encontre a peça perfeita para você</p>
                    <motion.button
                        className="cta-button"
                        onClick={handleVerProduto}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Ver Todos os Produtos →
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
}

export default Destaques;