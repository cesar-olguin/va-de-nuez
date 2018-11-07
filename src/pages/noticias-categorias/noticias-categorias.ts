import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RestApiProvider } from "../../providers/rest-api/rest-api";
import { NoticiaPage } from "../noticia/noticia";

/**
 * Generated class for the NoticiasCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-noticias-categorias",
  templateUrl: "noticias-categorias.html"
})
export class NoticiasCategoriasPage {
  idCategoria;
  noticias: any;
  fotosNoticias: any;
  idImagenNoticia;
  imagenNoticia;
  imagen;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restApi: RestApiProvider
  ) {
    this.idCategoria = navParams.get("id");
  }

  ionViewDidLoad() {
    this.cargarNoticias();
  }

  cargarNoticias() {
    this.restApi.getNoticias(this.idCategoria).then(data => {
      this.noticias = data;
    });
  }

  noticiaSeleccionada(noticia) {
    this.navCtrl.push(NoticiaPage, {
      id: noticia.id
    });
  }
}
