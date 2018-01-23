import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: []
})
export class AppComponent {
  titulo = 'Caelumpic';
  listaFotos = []
  
  //O Constructor é o primeiro a carregar
  constructor(ajax: Http){ //cria um atributo do tipo Http direto no Http
    // Solicita os dados da API pelo metodo get
    ajax.get("http://localhost:3000/v1/fotos")
        .subscribe(
          resposta => {
            this.listaFotos = resposta.json()
          }
        )
  }
}
