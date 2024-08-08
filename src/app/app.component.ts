import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/shared/navbar.component';
import { FooterComponent } from './ui/shared/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: ` <app-navbar /><router-outlet /><app-footer /> `,
  styles: [],
})
export class AppComponent {}
