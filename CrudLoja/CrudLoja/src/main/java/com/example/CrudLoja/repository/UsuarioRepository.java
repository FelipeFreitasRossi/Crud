// src/main/java/.../repository/UsuarioRepository.java

package com.example.CrudLoja.repository;

import com.example.CrudLoja.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Método customizado para buscar o usuário pelo email, essencial para o login.
    Optional<Usuario> findByEmail(String email);
}