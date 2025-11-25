package com.example.CrudLoja.controller;

import com.example.CrudLoja.model.Camisa;
import com.example.CrudLoja.service.CamisaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Collections;

// @CrossOrigin não é mais estritamente necessário se você usar o SecurityConfig,
// mas se for usar, ajuste para permitir seu Front-End.
// @CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/camisas")
public class CamisaController {

    @Autowired
    private CamisaService camisaService;

    // Endpoint: http://localhost:8080/api/camisas/destaques
    @GetMapping("/destaques")
    public ResponseEntity<List<Camisa>> listarDestaques() {
        try {
            List<Camisa> camisas = camisaService.buscarTodosOsProdutos();

            if (camisas.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok(camisas);

        } catch (Exception e) {
            System.err.println("Erro ao buscar camisas: " + e.getMessage());
            return ResponseEntity.internalServerError().body(Collections.emptyList());
        }
    }
}