package com.example.CrudLoja.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "camisas") // Confirme o nome da sua tabela
@Data
@NoArgsConstructor
public class Camisa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String tipo;
    private String tamanho;
    private Double preco;
    private Integer estoque;
    private String urlImagem; // Propriedade que o Front-End espera para a URL

}