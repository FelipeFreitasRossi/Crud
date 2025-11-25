package com.example.CrudLoja.service;

import com.example.CrudLoja.model.Camisa;
import com.example.CrudLoja.repository.CamisaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service // Indica ao Spring que esta é a camada de Serviço/Lógica de Negócios
public class CamisaService {

    // Injeção de Dependência do Repositório (Para acesso ao DB)
    @Autowired
    private CamisaRepository camisaRepository;

    /**
     * Busca todos os produtos para serem exibidos na tela de Destaques.
     * Chama o método findAll() herdado do JpaRepository.
     * @return Uma lista de objetos Camisa.
     */
    public List<Camisa> buscarTodosOsProdutos() {
        // Retorna todos os registros da tabela 'camisas'
        return camisaRepository.findAll();
    }

    // --- Métodos de CRUD Adicionais (Exemplo) ---

    /**
     * Busca um produto por ID.
     * @param id O ID da camisa a ser buscada.
     * @return Um Optional que pode conter a Camisa.
     */
    public Optional<Camisa> buscarPorId(Long id) {
        return camisaRepository.findById(id);
    }

    /**
     * Salva ou atualiza um produto.
     * @param camisa O objeto Camisa a ser salvo.
     * @return O objeto Camisa salvo/atualizado.
     */
    public Camisa salvarCamisa(Camisa camisa) {
        // A lógica de negócios, validação ou manipulação de estoque ocorreria aqui.
        return camisaRepository.save(camisa);
    }

    /**
     * Deleta um produto por ID.
     * @param id O ID da camisa a ser deletada.
     */
    public void deletarCamisa(Long id) {
        camisaRepository.deleteById(id);
    }
}