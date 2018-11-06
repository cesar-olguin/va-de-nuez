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
  todasLasImagenes: any;
  codigoNoticia_Imagen;
  codigoImagen_Noticia;
  imagenNoticia: any;
  imagen;

  constructor(public navCtrl: NavController, public restApi: RestApiProvider) {
    this.juntarNoticia_Imagen();
  }

  cargarNoticias() {
    this.restApi.getTodasLasNoticias().then(data => {
      this.todasLasNoticias = data;

      // let obj = JSON.parse(JSON.stringify(data));

      // for (var i = 0; i < obj.length; i++) {
      //   this.codigoImagenNoticia = obj[i];

      //   this.restApi.getNoticiaIdFoto(this.codigoImagenNoticia.featured_media).then((data) => {
      //     let objImagen = JSON.parse(JSON.stringify(data));
      //     for (var x = 0; x < objImagen.length; x++) {
      //       this.imagen = objImagen[x];

      //     }
      //     this.imagenNoticia = this.imagen.guid.rendered;
      //   });
      // }
    });
  }

  cargarImagenes() {
    this.restApi.getTodasLaNoticiasImagenes().then(data => {
      this.todasLasImagenes = data;
    });
  }

  juntarNoticia_Imagen() {
    this.cargarNoticias();
    this.cargarImagenes();

  
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
