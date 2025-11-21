// src/pages/ShopPage.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion'; // Importação do AnimatePresence

// Componentes Importados (Presume-se que ProductQuickViewModal exista)
import ProductQuickViewModal from '../components/ProductQuickViewModal';

// Icone (Apenas para demonstração, use um ícone real como FaFilter)
const FilterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 3.5H2l8 10V22h4v-8.5l8-10z"/>
    </svg>
);


// 👕 Simulação de dados de produtos de Moda Católica
// ... MOCK_PRODUCTS (Mantidos como estavam)
const MOCK_PRODUCTS = [
    { id: 1, name: "Camiseta Sagrado Coração", category: "Camisetas Normais", price: 69.90, imageUrl: "sagrado_coracao.jpg" },
    { id: 2, name: "Babylook Nossa Senhora", category: "Babylooks", price: 79.90, imageUrl: "nossa_senhora_babylook.jpg" },
    { id: 3, name: "Oversized São Bento", category: "Camisas Oversized", price: 99.90, imageUrl: "oversized_saobento.jpg" },
    { id: 4, name: "Blusa Moletom Fé", category: "Blusas", price: 159.90, imageUrl: "blusa_fe.jpg" },
    { id: 5, name: "Camiseta Totus Tuus", category: "Camisetas Normais", price: 69.90, imageUrl: "totus_tuus.jpg" },
    { id: 6, name: "Babylook Santa Teresinha", category: "Babylooks", price: 79.90, imageUrl: "santa_teresinha_babylook.jpg" },
    { id: 7, name: "Camisa Oversized Cruz", category: "Camisas Oversized", price: 109.90, imageUrl: "oversized_cruz.jpg" },
    { id: 8, name: "Blusa Gola Alta Maria", category: "Blusas", price: 139.90, imageUrl: "blusa_maria.jpg" },
];


// Componente de Filtros (Barra Lateral/Modal)
const FilterSidebar = ({ onFilterChange, selectedCategory, isMobile, onClose }) => {
    const { t } = useTranslation();
    
    const categories = [
        "Todos",
        "Camisetas Normais",
        "Camisas Oversized",
        "Blusas",
        "Babylooks"
    ];

    // Se for mobile, ele será renderizado dentro de um modal com backdrop
    if (isMobile) {
        return (
            <AnimatePresence>
                <motion.div 
                    className="mobile-filter-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose} // Fecha ao clicar no backdrop
                >
                    <motion.div 
                        className="filter-sidebar mobile-drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        onClick={e => e.stopPropagation()} // Impede que o clique feche o modal
                    >
                        <button className="close-filter-btn" onClick={onClose}>
                            &times;
                        </button>
                        <h3>{t('filters.title')}</h3>
                        
                        <div className="filter-group">
                            <h4>{t('filters.product_type')}</h4>
                            {categories.map(cat => (
                                <motion.button
                                    key={cat}
                                    className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                                    onClick={() => {
                                        onFilterChange(cat);
                                        onClose(); // Fecha após aplicar o filtro no mobile
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t(cat)}
                                </motion.button>
                            ))}
                        </div>
                        
                        <div className="filter-group">
                            <h4>{t('filters.devotion')}</h4>
                            <motion.button className="filter-btn" whileHover={{ scale: 1.05 }}>{t('Nossa Senhora')}</motion.button>
                            <motion.button className="filter-btn" whileHover={{ scale: 1.05 }}>{t('Santos Populares')}</motion.button>
                            <motion.button className="filter-btn" whileHover={{ scale: 1.05 }}>{t('Sagrada Família')}</motion.button>
                        </div>

                    </motion.div>
                </motion.div>
            </AnimatePresence>
        );
    }
    
    // Versão Desktop (mantida)
    return (
        <motion.div 
            className="filter-sidebar desktop-sidebar" // Adicionada classe específica
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            <h3>{t('filters.title')}</h3>
            {/* ... Conteúdo do filtro desktop ... */}
            <div className="filter-group">
                <h4>{t('filters.product_type')}</h4>
                {categories.map(cat => (
                    <motion.button
                        key={cat}
                        className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                        onClick={() => onFilterChange(cat)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t(cat)}
                    </motion.button>
                ))}
            </div>
            
            <div className="filter-group">
                <h4>{t('filters.devotion')}</h4>
                <motion.button className="filter-btn" whileHover={{ scale: 1.05 }}>{t('Nossa Senhora')}</motion.button>
                <motion.button className="filter-btn" whileHover={{ scale: 1.05 }}>{t('Santos Populares')}</motion.button>
                <motion.button className="filter-btn" whileHover={{ scale: 1.05 }}>{t('Sagrada Família')}</motion.button>
            </div>
        </motion.div>
    );
};

// Componente de Cartão de Produto (Mantido)
const ProductCard = ({ product, onClick }) => {
    // ... Código do ProductCard (Mantido) ...
    const { t } = useTranslation();

    return (
        <motion.div 
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => onClick(product)} 
        >
            <div className="card-image-container">
                {/*  - Imagem do produto */}
            </div>
            <div className="card-details">
                <h3>{product.name}</h3>
                <p className="product-category">{t(product.category)}</p> 
                <p className="product-price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
                <button className="btn-add-to-cart">
                    {t('addToCart')}
                </button>
            </div>
        </motion.div>
    );
};


// Componente Principal
function ShopPage() {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [selectedProduct, setSelectedProduct] = useState(null); 
    // NOVO ESTADO: Controle da abertura dos filtros no mobile
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); 

    // Simulação de detecção de mobile (Pode ser melhorado com useEffect)
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 900);

    // Adiciona listener para redimensionamento
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 900);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleFilterChange = (category) => {
        setSelectedCategory(category);
    };

    const openQuickView = (product) => {
        setSelectedProduct(product);
    };

    const closeQuickView = () => {
        setSelectedProduct(null);
    };

    const filteredProducts = MOCK_PRODUCTS.filter(product => {
        if (selectedCategory === "Todos") {
            return true;
        }
        return product.category === selectedCategory;
    });

    return (
        <div className="shop-page-container">
            
            <section className="shop-hero-section">
                <div className="shop-hero-content">
                    <h1>{t('shop_title_catholic')}</h1> 
                    <p>{t('shop_slogan_catholic')}</p>
                </div>
            </section>

            <section className="products-listing-section">
                <div className="shop-main-content">

                    {/* NOVO: Botão de Filtro APENAS para Mobile */}
                    {isMobileView && (
                        <div className="mobile-filter-bar">
                            <button 
                                className="btn-open-filters" 
                                onClick={() => setIsFilterModalOpen(true)}
                            >
                                <FilterIcon /> {t('filters.title')}
                            </button>
                        </div>
                    )}

                    {/* Sidebar/Modal de Filtros */}
                    {isMobileView ? (
                        isFilterModalOpen && (
                            <FilterSidebar 
                                onFilterChange={handleFilterChange} 
                                selectedCategory={selectedCategory} 
                                isMobile={true}
                                onClose={() => setIsFilterModalOpen(false)}
                            />
                        )
                    ) : (
                        <FilterSidebar 
                            onFilterChange={handleFilterChange} 
                            selectedCategory={selectedCategory} 
                            isMobile={false}
                        />
                    )}
                    
                    {/* Exibição dos Produtos */}
                    <div className="products-area">
                        <div className="listing-header">
                            <h2>{t('products_found', { count: filteredProducts.length })}</h2>
                        </div>
                        <div className="products-grid">
                            {filteredProducts.map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    onClick={openQuickView} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal de Visualização Rápida (Pop-up) */}
            {selectedProduct && (
                <ProductQuickViewModal 
                    product={selectedProduct} 
                    onClose={closeQuickView} 
                />
            )}
        </div>
    );
}

export default ShopPage;