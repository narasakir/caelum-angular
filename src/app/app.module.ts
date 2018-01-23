import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FotoModule } from "./foto/foto.module"; //Importando o modulo
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FotoModule //Importando o modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
