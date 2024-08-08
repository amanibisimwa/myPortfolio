import { Component } from '@angular/core';
import { APP_NAME } from '../../app.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <div class="navbar bg-base-100 sticky top-0 z-10">
      <div class="navbar-start">
        <a class="btn btn-ghost text-xl" href="/"> {{ appName }} </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">A propos</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <ul class="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Profiles</summary>
              <ul class="p-2">
                <li>
                  <a
                    href="https://github.com/amanibisimwa"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Github</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/amani-bisimwa-392ab6186/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >LinkedIn</a
                  >
                </li>
                <li>
                  <a
                    href="https://twitter.com/AmaniBisimwa4"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Twitter</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@DrcMind"
                    target="_blank"
                    rel="noopener noreferrer"
                    >YouTube</a
                  >
                </li>
              </ul>
            </details>
          </li>
        </ul>

        <a
          class="btn"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1fmLVPGA7nr9cZqbWktyFInPA2dTgkro-/edit?usp=sharing&ouid=103815546561269532625&rtpof=true&sd=true"
        >
          Consultez mon CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class NavbarComponent {
  appName = APP_NAME;
}
