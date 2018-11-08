import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello RestApiProvider Provider');
  }

  baseURL="http://vadenuez.info/wp/wp-json/wp/v2/";

  getTodasLasNoticias(pagina){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'posts/?per_page=10&page=' + pagina).subscribe(data => {
        resolve(data);
      }, err =>{
        console.log(err);
      });
    });
  }

  getTodasLaNoticiasImagenes(){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'media/?per_page=100').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        
      });
    });
  }

  getCategorias(){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'categories/?per_page=100').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getNoticias(idCategoria,pagina){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'posts/?per_page=10&categories=' + idCategoria + '&page=' + pagina).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getNoticiaId(idNoticia){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'posts/'+ idNoticia).subscribe(data => {
        resolve([data]);
      }, err => {
        console.log(err);
      });
    });
  }

  getNoticiaIdFoto(idFoto){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'media/'+ idFoto).subscribe(data => {
        resolve([data]);
      }, err => {
        console.log(err);
      });
    });
  }

  getFotos(){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'media/?per_page=100').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUsuario(idUsuario){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'users/' + idUsuario).subscribe(data => {
        resolve([data]);
      }, err => {
        console.log(err);
      });
    });
  }

}
