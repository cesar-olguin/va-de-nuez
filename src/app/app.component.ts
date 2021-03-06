import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
//import { ListPage } from "../pages/list/list";
//import { CategoriasPage } from "../pages/categorias/categorias";
import { RestApiProvider } from "../providers/rest-api/rest-api";
import { NoticiasCategoriasPage } from "../pages/noticias-categorias/noticias-categorias";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string; component: any; icon: string }>;
  categorias: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public restApi: RestApiProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "INICIO", component: HomePage, icon: "home" }
      //{ title: 'List', component: ListPage },
      //{ title: "Categorias", component: CategoriasPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // let status bar overlay webview
      this.statusBar.overlaysWebView(false);

      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#d68300');
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    });

    this.restApi.getCategorias().then(data => {
      this.categorias = data;
    });
  }

  categoriaSeleccionada(cate) {
    this.nav.setRoot(NoticiasCategoriasPage, {
      id: cate.id
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
