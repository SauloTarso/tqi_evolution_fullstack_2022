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
    private ProdutoServico ps;

    @DeleteMapping("/compras/remover/{id}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable long id){
        return ps.remover(id);
    }

    @PutMapping("/compras/alterar")
    public ResponseEntity<?> alterar(@RequestBody ProdutoModelo pm){
        return ps.cadastrarAlterar(pm, "alterar");
    }

    @PostMapping("/compras/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ProdutoModelo pm){
        return ps.cadastrarAlterar(pm, "cadastrar");
    }

    @GetMapping("/compras/listar")
    public Iterable<ProdutoModelo> listar(){
        return ps.listar();
    }
    
    @GetMapping("/compras")
    public String rota(){
        return "PAGINA DE COMPRA DE LIVROS";
    }
}