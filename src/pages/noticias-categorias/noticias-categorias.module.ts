import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiasCategoriasPage } from './noticias-categorias';

@NgModule({
  declarations: [
    NoticiasCategoriasPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiasCategoriasPage),
  ],
})
export class NoticiasCategoriasPageModule {}
