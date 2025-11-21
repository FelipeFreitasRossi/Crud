// Dentro de src/pages/ShopPage.jsx

import React from 'react';
import Header from '../components/Header'; // O caminho corrigido
import '../App.css'; 

const mockProducts = [
    { id: 1, name: "Vela Sagrada", price: "R$ 35,00", imageUrl: "https://via.placeholder.com/400x400/000000/FFD700?text=Vela+Sagrada" },
    { id: 2, name: "Terço de Madeira", price: "R$ 69,90", imageUrl: "https://via.placeholder.com/400x400/0a0a10/FFD700?text=Terco+de+Madeira" },
    { id: 3, name: "Camiseta com Estampa", price: "R$ 89,90", imageUrl: "https://via.placeholder.com/400x400/1a1a2e/FFD700?text=Camiseta+Padroeira" },
    { id: 4, name: "Ícone Bizantino", price: "R$ 149,00", imageUrl: "https://via.placeholder.com/400x400/000000/FFD700?text=Icone+Bizantino" },
    { id: 5, name: "Crucifixo de Mesa", price: "R$ 95,00", imageUrl: "https://via.placeholder.com/400x400/0a0a10/FFD700?text=Crucifixo+Mesa" },
    { id: 6, name: "Livro de Orações", price: "R$ 45,00", imageUrl: "https://via.placeholder.com/400x400/1a1a2e/FFD700?text=Livro+Oracoes" },
    { id: 7, name: "Escapulário em Aço", price: "R$ 55,00", imageUrl: "https://via.placeholder.com/400x400/000000/FFD700?text=Escapulario+Aco" },
    { id: 8, name: "Água Benta", price: "R$ 12,50", imageUrl: "https://via.placeholder.com/400x400/0a0a10/FFD700?text=Agua+Benta" },
    { id: 9, name: "Altar Doméstico", price: "R$ 299,00", imageUrl: "https://via.placeholder.com/400x400/1a1a2e/FFD700?text=Altar+Domestico" },
];

const ProductCard = ({ product }) => (
    <div className="product-card" onClick={() => console.log(`Produto selecionado: ${product.name}`)}>
        <div className="card-image-container">
            <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="card-image"
            />
        </div>
        <div className="card-details">
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="btn-add-to-cart">Adicionar ao Carrinho</button>
        </div>
    </div>
);


function ShopPage({ onMenuToggle, isMenuOpen }) {
    
    return (
        <div className="shop-page-container">
            {/* O Header foi mantido, pois ele deve ser exclusivo por página ou componente de layout */}
            <Header 
                onMenuToggle={onMenuToggle} 
                isMenuOpen={isMenuOpen} 
                isAuthenticated={true} 
            />

            {/* Banner de Boas-Vindas */}
            <section className="shop-hero-section">
                <div className="shop-hero-content">
                    <h1>Explore a Coleção Completa</h1> 
                    <p>Artigos religiosos exclusivos, feitos com devoção e qualidade premium.</p>
                </div>
            </section>

            {/* Seção Principal de Produtos */}
            <section className="products-listing-section">
                <h2>Nossos Produtos Católicos</h2>
                <p className="listing-subtitle">Uma seleção especial para fortalecer sua fé.</p>
                
                {/* Grade de Produtos */}
                <div className="products-grid">
                    {mockProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* ❌ Footer Removido daqui */}
        </div>
    );
}

export default ShopPage;