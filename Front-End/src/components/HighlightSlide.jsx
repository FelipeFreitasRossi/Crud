// src/components/HighlightSlide.jsx

import React from 'react';
import { motion } from 'framer-motion';

function HighlightSlide({ title, imageUrl }) {
  return (
    <div className="carousel-slide">
      <div className="slide-content">
        <div className="slide-image-container">
          {/* Imagem do Produto/Slide */}
          <img src={imageUrl} alt={title} className="slide-image" />
        </div>
        
        <div className="slide-details">
          {/* Título do Produto (abaixo da imagem) */}
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default HighlightSlide;