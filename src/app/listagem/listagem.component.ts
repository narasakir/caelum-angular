import { Component, OnInit } from '@angular/core';
import { FotoService } from "../servicos/foto.services";
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'cp-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  titulo = 'Caelumpic';
  listaFotos: FotoComponent[] = []
  

  constructor(private servico:FotoService){ 
        servico.listar().subscribe( 
          fotosApi =>  this.listaFotos = fotosApi
          , erro => console.log(erro)
        )
  }

  ngOnInit() {
  }

  remover(foto:FotoComponent){
    console.log(`apagaoo ${foto.titulo}`)
    this.servico.deletar(foto)
  }

}
