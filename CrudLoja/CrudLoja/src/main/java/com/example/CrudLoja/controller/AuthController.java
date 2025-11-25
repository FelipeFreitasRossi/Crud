package com.example.CrudLoja.controller;

import com.example.CrudLoja.model.Usuario;
import com.example.CrudLoja.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

// Mapeia todas as requisições que começam com /api/auth
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000"})
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;

    // Endpoint: POST /api/auth/register
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Usuario usuario) {
        try {
            Usuario novoUsuario = usuarioService.cadastrarUsuario(usuario);

            // Resposta de sucesso (201 Created)
            return new ResponseEntity<>(
                    new UsuarioResponse(novoUsuario.getId(), novoUsuario.getNome(), novoUsuario.getEmail(), "Cadastro realizado com sucesso!"),
                    HttpStatus.CREATED
            );
        } catch (RuntimeException e) {
            // Se o e-mail já estiver cadastrado
            return new ResponseEntity<>(
                    new ErrorResponse(e.getMessage()),
                    HttpStatus.CONFLICT // 409 Conflict
            );
        }
    }

    // Endpoint: POST /api/auth/login
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody Usuario usuario) {
        Optional<Usuario> usuarioOpt = usuarioService.autenticar(usuario.getEmail(), usuario.getSenha());

        if (usuarioOpt.isPresent()) {
            Usuario usuarioAutenticado = usuarioOpt.get();
            // Resposta de sucesso (200 OK)
            return new ResponseEntity<>(
                    new UsuarioResponse(usuarioAutenticado.getId(), usuarioAutenticado.getNome(), usuarioAutenticado.getEmail(), "Login bem-sucedido!"),
                    HttpStatus.OK
            );
        } else {
            // Falha na autenticação
            return new ResponseEntity<>(
                    new ErrorResponse("Credenciais inválidas. Verifique seu e-mail e senha."),
                    HttpStatus.UNAUTHORIZED // 401 Unauthorized
            );
        }
    }

    // Classes de record para formatar a resposta JSON de forma limpa
    private record UsuarioResponse(Long id, String nome, String email, String message) {}
    private record ErrorResponse(String error) {}
}