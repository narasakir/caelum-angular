import { Component, Input } from "@angular/core" // importando o modulo Component do Angular para usar o decorator
//Decorator são como funções, add algumas funcionalidades
@Component({ // Decorator para criar um componente do angular
    selector: 'foto', // Criando o seletor
    //Criando a view do componente
    template: `
        <img [src]="url" class="img-fluid" [alt]="titulo">
    `
})

export class FotoComponent{ //Criando a classe do componente e exportando para ser utilizado

    @Input() titulo = ""
    @Input() url = ""
             descricao = ""
             _id

}