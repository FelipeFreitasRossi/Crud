// src/pages/LandingPage.jsx (com adição do elemento de ruído)

import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next'; 
import { motion, useScroll, useTransform } from 'framer-motion'; 

function LandingPage() {
    
    const { t } = useTranslation();

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"] 
    });
    
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);


    return (
        <div className="landing-container">
            <motion.section 
                className="hero-section"
                ref={targetRef}
            >
                {/* Efeito de fundo principal */}
                <motion.div 
                    className="hero-background-effect"
                    style={{ y: yBg }}
                ></motion.div>

                {/* 🎯 NOVO: Elemento para o efeito de ruído/grão 🎯 */}
                <div className="noise-overlay"></div> 

                <motion.div 
                    className="hero-content"
                    style={{ y: yText }}
                >
                    <motion.p 
                        className="shop-name"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    > 
                        {t('shop_name')} 
                    </motion.p>
                    
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    > 
                        {t('hero_heading')} 
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    > 
                    </motion.p>
                    
                    <motion.div 
                        className="hero-auth-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <a href="/login">
                            <motion.button 
                                className="btn-auth-hero"
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('login')}
                            </motion.button>
                        </a>
                        <a href="/register">
                            <motion.button 
                                className="btn-auth-hero btn-primary-hero"
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('register')}
                            </motion.button>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default LandingPage;