// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Definições de tradução
const resources = {
  pt: {
    translation: {
      // HEADER
      'login': 'Login',
      'register': 'Cadastre-se',
      'menu': 'Menu',
      'menu_close': 'Fechar Menu',

      // HERO SECTION
      'shop_name': 'SANTO PRESENTESC',
      'hero_heading': 'SEJA BEM-VINDO!',
      'hero_subheading': 'A Fé Encontra a Moda em Camisas Oversized, Babylooks e Blusas Católicas.',
      'view_collection': 'VER COLEÇÃO COMPLETA',

      // HIGHLIGHT SECTION (Carrossel)
      'highlight_heading': 'Tecidos Premium e Estampas Inspiradoras',
      'highlight_subtitle': 'Explore a coleção completa que une fé, conforto e estilo.',
      'view_all_products': 'Ver Todos os Produtos',

      // ABOUT SECTION
      'about_heading': 'Nossa Missão: Fé e Moda em Harmonia',
      'about_p1': 'A Santo Presentesc nasceu da paixão por unir a devoção católica com as últimas tendências de moda. Acreditamos que a fé deve ser celebrada em todos os momentos, e nossas peças são desenhadas para serem confortáveis, estilosas e inspiradoras. Cada camiseta, moletom e babylook é produzida com tecidos premium e atenção meticulosa aos detalhes, garantindo durabilidade e maciez.',
      'about_p2': 'Desde 2024, nos dedicamos a criar vestuário que reflete sua espiritualidade com autenticidade. Junte-se a nós e vista sua fé com orgulho!',
      
      // CATEGORIES
      'categories_heading': 'Explore Nossas Linhas',
      'categories_list': 'Oversized | Camisetas | Babylooks | Blusas',

      // FOOTER
      'navigation': 'Navegação',
      'social_contact': 'Fale Conosco',
      'copyright': 'Todos os direitos reservados.',

      // SIDENAV
      'nav_highlights': 'Destaques',
      'nav_about': 'Sobre Nós',
      'nav_categories': 'Categorias',
      'nav_help': 'Ajuda',
      'nav_contact': 'Contato',
      'lang_switch': 'Mudar Idioma',

      // LOGIN PAGE
      'login_title': 'Acesse Sua Conta',
      'login_welcome': 'Bem-vindo(a) de volta à Santo Presentesc.',
      'email_placeholder': 'Seu melhor e-mail',
      'password_placeholder': 'Sua senha',
      'forgot_password': 'Esqueceu a senha?',
      'no_account_yet': 'Ainda não tem conta?',

      // CADASTRO PAGE
      'register_title': 'Crie Sua Conta',
      'register_welcome': 'Junte-se a nós e vista sua fé com estilo!',
      'name_placeholder': 'Nome Completo',
      'confirm_password_placeholder': 'Confirme a Senha',
      'register_btn': 'Cadastrar',
      'already_have_account': 'Já possui uma conta?',
    }
  },
  en: {
    translation: {
      // HEADER
      'login': 'Login',
      'register': 'Register',
      'menu': 'Menu',
      'menu_close': 'Close Menu',

      // HERO SECTION
      'shop_name': 'HOLY GIFTS',
      'hero_heading': 'WELCOME!',
      'hero_subheading': 'Faith Meets Fashion in Oversized Shirts, Babylooks, and Catholic Sweaters.',
      'view_collection': 'VIEW FULL COLLECTION',

      // HIGHLIGHT SECTION (Carrossel)
      'highlight_heading': 'Premium Fabrics and Inspiring Prints',
      'highlight_subtitle': 'Explore the full collection that unites faith, comfort, and style.',
      'view_all_products': 'View All Products',

      // ABOUT SECTION
      'about_heading': 'Our Mission: Faith and Fashion in Harmony',
      'about_p1': 'Santo Presentesc was born from a passion for uniting Catholic devotion with the latest fashion trends. We believe that faith should be celebrated at all times, and our pieces are designed to be comfortable, stylish, and inspiring. Each shirt, sweatshirt, and babylook is produced with premium fabrics and meticulous attention to detail, ensuring durability and softness.',
      'about_p2': 'Since 2024, we have dedicated ourselves to creating apparel that reflects your spirituality with authenticity. Join us and wear your faith with pride!',

      // CATEGORIES
      'categories_heading': 'Explore Our Lines',
      'categories_list': 'Oversized | T-Shirts | Babylooks | Sweaters',

      // FOOTER
      'navigation': 'Navigation',
      'social_contact': 'Contact Us',
      'copyright': 'All rights reserved.',

      // SIDENAV
      'nav_highlights': 'Highlights',
      'nav_about': 'About Us',
      'nav_categories': 'Categories',
      'nav_help': 'Help',
      'nav_contact': 'Contact',
      'lang_switch': 'Change Language',

      // LOGIN PAGE
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
    }
  }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'pt',
    debug: false,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;