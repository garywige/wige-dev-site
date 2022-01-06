import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .fixed-bar {
        position: fixed;
        top: 0;
        z-index: 1;
        box-shadow: 0 10px 20px #0008;
      }
    `,
  ],
})
export class AppComponent {}
