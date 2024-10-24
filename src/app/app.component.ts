import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
  <div class="RootParent">
    <div class="RootContainer">
      <app-home />
      <!-- <app-categorylist /> -->
    </div>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wixer List';
}
