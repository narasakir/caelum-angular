import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { FotoModule } from "./foto/foto.module"; //Importando o modulo
import { AppComponent } from './app.component';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { roteamento } from "./app.routes";
import { FotoService } from "./servicos/foto.services";

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FotoModule, //Importando o modulo
    PainelModule,
    roteamento,
    FormsModule,
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
