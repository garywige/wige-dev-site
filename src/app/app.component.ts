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
      }
    `,
  ],
})
export class AppComponent {}
