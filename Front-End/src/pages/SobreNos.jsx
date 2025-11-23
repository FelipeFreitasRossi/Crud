import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logoImage from '../assets/SantoPresenteLogo.svg'; 

function SobreNos() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <div className="sobre-page-container">
            
            {/* HERO SECTION */}
            <section className="sobre-hero-section">
                <motion.div 
                    className="sobre-hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="hero-cross-icon"
                        animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                    </motion.div>
                    <h1>Sobre Nós</h1>
                    <p>Conheça a história da Santo Presentesc</p>
                    <motion.div
                        className="hero-divider"
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />
                </motion.div>
            </section>

            {/* NOSSA HISTÓRIA */}
            <section className="sobre-section" data-aos="fade-up">
                <div className="sobre-content">
                    <motion.div 
                        className="sobre-text" 
                        data-aos="fade-right"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Nossa História</h2>
                        <p>
                            A <strong>Santo Presentesc</strong> nasceu do desejo de compartilhar a fé católica 
                            através da moda. Somos uma loja especializada em roupas que expressam devoção, 
                            estilo e qualidade.
                        </p>
                        <p>
                            Cada peça é cuidadosamente desenvolvida para você demonstrar sua fé com elegância 
                            e conforto. Nossa missão é espalhar a mensagem de Cristo através da moda, 
                            criando produtos que tocam corações e inspiram vidas.
                        </p>
                        <motion.div
                            className="quote-box"
                            whileHover={{ scale: 1.02 }}
                        >
                            <p>"Vestem-se de força e dignidade"</p>
                            <span>— Provérbios 31:25</span>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="sobre-image" 
                        data-aos="fade-left"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="image-placeholder">
                            
                        <img 
                            src={logoImage} 
                            alt="Santo Presentesc" 
                            className="site-logo" 
                        /> 

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* EQUIPE */}
            <section className="team-section" data-aos="fade-up">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Nossa Equipe
                </motion.h2>
                <p className="team-subtitle">Conheça quem faz a Santo Presentesc acontecer</p>
                
                <div className="team-grid">
                    
                    {/* Patricia */}
                    <motion.div 
                        className="team-card"
                        data-aos="zoom-in"
                        whileHover={{ y: -10, scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            className="team-avatar"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            P
                        </motion.div>
                        <h3>Patricia Helena de Freitas Rossi</h3>
                        <p className="team-role">Gerente & Co-fundadora</p>
                        <p className="team-description">
                            Responsável pela gestão da loja, seleção de produtos e atendimento ao cliente. 
                            Com olhar apurado para moda católica e paixão por evangelização, Patricia cuida 
                            de cada detalhe para garantir que nossos clientes tenham a melhor experiência.
                        </p>
                        <div className="team-skills">
                            <span>Gestão</span>
                            <span>Atendimento</span>
                            <span>Produtos</span>
                        </div>
                    </motion.div>

                    {/* Felipe */}
                    <motion.div 
                        className="team-card featured"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        whileHover={{ y: -10, scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            className="team-avatar"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            F
                        </motion.div>
                        <h3>Felipe de Freitas Rossi</h3>
                        <p className="team-role">Desenvolvedor & Co-fundador</p>
                        <div className="age-badge">17 anos</div>
                        <p className="team-description">
                            Jovem desenvolvedor web que, aos 17 anos, já cria sites para diversas empresas. 
                            Responsável por toda a tecnologia, design e experiência digital da Santo Presentesc. 
                            Desenvolveu este sistema completo do zero, incluindo o ChatBot inteligente!
                        </p>
                        <div className="team-skills">
                            <span>React</span>
                            <span>Design</span>
                            <span>UX/UI</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTATO */}
            <section className="contato-section" data-aos="fade-up">
                <h2>Entre em Contato</h2>
                <p className="contato-subtitle">Estamos aqui para te atender!</p>
                
                <div className="contato-cards">
                    
                    <motion.div 
                        className="contato-card whatsapp-card"
                        whileHover={{ scale: 1.05, y: -10 }}
                        data-aos="flip-left"
                    >
                        <motion.div 
                            className="contato-icon"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            📱
                        </motion.div>
                        <h3>WhatsApp</h3>
                        <p>Atendimento rápido e personalizado</p>
                        <p className="contato-info">(11) 99999-9999</p>
                        <motion.a 
                            href="https://wa.me/5516996167381" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contato-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Falar no WhatsApp
                        </motion.a>
                    </motion.div>

                    <motion.div 
                        className="contato-card instagram-card"
                        whileHover={{ scale: 1.05, y: -10 }}
                        data-aos="flip-left"
                        data-aos-delay="200"
                    >
                        <motion.div 
                            className="contato-icon"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            📷
                        </motion.div>
                        <h3>Instagram</h3>
                        <p>Acompanhe nossos lançamentos</p>
                        <p className="contato-info">@santo_presentesc</p>
                        <motion.a 
                            href="https://instagram.com/santo_presentesc" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contato-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Seguir no Instagram
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* VALORES */}
            <section className="valores-section" data-aos="fade-up">
                <h2>Nossos Valores</h2>
                
                <div className="valores-grid">
                    {[
                        { icon: "✝️", title: "Fé", desc: "Colocamos Deus em primeiro lugar em tudo que fazemos, evangelizando através da moda" },
                        { icon: "💎", title: "Qualidade", desc: "Produtos premium com acabamento impecável e tecidos de primeira linha" },
                        { icon: "💜", title: "Amor", desc: "Atendimento humanizado e personalizado, tratando cada cliente como família" },
                        { icon: "🌟", title: "Excelência", desc: "Compromisso inabalável com a satisfação e felicidade de cada cliente" }
                    ].map((valor, index) => (
                        <motion.div 
                            key={index}
                            className="valor-card" 
                            data-aos="zoom-in" 
                            data-aos-delay={index * 100}
                            whileHover={{ 
                                scale: 1.05, 
                                rotate: [0, -2, 2, 0],
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div 
                                className="valor-icon"
                                whileHover={{ scale: 1.3, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                {valor.icon}
                            </motion.div>
                            <h3>{valor.title}</h3>
                            <p>{valor.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default SobreNos;