package com.example.CrudLoja.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                // 1. Desabilita CSRF para APIs REST
                .csrf(csrf -> csrf.disable())

                // 2. Aplica a configuração de CORS
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))

                // 3. Configura a autorização de requisições
                .authorizeHttpRequests(auth -> auth

                        // 🟢 SOLUÇÃO 403: LIBERA ACESSO PÚBLICO À ROTA DE PRODUTOS
                        // Permite que o Destaques.jsx carregue os produtos sem login.
                        .requestMatchers("/api/camisas/destaques").permitAll()

                        // Libera acesso público aos endpoints de AUTH (Login/Registro)
                        .requestMatchers("/api/auth/register", "/api/auth/login").permitAll()

                        // Exige autenticação para qualquer outra rota
                        .anyRequest().authenticated()
                );

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // 🚨 CONFIGURAÇÃO DE CORS
        // ESTA LISTA DEVERÁ INCLUIR O DOMÍNIO PÚBLICO DO SEU VERCEL APÓS O DEPLOY DO FRONT-END!
        configuration.setAllowedOrigins(List.of(
                "http://localhost:3000",
                "http://127.0.0.1:3000",
                "http://localhost:5173",
                "http://127.0.0.1:5173",
                "https://SEU_DOMINIO_VERCEL.vercel.app" // 👈 Adicione o domínio público do Vercel aqui
        ));

        // Métodos e Headers permitidos
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}