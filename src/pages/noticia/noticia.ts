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
  noticiasRelacionadas: any;
  parseNoticia;
  autor;
  parseUsuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restApi: RestApiProvider) {
    this.idNoticia = navParams.get("id");
    this.cargarNoticia();
  }

  cargarNoticia(){
    this.restApi.getNoticiaId(this.idNoticia).then((data) => {
      this.noticia = data;
      let obj = JSON.parse(JSON.stringify(data));

      this.parseNoticia = obj[0];

      this.restApi.getUsuario(this.parseNoticia.author).then((data) => {
        console.log(data);
        
        let obj = JSON.parse(JSON.stringify(data));
        this.parseUsuario = obj[0];

        this.autor = this.parseUsuario.name;
      });
    
    });
  }
}
