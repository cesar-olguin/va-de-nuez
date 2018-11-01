import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

/**
 * Generated class for the NoticiasCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias-categorias',
  templateUrl: 'noticias-categorias.html',
})
export class NoticiasCategoriasPage {

  idCategoria;
  noticias: any;
  fotosNoticias: any;
  idNoticia;
  idNoticiaFoto;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restApi: RestApiProvider) {
    this.idCategoria = navParams.get("id");

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NoticiasCategoriasPage');
    this.cargarNoticias();
    this.cargarFotos();
  }

  cargarNoticias(){
    this.restApi.getNoticias(this.idCategoria).then((data) =>{
      this.noticias = data;

      let obj = JSON.parse(JSON.stringify(data));
      this.idNoticia = obj[0];
    });
  }
  
  cargarFotos(){
    this.restApi.getFotos().then((data) => {
      this.fotosNoticias = data;

      let obj = JSON.parse(JSON.stringify(data));
      this.idNoticiaFoto = obj[0];
    });
  }

}
