import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { NoticiaPage } from '../noticia/noticia';

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
  idImagenNoticia;
  imagenNoticia;
  imagen;

 


  constructor(public navCtrl: NavController, public navParams: NavParams, public restApi: RestApiProvider) {
    this.idCategoria = navParams.get("id");

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NoticiasCategoriasPage');
    this.cargarNoticias();
  }

  cargarNoticias(){
    this.restApi.getNoticias(this.idCategoria).then((data) =>{
      this.noticias = data;

      let obj = JSON.parse(JSON.stringify(data));
      
      for (var i = 0; i < obj.length; i++) {
        this.idImagenNoticia = obj[i];
    
        this.restApi.getNoticiaIdFoto(this.idImagenNoticia.featured_media).then((data) => {
          let obj = JSON.parse(JSON.stringify(data));
          for (var i = 0; i < obj.length; i++) {
            this.imagenNoticia = obj[i];

            if(this.idImagenNoticia.featured_media == this.imagenNoticia.id){
              console.log("Bien");
              
              this.imagen = this.imagenNoticia.guid.rendered;
            }
          }
        });
      }
    });
  }
  
  noticiaSeleccionada(noticia){
    this.navCtrl.push(NoticiaPage,{
      id: noticia.id
    });
  }

}
