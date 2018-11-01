import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { NoticiasCategoriasPage } from '../noticias-categorias/noticias-categorias';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categorias: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restApi: RestApiProvider) {
    this.restApi.getCategorias().then((data) => {
      this.categorias = data;
    });
  }

  categoriaSeleccionada(cate){
    this.navCtrl.push(NoticiasCategoriasPage,{
      id: cate.id
    });
    
  }

}
