import { Component, ViewChild } from "@angular/core";
import { NavController, Content } from "ionic-angular";
import { RestApiProvider } from "../../providers/rest-api/rest-api";
import { NoticiaPage } from "../noticia/noticia";
//import { HttpClient } from "@angular/common/http";


@Component({
  selector: "page-home",
  templateUrl: "home.html"
})

export class HomePage {
  @ViewChild(Content) content: Content;
  todasLasNoticias: any;
  noticiasPagina: any;
  pagina = 1;
  paginasMaximas = 500;

  constructor(
    public navCtrl: NavController,
    public restApi: RestApiProvider,
    //private httpClient: HttpClient
  ) {
    this.cargarNoticias();
  }

  cargarNoticias(infiniteScroll?) {
    this.restApi.getTodasLasNoticias(this.pagina).then(data => {
      this.todasLasNoticias = data;
      if (infiniteScroll) {
        this.todasLasNoticias = this.todasLasNoticias.concat(data);
        infiniteScroll.complete();
      }
    });
  }

  cargarMasNoticias(infiniteScroll) {
    this.pagina++;
    this.cargarNoticias(infiniteScroll);
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

  recargarPagina() {
    window.location.reload(true);
  }
}
