import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { RestApiProvider } from "../../providers/rest-api/rest-api";
import { NoticiaPage } from "../noticia/noticia";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  todasLasNoticias: any;

  constructor(public navCtrl: NavController, public restApi: RestApiProvider) {
    this.cargarNoticias();
  }

  cargarNoticias() {
    this.restApi.getTodasLasNoticias().then(data => {
      this.todasLasNoticias = data;
    });
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
