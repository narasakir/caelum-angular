import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>{{titulo}}</h1>
      <img src="./assets/img/audi.jpg" class="img-responsive">
    </div>
       
  `,
  styles: []
})
export class AppComponent {
  titulo = 'Audi';
}
