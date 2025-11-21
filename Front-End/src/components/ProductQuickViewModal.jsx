// src/components/ProductQuickViewModal.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const ProductQuickViewModal = ({ product, onClose }) => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(product ? product.imageUrl : null); // Simula a seleção de imagem

    // Garante que o modal só seja renderizado se houver um produto
    if (!product) return null;
    
    // Simulação de variações de imagens (para o thumbnail)
    const mockImages = [
        product.imageUrl,
        'mock_image_b.jpg', // Variação de cor ou detalhe
        'mock_image_c.jpg'  // Outro ângulo
    ];

    // Função para gerar o link do WhatsApp
    const generateWhatsAppLink = (productName, productPrice) => {
        const phoneNumber = '5511999999999'; // <-- Substitua pelo seu número de WhatsApp
        const message = t('whatsapp_message', { productName, productPrice: productPrice.toFixed(2).replace('.', ',') });
        return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    };

    const whatsappLink = generateWhatsAppLink(product.name, product.price);

    return (
        <AnimatePresence>
            {/* Overlay */}
            <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose} // Fecha ao clicar no overlay
            >
                {/* Modal Content */}
                <motion.div
                    className="quick-view-modal-content"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                    onClick={(e) => e.stopPropagation()} // Impede que o clique interno feche
                >
                    <button className="modal-close-btn" onClick={onClose}>
                        <FaTimes />
                    </button>

                    <div className="modal-grid">
                        
                        {/* 1. Imagens e Miniaturas */}
                        <div className="modal-image-gallery">
                            {/* Imagem Principal */}
                            <div className="main-image-container">
                                {/* 

[Image of {product.name}]
 - Imagem Principal */}
                            </div>
                            
                            {/* Miniaturas (Thumbnails) */}
                            <div className="thumbnail-container">
                                {mockImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        {/*  */}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Detalhes do Produto */}
                        <div className="modal-details">
                            <h2 className="modal-product-name">{product.name}</h2>
                            <p className="modal-product-category">{t(product.category)}</p>
                            
                            {/* Valor do Produto */}
                            <p className="modal-product-price">
                                R$ {product.price.toFixed(2).replace('.', ',')}
                            </p>

                            <p className="modal-product-description">
                                {t('quick_view_description_mock')}
                            </p>

                            {/* Área de Seleção de Tamanho/Cor (Mock) */}
                            <div className="modal-options">
                                <label>{t('modal.select_size')}:</label>
                                <select className="size-selector">
                                    <option value="p">P</option>
                                    <option value="m">M</option>
                                    <option value="g">G</option>
                                </select>
                            </div>

                            <a 
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp-buy"
                            >
                                <FaWhatsapp className="whatsapp-icon" />
                                {t('modal.buy_via_whatsapp')}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductQuickViewModal;