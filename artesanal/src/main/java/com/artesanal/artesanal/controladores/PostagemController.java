package com.artesanal.artesanal.controladores;

import com.artesanal.artesanal.modelos.Postagem;
import com.artesanal.artesanal.repositorios.PostagemRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/postagens")
@CrossOrigin("http://localhost:4200")
public class PostagemController {

    @Autowired
    private PostagemRepositoy postagemRepositoy;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Postagem salvar(@RequestBody Postagem postagem){
        return postagemRepositoy.save(postagem);
    }

    @GetMapping("{id}")
    public Postagem procurarPorID(@PathVariable Integer id){
        return postagemRepositoy.findById(id).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarPostagem(@PathVariable Integer id) {
         postagemRepositoy.findById(id).map(postagem -> {
             postagemRepositoy.delete(postagem);return Void.TYPE;
         }
         ).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody Postagem postagemAtualizada){
        postagemRepositoy.findById(id).map(postagem -> {
                    postagemAtualizada.setPostagemId(postagem.getPostagemId());
                  return  postagemRepositoy.save(postagemAtualizada);
                }
        ).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

    }

    @GetMapping
    public List<Postagem> listaPostagens(){
      return  postagemRepositoy.findAll();

    }





}
