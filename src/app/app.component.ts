import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->

    <header class="jumbotron">
      <h1 class="text-center">{{titulo}}</h1>
      </header>
      <main class="container">
        <foto url="./assets/img/lancha.jpg" titulo="Lancha top"></foto>
      </main>
  `,
  styles: []
})
export class AppComponent {
  titulo = 'Caelumpic';
}
