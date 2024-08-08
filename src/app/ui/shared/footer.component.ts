import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Amani Bisimwa © {{ getFullYear }} - Tout droit réservé par
          <a href="https://drcmind.com" class="link link-primary"
            >DrcMind Inc</a
          >
        </p>
      </aside>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  getFullYear = new Date().getFullYear();
}
