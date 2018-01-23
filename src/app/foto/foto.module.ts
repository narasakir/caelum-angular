import { NgModule } from "@angular/core"; // Importando o NgModulo para criar um modulo do Angular
import { FotoComponent } from "./foto.component"; // Importando o componente para criar um modulo do componente

@NgModule({
    declarations: [ FotoComponent ], //Declarando quaiso componente que vou utilizar dentro deste modulo
    exports: [ FotoComponent ] // Exportando o módulo para qualquer outro modulo utilizar
})

// Exportando para que outros Modulos possam acessar
export class FotoModule{ 

}