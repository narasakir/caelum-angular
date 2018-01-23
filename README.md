# caelum-angular

## Criar componentes com Angular

**Passos para criar componentes:**

1 - Criar 1 pasta para o componente dentro de APP

**2- Criar o componente**

```
// importando o modulo Component do Angular para usar o decorator
import { Component } from "@angular/core" 

// Decorator para criar um componente do angular
@Component({
    selector: 'foto', // Criando o seletor
    //Criando a view do componente
    template: `
        <img [src]="url" class="img-fluid" [alt]="titulo">
    `
})
//Criando a classe do componente e exportando para ser utilizado
export class FotoComponent{ 

}

```
**3- Criando o módulo do componente**
```
import { NgModule } from "@angular/core"; // Importando o NgModulo para criar um modulo do Angular
import { FotoComponent } from "./foto.component"; // Importando o componente para criar um modulo do componente
    
@NgModule({
    declarations: [ FotoComponent ], //Declarando quaiso componente que vou utilizar dentro deste modulo
    exports: [ FotoComponent ] // Exportando o módulo para qualquer outro modulo utilizar
})

// Exportando para que outros Modulos possam acessar
export class FotoModule{ 

}

```

**Importando o modulo para o app principal**
```
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

```

## Consumindo API 

```
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

```

## Criando o Componente de Painel

**painel.component.html**
```
<div class="card">
    <div class="card-header">
         {{titulo}}  <!--Recebendo o titulo por atributo-->
    </div>
    <div class="card-body">
        <ng-content></ng-content> <!-- Preparando o componente para receber conteudo dentro dele -->
    </div>
</div>

```

**painel.component.ts**

```
import { Component, Input } from "@angular/core";
@Component({
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent{
    @Input() titulo
}
```
**painel.module.ts**
```
import { NgModule } from "@angular/core";

import { PainelComponent } from "./painel.component";
@NgModule({
    declarations: [ PainelComponent ],
    exports: [ PainelComponent ]
})

export class PainelModule{
}

```

**Atualizando o HTML do App** app.component.ts 

```

    <header class="jumbotron">
        <h1 class="text-center">{{titulo}}</h1>
    </header>

    <main class="container">
        <div class="row">

            <!-- Fazendo o Loop do Painel de Fotos -->
            <painel *ngFor="let foto of listaFotos" [titulo]="foto.titulo" class="col-md-4 ">
                <foto [url]="foto.url" [titulo]="foto.titulo"></foto>
            </painel>
            
        </div>
    </main>


```




