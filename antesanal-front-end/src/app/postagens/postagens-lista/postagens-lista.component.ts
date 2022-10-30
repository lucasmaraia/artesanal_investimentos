import { Component, OnInit } from '@angular/core';
import { Postagem } from '../postagem';
import { PostagensService } from '../postagens.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-postagens-lista',
  templateUrl: './postagens-lista.component.html',
  styleUrls: ['./postagens-lista.component.css']
})
export class PostagensListaComponent implements OnInit {

  postagens : Postagem[] = [];
  postagemSelecionada : Postagem;
  mensagemSucesso : string;
  mensagemErro : string;

  constructor(
    private postagemService : PostagensService, 
    private router : Router 
    ) { }

  ngOnInit(): void {
    this.postagemService.getPostagens().subscribe(resposta => this.postagens = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/postagens-form'])
  }

  preparaDelecao(postagem : Postagem){
    this.postagemSelecionada = postagem;
  }

  deletarPostagemPorID(){
    this.postagemService.deletarPorID(this.postagemSelecionada).subscribe(Response => {this.mensagemSucesso = 'Postagem Deletada com Sucesso',this.ngOnInit()})
  }

}
