import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { NoticiaPage } from '../noticia/noticia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todasLasNoticias: any;
  todasLasImagenes: any;
  codigoImagen;
  codigoImagenNoticia;
  imagenNoticia: any;
  imagen;

  constructor(public navCtrl: NavController, public restApi: RestApiProvider) {
    this.restApi.getTodasLasNoticias().then((data) => {
      this.todasLasNoticias = data;

      let obj = JSON.parse(JSON.stringify(data));
      
      for (var i = 0; i < obj.length; i++) {
        this.codigoImagenNoticia = obj[i];
    
        this.restApi.getNoticiaIdFoto(this.codigoImagenNoticia.featured_media).then((data) => {
          let obj = JSON.parse(JSON.stringify(data));
          for (var i = 0; i < obj.length; i++) {
            this.imagen = obj[i];

            if(this.codigoImagenNoticia.featured_media == this.imagen.id){
              console.log("Bien");
              
              this.imagenNoticia = this.imagen.guid.rendered;
            }
          }
        });
      }
    });

    this.restApi.getTodasLaNoticiasImagenes().then((data) => {
      this.todasLasImagenes = data;
      let obj = JSON.parse(JSON.stringify(data));
    });
  }

  noticiaSeleccionada(noticia) {
    this.navCtrl.push(NoticiaPage, {
      id: noticia.id
    });
  }

}
