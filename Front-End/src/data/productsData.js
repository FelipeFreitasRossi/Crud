import oversizedSaoMiguelFImage from '../assets/oversizedSaoMiguelF.jpg'; // ID 1
import oversizedSaoMiguelCImage from '../assets/oversizedSaoMiguelC.jpg';

// Blusa Branca Coroa
import blusaBrancaCoroaCImage from '../assets/blusaBrancaCoroaC.jpg';
import blusaBrancaCoroaDetalheImage from '../assets/blusaBrancaCoroaDetalhe.jpg';
import blusaBrancaCoroaFImage from '../assets/blusaBrancaCoroaF.jpg';

// Blusa Preta Coroa
import blusaPretaCoroaImage from '../assets/blusaPretaCoroa.jpg';
import blusaPretaCoroaCImage from '../assets/blusaPretaCoroaC.jpg';
import blusaPretaDetalheImage from '../assets/blusaPretaDetalhe.jpg';

// Oversized Maria Branca
import oversizedMariaBrancaCImage from '../assets/oversizedMariaBrancaC.jpg';
import oversizedMariaBrancaFImage from '../assets/oversizedMariaBrancaF.jpg';

// Oversized Maria
import oversizedMariaCImage from '../assets/oversizedMariaC.jpg';
import oversizedMariaFImage from '../assets/oversizedMariaF.jpg';

// Oversized São Bento (Variantes)
import oversizedSaoBento2FImage from '../assets/oversizedSaoBento2F.jpg';
import oversizedSaoBentoBrancaImage from '../assets/oversizedSaoBentoBranca.jpg';
import oversizedSaoBentoBrancaCImage from '../assets/oversizedSaoBentoBrancaC.jpg';
import oversizedSaoBentoCImage from '../assets/oversizedSaoBentoC.jpg';
import oversizedSaoBentoFImage from '../assets/oversizedSaoBentoF.jpg';


export const productsData = [
    // ---------------------------------------------------
    // 1. Oversized São Miguel
    // Preço: 109.99
    // ---------------------------------------------------
    {
        id: 1,
        name: "Oversized São Miguel",
        category: "oversized",
        price: 109.99, // Aplicado preço de Oversized
        imageUrl: oversizedSaoMiguelFImage, // Imagem principal (Frente)
        images: [
            oversizedSaoMiguelFImage,
            oversizedSaoMiguelCImage,
        ],
        description: "Camisa Oversized 100% algodão com estampa de São Miguel Arcanjo. Peça de fé e estilo.",
        details: {
            material: "100% Algodão Premium",
            dimensoes: "Disponível: P, M, G, GG",
            fotos: "F: Frente, C: Costas",
        }
    },
    
    {
        id: 2,
        name: "Blusa Branca Coroa",
        category: "moletom",
        price: 229.99, // Aplicado preço de Blusa
        imageUrl: blusaBrancaCoroaFImage, // Imagem principal (Frente)
        images: [
            blusaBrancaCoroaFImage,
            blusaBrancaCoroaCImage,
            blusaBrancaCoroaDetalheImage,
        ],
        description: "Blusa feminina de alta costura com detalhe de coroa. Elegância e devoção em uma única peça.",
        details: {
            material: "Tecido Premium Exclusivo",
            dimensoes: "Disponível: P, M, G",
            fotos: "F: Frente, C: Costas, Detalhe: Detalhe da Coroa",
        }
    },

    {
        id: 3,
        name: "Blusa Preta Coroa",
        category: "moletom",
        price: 229.99, // Aplicado preço de Blusa
        imageUrl: blusaPretaCoroaImage, // Imagem principal (Assumindo que é a Frente/Geral)
        images: [
            blusaPretaCoroaImage,
            blusaPretaCoroaCImage,
            blusaPretaDetalheImage,
        ],
        description: "Versão preta da nossa blusa Coroa. Sofisticação para expressar sua fé em qualquer ocasião.",
        details: {
            material: "Tecido Premium Exclusivo",
            dimensoes: "Disponível: P, M, G",
            fotos: "C: Costas, Detalhe: Detalhe do Produto",
        }
    },

    {
        id: 4,
        name: "Oversized Maria Branca",
        category: "oversized",
        price: 109.99, // Aplicado preço de Oversized
        imageUrl: oversizedMariaBrancaFImage, // Imagem principal (Frente)
        images: [
            oversizedMariaBrancaFImage,
            oversizedMariaBrancaCImage,
        ],
        description: "Oversized branca com estampa da Virgem Maria. Conforto e inspiração para todos os dias.",
        details: {
            material: "100% Algodão Premium",
            dimensoes: "Disponível: P, M, G, GG",
            fotos: "F: Frente, C: Costas",
        }
    },

    {
        id: 5,
        name: "Oversized Maria (Escura)",
        category: "oversized",
        price: 109.99, // Aplicado preço de Oversized
        imageUrl: oversizedMariaFImage, // Imagem principal (Frente)
        images: [
            oversizedMariaFImage,
            oversizedMariaCImage,
        ],
        description: "Oversized na cor escura com arte minimalista de Maria. Tendência e devoção.",
        details: {
            material: "100% Algodão Premium",
            dimensoes: "Disponível: P, M, G, GG",
            fotos: "F: Frente, C: Costas",
        }
    },
    
    {
        id: 6,
        name: "Oversized São Bento",
        category: "oversized",
        price: 109.99, // Aplicado preço de Oversized
        imageUrl: oversizedSaoBentoFImage, // Imagem principal (Frente)
        images: [
            oversizedSaoBentoFImage,
            oversizedSaoBentoCImage,
            oversizedSaoBento2FImage,
        ],
        description: "Oversized com a medalha de São Bento. Peça de proteção e estilo único.",
        details: {
            material: "100% Algodão Premium",
            dimensoes: "Disponível: P, M, G, GG",
            fotos: "F: Frente, C: Costas, 2F: Outro ângulo da Frente",
        }
    },

    {
        id: 7,
        name: "Oversized São Bento Branca",
        category: "oversized",
        price: 109.99, // Aplicado preço de Oversized
        imageUrl: oversizedSaoBentoBrancaImage, // Imagem principal (Geral/Frente)
        images: [
            oversizedSaoBentoBrancaImage,
            oversizedSaoBentoBrancaCImage,
        ],
        description: "Versão branca do nosso sucesso São Bento. Perfeita para um look clean e cheio de fé.",
        details: {
            material: "100% Algodão Premium",
            dimensoes: "Disponível: P, M, G, GG",
            fotos: "C: Costas",
        }
    }
];

export default productsData;