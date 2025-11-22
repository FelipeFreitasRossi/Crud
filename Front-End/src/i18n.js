// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Definições de tradução
const resources = {
  pt: {
    translation: {
      // --- CHAVES GERAIS E AUTH ---
      'login': 'Login',
      'register': 'Cadastre-se',
      'menu': 'Menu',
      'menu_close': 'Fechar Menu',
      'shop_name': 'SANTO PRESENTESC',
      'hero_heading': 'SEJA BEM-VINDO!',
      'hero_subheading': 'A Fé Encontra a Moda em Camisas Oversized, Babylooks e Blusas Católicas.',
      'view_collection': 'VER COLEÇÃO COMPLETA',
      'highlight_heading': 'Tecidos Premium e Estampas Inspiradoras',
      'highlight_subtitle': 'Explore a coleção completa que une fé, conforto e estilo.',
      'view_all_products': 'Ver Todos os Produtos',
      'about_heading': 'Nossa Missão: Fé e Moda em Harmonia',
      'about_p1': 'A Santo Presentesc nasceu da paixão por unir a devoção católica com as últimas tendências de moda. Acreditamos que a fé deve ser celebrada em todos os momentos, e nossas peças são desenhadas para serem confortáveis, estilosas e inspiradoras. Cada camiseta, moletom e babylook é produzida com tecidos premium e atenção meticulosa aos detalhes, garantindo durabilidade e maciez.',
      'about_p2': 'Desde 2024, nos dedicamos a criar vestuário que reflete sua espiritualidade com autenticidade. Junte-se a nós e vista sua fé com orgulho!',
      'categories_heading': 'Explore Nossas Linhas',
      'categories_list': 'Oversized | Camisetas | Babylooks | Blusas',
      'navigation': 'Navegação',
      'social_contact': 'Fale Conosco',
      'copyright': 'Todos os direitos reservados.',
      'login_title': 'Acesse Sua Conta',
      'login_welcome': 'Bem-vindo(a) de volta à Santo Presentesc.',
      'email_placeholder': 'Seu melhor e-mail',
      'password_placeholder': 'Sua senha',
      'forgot_password': 'Esqueceu a senha?',
      'no_account_yet': 'Ainda não tem conta?',
      'register_title': 'Crie Sua Conta',
      'register_welcome': 'Junte-se a nós e vista sua fé com estilo!',
      'name_placeholder': 'Nome Completo',
      'confirm_password_placeholder': 'Confirme a Senha',
      'register_btn': 'Cadastrar',
      'already_have_account': 'Já possui uma conta?',

      // --- CHAVES DO SIDENAVAR (NOVAS) ---
      'welcome_user': 'Olá, {{name}}!', // Nova chave
      'nav_highlights': 'Destaques',
      'nav_about': 'Sobre Nós',
      'nav_categories': 'Categorias',
      'nav_help': 'Ajuda',
      'nav_contact': 'Contato',
      'lang_switch': 'Mudar Idioma',
      
      // Nomes dos Idiomas (NOVAS)
      'language': {
          'portuguese': 'Português',
          'english': 'Inglês',
      },

      // --- CHAVES DO SHOP PAGE ---
      'shop_title_catholic': 'Nossa Coleção', // Usada no link da SideNavbar
      'shop_slogan_catholic': 'Vista sua fé com conforto e estilo. Encontre aqui sua peça ideal.',
      'addToCart': 'Adicionar ao Carrinho',
      'no_products_found': 'Nenhum produto encontrado com os filtros selecionados.',
      
      'filters': {
        'title': 'Filtros',
        'product_type': 'Tipo de Produto',
        'devotion': 'Devoção',
      },
      'products_found': '{{count}} Produto encontrado',
      'products_found_plural': '{{count}} Produtos encontrados',
      
      // Categorias
      'Todos': 'Todos',
      'Camisas Oversized': 'Camisas Oversized',
      'Camisetas Normais': 'Camisetas',
      'Babylooks': 'Babylooks',
      'Blusas': 'Blusas',
      'Nossa Senhora': 'Nossa Senhora',
      'Santos Populares': 'Santos Populares',
      'Sagrada Família': 'Sagrada Família',

      // --- CHAVES DO MODAL (QUICK VIEW) --- 
      'quickview': {
          'title': 'Visualização Rápida',
          'description': 'Descrição',
          'size': 'Tamanho',
          'select_size': 'Selecione um tamanho',
          'quantity': 'Quantidade',
          'view_full_details': 'Ver Detalhes Completos',
          'close': 'Fechar',
          'shipping_info': 'Prazo de Envio',
          'stock_status': 'Em estoque: {{stock}} unidades',
      },
      'whatsapp_message': 'Olá! Gostaria de saber mais sobre a *{{productName}}* que custa R$ {{productPrice}}.',
      'modal': {
          'select_size': 'Selecione o Tamanho',
          'buy_via_whatsapp': 'Comprar via WhatsApp',
      },
      'quick_view_description_mock': 'Camiseta de malha premium 100% algodão, fio 30.1 penteado. Estampa em silk-screen de alta durabilidade. Uma peça essencial para expressar sua devoção com conforto e qualidade superior.'

    }
  },
  en: {
    translation: {
      // --- CHAVES GERAIS E AUTH ---
      'login': 'Login',
      'register': 'Register',
      'menu': 'Menu',
      'menu_close': 'Close Menu',
      'shop_name': 'HOLY GIFTS',
      'hero_heading': 'WELCOME!',
      'hero_subheading': 'Faith Meets Fashion in Oversized Shirts, Babylooks, and Catholic Sweaters.',
      'view_collection': 'VIEW FULL COLLECTION',
      'highlight_heading': 'Premium Fabrics and Inspiring Prints',
      'highlight_subtitle': 'Explore the full collection that unites faith, comfort, and style.',
      'view_all_products': 'View All Products',
      'about_heading': 'Our Mission: Faith and Fashion in Harmony',
      'about_p1': 'Santo Presentesc was born from a passion for uniting Catholic devotion with the latest fashion trends. We believe that faith should be celebrated at all times, and our pieces are designed to be comfortable, stylish, and inspiring. Each shirt, sweatshirt, and babylook is produced with premium fabrics and meticulous attention to detail, ensuring durability and softness.',
      'about_p2': 'Since 2024, we have dedicated ourselves to creating apparel that reflects your spirituality with authenticity. Join us and wear your faith with pride!',
      'categories_heading': 'Explore Our Lines',
      'categories_list': 'Oversized | T-Shirts | Babylooks | Sweaters',
      'navigation': 'Navigation',
      'social_contact': 'Contact Us',
      'copyright': 'All rights reserved.',
      'login_title': 'Access Your Account',
      'login_welcome': 'Welcome back to Holy Gifts.',
      'email_placeholder': 'Your best email',
      'password_placeholder': 'Your password',
      'forgot_password': 'Forgot password?',
      'no_account_yet': 'Don\'t have an account yet?',
      'register_title': 'Create Your Account',
      'register_welcome': 'Join us and wear your faith with style!',
      'name_placeholder': 'Full Name',
      'confirm_password_placeholder': 'Confirm Password',
      'register_btn': 'Register',
      'already_have_account': 'Already have an account?',

      // --- CHAVES DO SIDENAVAR (NOVAS) ---
      'welcome_user': 'Hello, {{name}}!', // Nova chave
      'nav_highlights': 'Highlights',
      'nav_about': 'About Us',
      'nav_categories': 'Categories',
      'nav_help': 'Help',
      'nav_contact': 'Contact',
      'lang_switch': 'Change Language',
      
      // Nomes dos Idiomas (NOVAS)
      'language': {
          'portuguese': 'Portuguese',
          'english': 'English',
      },

      // --- CHAVES DO SHOP PAGE ---
      'shop_title_catholic': 'Our Collection', // Usada no link da SideNavbar
      'shop_slogan_catholic': 'Wear your faith with comfort and style. Find your ideal piece here.',
      'addToCart': 'Add to Cart',
      'no_products_found': 'No products found with the selected filters.',
      
      'filters': {
        'title': 'Filters',
        'product_type': 'Product Type',
        'devotion': 'Devotion',
      },
      'products_found': '{{count}} Product found',
      'products_found_plural': '{{count}} Products found',

      // Categorias
      'Todos': 'All',
      'Camisas Oversized': 'Oversized Shirts',
      'Camisetas Normais': 'T-Shirts',
      'Babylooks': 'Babylooks',
      'Blusas': 'Sweaters',
      'Nossa Senhora': 'Our Lady',
      'Santos Populares': 'Popular Saints',
      'Sagrada Família': 'Holy Family',
      
      // --- CHAVES DO MODAL (QUICK VIEW) ---
      'quickview': {
          'title': 'Quick View',
          'description': 'Description',
          'size': 'Size',
          'select_size': 'Select a size',
          'quantity': 'Quantity',
          'view_full_details': 'View Full Details',
          'close': 'Close',
          'shipping_info': 'Shipping Time',
          'stock_status': 'In stock: {{stock}} units',
      },
      'whatsapp_message': 'Hello! I would like to know more about the *{{productName}}* which costs R$ {{productPrice}}.',
      'modal': {
          'select_size': 'Select Size',
          'buy_via_whatsapp': 'Buy via WhatsApp',
      },
      'quick_view_description_mock': 'Premium 100% combed cotton t-shirt, 30.1 thread count. High-durability silk-screen print. An essential piece to express your devotion with superior comfort and quality.'
    }
  }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    pluralSeparator: '_',
    interpolation: {
        escapeValue: false,
    },
    fallbackLng: 'pt',
    debug: false,
  });

export default i18n;