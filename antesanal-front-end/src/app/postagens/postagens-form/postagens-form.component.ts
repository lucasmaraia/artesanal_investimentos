import { Component, OnInit } from '@angular/core';
import {Postagem} from '../postagem'
import {PostagensService} from '../../postagens/postagens.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-postagens-form',
  templateUrl: './postagens-form.component.html',
  styleUrls: ['./postagens-form.component.css']
})
export class PostagensFormComponent implements OnInit {

  postagem : Postagem;
  sucesso : boolean = false;
  id : number;
  mensagemSucesso : string;

  constructor(
    private postagemService :PostagensService, 
    private router : Router,
    private activatedRoute : ActivatedRoute ) {
      this.postagem = new Postagem();
   }

  ngOnInit(): void {
    let params = this.activatedRoute.params
      .subscribe( params => {
        
        if (params && params['id'] ){
          this.postagemService.getPostagensPorID(params.id)
        .subscribe(
          response => this.postagem = response,
          errorResponse => this.postagem = new Postagem
        )}
      })

  }

  onSubmit(){

    if(this.id){
      this.postagemService.atualizar(this.postagem)
          .subscribe(Response =>{
            this.sucesso =true;
          })

    }else{
        this.postagemService.salvar(this.postagem)
      .subscribe(response =>{
        console.log(response);
        this.postagem = response;
        this.sucesso = true;
    })

    }

    
  }

  voltarParaPostagens(){
    this.router.navigate(['/postagens'])
  }

}
