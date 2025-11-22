// src/components/ShopPage.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import ProductQuickViewModal from '../components/ProductQuickViewModal';
import productsData from '../data/productsData'; // ← Importa os dados

function ShopPage() {
    const { t } = useTranslation();
    
    const [selectedCategory, setSelectedCategory] = useState('todos');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Filtrar produtos baseado na categoria selecionada
    const filteredProducts = selectedCategory === 'todos' 
        ? productsData 
        : productsData.filter(product => product.category === selectedCategory);

    // Abrir modal de produto
    const openProductModal = (product) => {
        setSelectedProduct(product);
    };

    // Fechar modal de produto
    const closeProductModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="shop-page-container">
            
            {/* HERO SECTION DA LOJA */}
            <section className="shop-hero-section">
                <div className="shop-hero-content">
                    <h1>Nossa Coleção</h1>
                    <p>Descubra peças que fortalecem sua fé</p>
                </div>
            </section>

            {/* SEÇÃO DE PRODUTOS */}
            <section className="products-listing-section">
                
                {/* BOTÃO DE FILTRO MOBILE */}
                <div className="mobile-filter-bar">
                    <button 
                        className="btn-open-filters"
                        onClick={() => setIsMobileFilterOpen(true)}
                    >
                        <span>🔍</span> Filtros
                    </button>
                </div>

                <div className="shop-main-content">
                    
                    {/* SIDEBAR DE FILTROS - DESKTOP */}
                    <aside className="filter-sidebar desktop-sidebar">
                        <h3>Categorias</h3>
                        
                        <div className="filter-group">
                            <button 
                                className={`filter-btn ${selectedCategory === 'todos' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('todos')}
                            >
                                Todos os Produtos
                            </button>
                            <button 
                                className={`filter-btn ${selectedCategory === 'camisetas' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('camisetas')}
                            >
                                Camisetas
                            </button>
                            <button 
                                className={`filter-btn ${selectedCategory === 'oversized' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('oversized')}
                            >
                                Oversized
                            </button>
                            <button 
                                className={`filter-btn ${selectedCategory === 'babylook' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('babylook')}
                            >
                                Babylook
                            </button>
                            <button 
                                className={`filter-btn ${selectedCategory === 'moletom' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('moletom')}
                            >
                                Blusas de Frio
                            </button>
                        </div>
                    </aside>

                    {/* SIDEBAR DE FILTROS - MOBILE (DRAWER) */}
                    <AnimatePresence>
                        {isMobileFilterOpen && (
                            <>
                                <motion.div 
                                    className="mobile-filter-overlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsMobileFilterOpen(false)}
                                />
                                <motion.aside 
                                    className="filter-sidebar mobile-drawer"
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: 'tween' }}
                                >
                                    <button 
                                        className="close-filter-btn"
                                        onClick={() => setIsMobileFilterOpen(false)}
                                    >
                                        &times;
                                    </button>
                                    
                                    <h3>Categorias</h3>
                                    
                                    <div className="filter-group">
                                        <button 
                                            className={`filter-btn ${selectedCategory === 'todos' ? 'active' : ''}`}
                                            onClick={() => {
                                                setSelectedCategory('todos');
                                                setIsMobileFilterOpen(false);
                                            }}
                                        >
                                            Todos os Produtos
                                        </button>
                                        <button 
                                            className={`filter-btn ${selectedCategory === 'camisetas' ? 'active' : ''}`}
                                            onClick={() => {
                                                setSelectedCategory('camisetas');
                                                setIsMobileFilterOpen(false);
                                            }}
                                        >
                                            Camisetas
                                        </button>
                                        <button 
                                            className={`filter-btn ${selectedCategory === 'oversized' ? 'active' : ''}`}
                                            onClick={() => {
                                                setSelectedCategory('oversized');
                                                setIsMobileFilterOpen(false);
                                            }}
                                        >
                                            Oversized
                                        </button>
                                        <button 
                                            className={`filter-btn ${selectedCategory === 'babylook' ? 'active' : ''}`}
                                            onClick={() => {
                                                setSelectedCategory('babylook');
                                                setIsMobileFilterOpen(false);
                                            }}
                                        >
                                            Babylook
                                        </button>
                                        <button 
                                            className={`filter-btn ${selectedCategory === 'moletom' ? 'active' : ''}`}
                                            onClick={() => {
                                                setSelectedCategory('moletom');
                                                setIsMobileFilterOpen(false);
                                            }}
                                        >
                                            Blusas de Frio
                                        </button>
                                    </div>
                                </motion.aside>
                            </>
                        )}
                    </AnimatePresence>

                    {/* ÁREA DE PRODUTOS */}
                    <div className="products-area">
                        
                        <div className="listing-header">
                            <h2>
                                {selectedCategory === 'todos' 
                                    ? 'Todos os Produtos' 
                                    : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`
                                }
                            </h2>
                            <p>{filteredProducts.length} produtos encontrados</p>
                        </div>

                        {/* GRID DE PRODUTOS */}
                        <div className="products-grid">
                            {filteredProducts.map(product => (
                                <motion.div 
                                    key={product.id}
                                    className="product-card"
                                    onClick={() => openProductModal(product)}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="card-image-container">
                                        <img 
                                            src={`/assets/images/${product.imageUrl}`} 
                                            alt={product.name}
                                            className="card-image"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/400x400/1a1a2e/FFD700?text=Produto';
                                            }}
                                        />
                                    </div>
                                    
                                    <div className="card-details">
                                        <p className="product-category">{product.category}</p>
                                        <h3>{product.name}</h3>
                                        <p className="product-price">
                                            R$ {product.price.toFixed(2).replace('.', ',')}
                                        </p>
                                        <button className="btn-add-to-cart">
                                            Ver Detalhes
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mensagem se não houver produtos */}
                        {filteredProducts.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '50px', color: '#E0E0E0' }}>
                                <p>Nenhum produto encontrado nesta categoria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* MODAL DE VISUALIZAÇÃO RÁPIDA */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductQuickViewModal 
                        product={selectedProduct}
                        onClose={closeProductModal}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

export default ShopPage;