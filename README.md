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




3- Criar o Modulo do Componente


