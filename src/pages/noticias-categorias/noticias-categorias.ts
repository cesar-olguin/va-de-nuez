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
  noticiasPagina;
  fotosNoticias: any;
  idImagenNoticia;
  imagenNoticia;
  imagen;

  pagina = 1;
  paginasMaximas = 500;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restApi: RestApiProvider
  ) {
    this.noticiasPagina = null;
    this.fotosNoticias = null;
    this.idCategoria = navParams.get("id");
  }

  ionViewDidLoad() {
    this.cargarNoticias();
  }

  cargarNoticias(infiniteScroll?) {
    this.restApi.getNoticias(this.idCategoria,this.pagina).then(data => {
      this.noticias = data;
      if (infiniteScroll) {
        this.noticias = this.noticias.concat(data);
        infiniteScroll.complete();
      }
    });
  }
  
  cargarMasNoticias(infiniteScroll) {
    this.pagina++;
    //this.cargarNoticias(infiniteScroll);
    this.restApi.getNoticias(this.idCategoria,this.pagina).then(data => {
      this.noticiasPagina = data;
      if (infiniteScroll) {
        this.noticias = this.noticias.concat(this.noticiasPagina);
        infiniteScroll.complete();
      }
    });
    //this.content.scrollToTop();
    if (this.pagina === this.paginasMaximas) {
      infiniteScroll.enable(false);
    }
  }

  noticiaSeleccionada(noticia) {
    this.navCtrl.push(NoticiaPage, {
      id: noticia.id
    });
  }
}
