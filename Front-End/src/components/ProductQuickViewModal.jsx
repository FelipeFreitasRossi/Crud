// src/components/ProductQuickViewModal.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Ícone do WhatsApp (Exemplo)
const WhatsAppIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0001 0C5.37305 0 0.000119209 5.37305 0.000119209 12.0001C0.000119209 14.1802 0.584313 16.2081 1.61108 17.9351L0.000119209 23.9997L6.25704 22.3999C7.94273 23.4076 9.90799 24.0001 12.0001 24.0001C18.6272 24.0001 24.0001 18.6272 24.0001 12.0001C24.0001 5.37305 18.6272 0 12.0001 0ZM18.0002 14.9998C17.6752 15.3998 17.2002 15.6001 16.6252 15.6001C16.1502 15.6001 15.7502 15.4001 15.4252 15.1501C15.1002 14.8998 13.9752 14.4001 13.8002 14.1751C13.6252 13.9501 13.4502 13.6001 13.2752 13.3501C12.8752 12.8001 12.0002 12.3501 11.0002 12.3501C9.70016 12.3501 8.87516 13.6001 8.87516 13.6001C8.87516 13.6001 8.42516 14.8001 7.97516 15.2001C7.80016 15.3501 7.50016 15.4001 7.37516 15.4001C7.25016 15.4001 7.00016 15.3501 6.75016 15.2751C6.50016 15.2001 6.25016 15.0001 6.25016 14.6501C6.25016 14.4001 6.32516 13.4001 6.32516 12.0001C6.32516 10.6001 6.07516 9.60015 6.07516 9.35015C6.07516 9.10015 6.20016 9.02515 6.32516 8.95015C6.45016 8.87515 7.15016 8.45015 7.40016 8.27515C7.52516 8.20015 7.65016 8.05015 7.80016 7.90015C8.02516 7.72515 8.12516 7.60015 8.35016 7.60015C8.57516 7.60015 8.80016 7.60015 9.02516 7.60015C9.25016 7.60015 9.57516 7.67515 9.77516 8.10015C10.0002 8.52515 10.7502 10.0001 10.7502 10.0001C10.7502 10.0001 10.9752 10.4501 11.0002 10.7501C11.0252 11.0501 11.0002 11.2251 10.9502 11.3501C10.9002 11.4751 10.7752 11.6001 10.6502 11.7251C10.5252 11.8501 10.3752 12.0251 10.4752 12.2001C10.6502 12.5001 11.2002 13.2501 11.8002 13.8001C12.4002 14.3501 12.8752 14.6001 13.1252 14.7751C13.4502 14.9501 13.6252 15.1001 13.8002 15.1501C13.9752 15.2001 14.4752 15.1001 14.8752 14.9501C15.2752 14.8001 16.2752 14.2501 16.8252 13.9751C17.3752 13.7001 17.7002 13.6001 17.8002 13.6001C18.0252 13.6001 18.2752 13.7501 18.2752 14.0751C18.2752 14.4001 18.0002 14.7501 18.0002 14.9998Z" />
    </svg>
);


const ProductQuickViewModal = ({ product, onClose }) => {
    const { t } = useTranslation();
    const [mainImage, setMainImage] = useState(product.imageUrl);

    // Variantes para animações do Framer Motion
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants = {
        hidden: { y: "100vh", opacity: 0 },
        visible: { 
            y: "0", 
            opacity: 1,
            transition: { delay: 0.1, type: "spring", stiffness: 100, damping: 20 }
        },
        exit: { y: "100vh", opacity: 0 }
    };

    // Gera a URL do WhatsApp com a mensagem do produto
    const whatsappLink = `https://wa.me/559999999999?text=${encodeURIComponent(
        t('whatsapp_message', { 
            name: product.name, 
            price: product.price.toFixed(2).replace('.', ',') 
        })
    )}`;

    return (
        // Overlay (Fundo)
        <motion.div 
            className="modal-overlay"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose} // Fecha o modal ao clicar fora
        >
            {/* Conteúdo do Modal */}
            <motion.div 
                className="quick-view-modal-content"
                variants={modalVariants}
                onClick={e => e.stopPropagation()} // Impede que o clique no modal feche-o
            >
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                
                <div className="modal-grid">
                    
                    {/* Imagem e Galeria */}
                    <div className="modal-image-gallery">
                        <div className="main-image-container">
                             {/* Usa a imagem principal selecionada */}
                             <img 
                                src={`/assets/images/${mainImage}`} 
                                alt={product.name} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                            />
                        </div>
                        
                        {/* Thumbnails da galeria */}
                        <div className="thumbnail-container">
                            {product.images && product.images.map((img, index) => (
                                <img 
                                    key={index}
                                    src={`/assets/images/${img}`} 
                                    alt={`Miniatura ${index + 1}`} 
                                    className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                                    onClick={() => setMainImage(img)}
                                    style={{ objectFit: 'cover' }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Detalhes do Produto */}
                    <div className="modal-details">
                        <p className="modal-product-category">{t(product.category)}</p>
                        <h2 className="modal-product-name">{product.name}</h2>
                        <h1 className="modal-product-price">R$ {product.price.toFixed(2).replace('.', ',')}</h1>
                        
                        <p className="modal-product-description">
                            {product.description}
                        </p>
                        
                        {/* Opções (Exemplo: Tamanho/Material) */}
                        <div className="modal-options">
                            {product.details.material && (
                                <p><strong>{t('details.material')}:</strong> {product.details.material}</p>
                            )}
                            {product.details.dimensoes && (
                                <p><strong>{t('details.dimensions')}:</strong> {product.details.dimensoes}</p>
                            )}
                        </div>

                        {/* Botão de Compra/Contato */}
                        <a 
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp-buy"
                        >
                            <WhatsAppIcon className="whatsapp-icon" />
                            {t('buy_via_whatsapp')}
                        </a>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
};

export default ProductQuickViewModal;