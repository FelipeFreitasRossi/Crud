import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logoImage from '../assets/SantoPresenteLogo.svg'; 

// 📸 SEUS IMPORTS DE ASSETS DE IMAGEM
// Oversized São Miguel
import oversizedSaoMiguelFImage from '../assets/oversizedSaoMiguelF.jpg'; 
// import oversizedSaoMiguelCImage from '../assets/oversizedSaoMiguelC.jpg'; // Não está em uso no destaque

// Blusa Branca Coroa
import blusaBrancaCoroaFImage from '../assets/blusaBrancaCoroaF.jpg'; 

// Blusa Preta Coroa
import blusaPretaCoroaImage from '../assets/blusaPretaCoroa.jpg';

// Oversized Maria Branca
import oversizedMariaBrancaFImage from '../assets/oversizedMariaBrancaF.jpg';

// Oversized Maria
import oversizedMariaFImage from '../assets/oversizedMariaF.jpg';

// Oversized São Bento (Variantes)
import oversizedSaoBento2FImage from '../assets/oversizedSaoBento2F.jpg';

// ⚠️ IMPORT ADICIONAL DE MOLETOM (Garantir que este asset exista)
// Se você tiver um import de moletom na sua pasta de assets, substitua 'imagemMoletomGenerico' pelo nome do seu import.
import imagemMoletomGenerico from '../assets/blusa70x7PretaF.jpg'; 


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

    // 🌟 PRODUTOS EM DESTAQUE (Preços e Categorias Corrigidos) 🌟
    const produtosDestaque = [
        // 1. BLUSA BRANCA COROA (CAMISETA)
        {
            id: 1,
            name: "Blusa Coroa Branca", 
            category: "moletom", // CATEGORIA CORRIGIDA
            price: 229.99, // PREÇO CORRIGIDO
            imageUrl: blusaBrancaCoroaFImage, 
            badge: "👑 Novo Destaque",
            badgeColor: "#F3C53C",
            description: "Design minimalista e elegante com a coroa sagrada. Conforto e fé para o seu dia."
        },
        // 2. BLUSA PRETA COROA (CAMISETA)
        {
            id: 2,
            name: "Blusa Coroa Preta",
            category: "moletom", // CATEGORIA CORRIGIDA
            price: 229.99, // PREÇO CORRIGIDO
            imageUrl: blusaPretaCoroaImage, 
            badge: "🖤 Clássico",
            badgeColor: "#4E4E4E",
            description: "A cor preta realça a estampa da coroa. Peça essencial, moderna e de alta qualidade."
        },
        // 3. OVERSIZED MARIA BRANCA (OVERSIZED)
        {
            id: 3,
            name: "Oversized Maria Branca",
            category: "Oversized", // CATEGORIA CORRIGIDA
            price: 109.99, // PREÇO CORRIGIDO (Ajustado para o valor de Oversized)
            imageUrl: oversizedMariaBrancaFImage, 
            badge: "✨ Novo",
            badgeColor: "#4ECDC4",
            description: "Homenagem à Virgem Maria com um caimento moderno. Perfeita para quem busca estilo e devoção."
        },
        {
            id: 4,
            name: "Oversized São Bento",
            category: "Oversized", 
            price: 109.99, 
            imageUrl: oversizedSaoBento2FImage, 
            badge: "🛡️ Proteção",
            badgeColor: "#FF6B6B",
            description: "Com a poderosa Medalha de São Bento. Qualidade premium e caimento impecável."
        },
        {
            id: 5,
            name: "Moletom Esperança",
            category: "Blusa de Frio", 
            price: 229.99, 
            imageUrl: imagemMoletomGenerico, 
            badge: "❄️ Inverno",
            badgeColor: "#6BCB77",
            description: "Perfeito para os dias frios! Conforto máximo e mensagem inspiradora. Qualidade premium."
        },
        {
            id: 6,
            name: "Oversized São Miguel",
            category: "Oversized", 
            price: 109.99, 
            imageUrl: oversizedSaoMiguelFImage, 
            badge: "🔥 Mais Vendido",
            badgeColor: "#FFD700",
            description: "Arcanjo Miguel em destaque. Design marcante para expressar sua fé e proteção."
        }
    ];

    const handleVerProduto = () => {
        navigate('/shop');
        window.scrollTo(0, 0);
    };

    return (
        <div className="destaques-page-container">
            
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
            

            {/* GRID DE PRODUTOS DESTAQUE */}
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
                                    src={produto.imageUrl} 
                                    alt={produto.name}
                                    className="destaque-image"
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
            

            {/* POR QUE ESCOLHER */}
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


            {/* CATEGORIAS */}
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


            {/* CTA FINAL */}
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