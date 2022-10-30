import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { PostagensModule } from './postagens/postagens.module';
import { PostagensService } from './postagens/postagens.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    PostagensModule,
    HttpClientModule
  ],
  providers: [PostagensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
