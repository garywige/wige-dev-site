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

      .motto {
        margin-top: 100px;
      }

      .active-link {
        border-bottom: 1px solid white;
        color: #88c;
      }
    `,
  ],
})
export class AppComponent {}
