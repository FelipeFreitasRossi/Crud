package com.example.CrudLoja.repository;

import com.example.CrudLoja.model.Camisa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CamisaRepository extends JpaRepository<Camisa, Long> {
    // Aqui você pode adicionar métodos de busca específicos,
    // mas o JpaRepository já fornece os básicos (findAll, findById, save, delete)
}