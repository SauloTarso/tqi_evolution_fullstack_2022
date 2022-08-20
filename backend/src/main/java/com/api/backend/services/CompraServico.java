package com.api.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.api.backend.models.CompraModelo;
import com.api.backend.models.RespostaModelo;
import com.api.backend.repositories.CompraRepositorio;

@Service
public class CompraServico {
    
    @Autowired
    private CompraRepositorio cr;

    @Autowired
    private RespostaModelo rm;

    public Iterable<CompraModelo> listar() {
        return cr.findAll();
    }

    public ResponseEntity<?> comprar(CompraModelo cm, String acao) {
        if (cm.getTitulo().equals("")) {
            rm.setMensagem("O TÍTULO do Livro é obrigatório!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (cm.getQuantidade().equals(0)) {
            rm.setMensagem("A quantidade não pode ser R$0.0");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (cm.getPreco().equals(0)) {
            rm.setMensagem("O preço não pode ser R$ 0.0");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<CompraModelo>(cr.save(cm), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<CompraModelo>(cr.save(cm), HttpStatus.OK);
            }
        }
    }
}
