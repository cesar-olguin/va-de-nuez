import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

/**
 * Generated class for the NoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {

  idNoticia;
  noticia: any;
  idImagenNoticia: any;
  imagenNoticia;
  imagen;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restApi: RestApiProvider) {
    this.idNoticia = navParams.get("id");
    this.cargarNoticia();
  }

  cargarNoticia(){
    this.restApi.getNoticiaId(this.idNoticia).then((data) => {
      this.noticia = data;
      let obj = JSON.parse(JSON.stringify(data));
      
      for (var i = 0; i < obj.length; i++) {
        this.idImagenNoticia = obj[i];
    
        this.restApi.getNoticiaIdFoto(this.idImagenNoticia.featured_media).then((data) => {
          let obj = JSON.parse(JSON.stringify(data));
          this.imagenNoticia = obj[0];

          this.imagen = this.imagenNoticia.guid.rendered;
         
        });
      }
    });
  }
}
