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

  getTodasLasNoticias(){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'posts').subscribe(data => {
        resolve(data);
      }, err =>{
        console.log(err);
      });
    });
  }

  getCategorias(){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'categories').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getNoticias(idCategoria){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'posts?categories='+ idCategoria).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getNoticiaId(idNoticia){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'posts/'+ idNoticia).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getFotos(){
    return new Promise(resolve => {
      this.http.get(this.baseURL + 'media').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUsuarios(){
    return this.http.get('https://randomuser.me/api/?results=100');
  }
}
