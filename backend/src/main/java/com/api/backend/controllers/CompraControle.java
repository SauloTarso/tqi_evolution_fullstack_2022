package com.api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.backend.models.ProdutoModelo;
import com.api.backend.models.RespostaModelo;
import com.api.backend.services.ProdutoServico;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CompraControle {
    
    @Autowired
    private ProdutoServico produtoServico;

    @DeleteMapping("/compras/remover/{id}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable long id){
        return produtoServico.remover(id);
    }

    @PutMapping("/compras/alterar")
    public ResponseEntity<?> alterar(@RequestBody ProdutoModelo produtoModelo){
        return produtoServico.cadastrarAlterar(produtoModelo, "alterar");
    }

    @PostMapping("/compras/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ProdutoModelo produtoModelo){
        return produtoServico.cadastrarAlterar(produtoModelo, "cadastrar");
    }

    @GetMapping("/compras/listar")
    public Iterable<ProdutoModelo> listar(){
        return produtoServico.listar();
    }
    
    @GetMapping("/compras")
    public String rota(){
        return "PAGINA DE COMPRA DE LIVROS";
    }
}
