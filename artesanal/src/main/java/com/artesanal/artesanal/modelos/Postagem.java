package com.artesanal.artesanal.modelos;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Postagem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer postagemId;
    private String texto;
    private String urlFoto;
    @JsonFormat(pattern = "dd/MM/yyyy")
    @Column(updatable = false)
    private LocalDate dataCadastro;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataAtualizacao;

    @PrePersist
    public void salvaDataCadastro(){
        setDataCadastro(LocalDate.now());
    }

    @PreUpdate
    public void salvaDataAtualizacao(){
        setDataAtualizacao(LocalDate.now());
    }

}
