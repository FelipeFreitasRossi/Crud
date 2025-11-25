package com.example.CrudLoja;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// 🟢 CORREÇÃO: A anotação 'exclude' foi removida para que o Spring Security seja ativado
// e a nossa configuração (SecurityConfig) possa funcionar corretamente.
@SpringBootApplication
public class CrudLojaApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudLojaApplication.class, args);
	}
}