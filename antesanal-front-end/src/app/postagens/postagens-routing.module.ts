import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostagensFormComponent} from './postagens-form/postagens-form.component'
import { PostagensListaComponent } from './postagens-lista/postagens-lista.component';


const routes: Routes = [
  {path :  'postagens-form', component : PostagensFormComponent },
  {path :  'postagens-form/:id', component : PostagensFormComponent },
  {path :  'postagens', component : PostagensListaComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostagensRoutingModule { }
