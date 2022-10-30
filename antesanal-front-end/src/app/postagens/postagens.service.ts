import { Injectable } from '@angular/core';
import { Postagem } from './postagem';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  constructor(private http: HttpClient) { }


  salvar(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>('http://localhost:8080/api/postagens', postagem);
  }

  atualizar(postagem: Postagem): Observable<any> {
    return this.http.post<Postagem>(`http://localhost:8080/api/postagens/${postagem.postagemId}`, postagem);
  }

  getPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('http://localhost:8080/api/postagens');
  }

  getPostagensPorID(id: number): Observable<Postagem> {
    return this.http.get<any>(`http://localhost:8080/api/postagens/${id}`);
  }

  deletarPorID(postagem: Postagem): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/postagens/${postagem.postagemId}`);
  }

}
