import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostagensRoutingModule } from './postagens-routing.module';
import { PostagensFormComponent } from './postagens-form/postagens-form.component';
import {FormsModule} from '@angular/forms';
import { PostagensListaComponent } from './postagens-lista/postagens-lista.component'


@NgModule({
  declarations: [PostagensFormComponent, PostagensListaComponent],
  imports: [
    CommonModule,
    PostagensRoutingModule,
    FormsModule
  ],
  exports :[
    PostagensFormComponent,
    PostagensListaComponent
  ]
})
export class PostagensModule { }
