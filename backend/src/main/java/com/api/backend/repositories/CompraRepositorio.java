package com.api.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.api.backend.models.CompraModelo;

@Repository
public interface CompraRepositorio extends CrudRepository<CompraModelo, Long>{
    
}
