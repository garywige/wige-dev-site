import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .fixed-bar {
        position: fixed;
        top: 0;
      }
    `,
  ],
})
export class AppComponent {}
