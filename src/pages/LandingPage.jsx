// src/pages/LandingPage.jsx
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Importa o hook de tradução
import { motion, useScroll, useTransform } from 'framer-motion'; 
import Slider from 'react-slick'; 
import HighlightSlide from '../components/HighlightSlide'; 

// Dados de Exemplo para o Carrossel
const products = [
    { title: "Camiseta Sagrado", imageUrl: "placeholder-1.jpg" },
    { title: "Babylook Estrela", imageUrl: "placeholder-2.jpg" },
    { title: "Moletom Maria", imageUrl: "placeholder-3.jpg" },
    { title: "Blusa Cruz", imageUrl: "placeholder-4.jpg" },
];


function LandingPage() {
  
  // 1. Inicializa o hook de tradução
  const { t } = useTranslation();

  // 2. Configuração do Paralaxe 
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  // 3. Configurações do Carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="landing-container">
      {/* 1. SEÇÃO DE HERO COM PARALAXE */}
      <motion.section 
        className="hero-section"
        ref={targetRef}
      >
        <motion.div 
            className="hero-background-effect"
            style={{ y: yBg }}
        ></motion.div>

        <motion.div 
            className="hero-content"
            style={{ y: yText }}
        >
            {/* TRADUÇÃO AQUI */}
            <motion.p className="shop-name"> {t('shop_name')} </motion.p>
            <motion.h1> {t('hero_heading')} </motion.h1>
            <motion.p> {t('hero_subheading')} </motion.p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              {t('view_collection')}
            </motion.button>
        </motion.div>
      </motion.section>

      {/* 2. SEÇÃO DE DESTAQUE - CARROSSEL */}
      <motion.section 
        id="highlight-section"
        className="highlight-section" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* TRADUÇÃO AQUI */}
        <h2>{t('highlight_heading')}</h2>
        <p className="highlight-subtitle">{t('highlight_subtitle')}</p>
        
        <div className="carousel-container">
            <Slider {...settings}>
                {products.map((product, index) => (
                    // Note: Os títulos dos produtos (Camiseta Sagrado) não foram traduzidos, 
                    // mas deveriam ser se fossem dinâmicos.
                    <HighlightSlide 
                        key={index}
                        title={product.title}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </Slider>
        </div>
        
        <button className="view-all-btn">{t('view_all_products')}</button>
      </motion.section>

      {/* 3. SEÇÃO DE DESCRIÇÃO DO SITE */}
      <motion.section 
        id="about-section"
        className="about-section" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* TRADUÇÃO AQUI */}
        <h3>{t('about_heading')}</h3>
        <p>
            {t('about_p1')}
        </p>
        <p>
            {t('about_p2')}
        </p>
      </motion.section>

      {/* 4. SEÇÃO DE CATEGORIAS */}
      <section id="categories-section" className="categories-section"> 
        {/* TRADUÇÃO AQUI */}
        <h3>{t('categories_heading')}</h3>
        <div className="category-list">
          <p>{t('categories_list')}</p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;