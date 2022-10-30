package com.artesanal.artesanal.repositorios;

import com.artesanal.artesanal.modelos.Postagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostagemRepositoy extends JpaRepository<Postagem,Integer> {
}
