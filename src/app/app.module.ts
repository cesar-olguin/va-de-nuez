import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasCategoriasPage } from '../pages/noticias-categorias/noticias-categorias';
import { CategoriasPage } from '../pages/categorias/categorias';
import { NoticiaPage } from '../pages/noticia/noticia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NoticiasCategoriasPage,
    CategoriasPage,
    NoticiaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NoticiasCategoriasPage,
    CategoriasPage,
    NoticiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider
  ]
})
export class AppModule {}
