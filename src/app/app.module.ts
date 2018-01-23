import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { FotoModule } from "./foto/foto.module"; //Importando o modulo
import { AppComponent } from './app.component';
import { PainelModule } from './painel/painel.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FotoModule, //Importando o modulo
    PainelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
