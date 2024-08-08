import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse gap-10">
        <figure class="lg:h-[500px] h-80 w-80 relative">
          <img
            class="object-cover rounded-lg"
            ngSrc="assets/profile.png"
            fill
            alt="Image du profile Amani Bisimwa"
            priority
          />
        </figure>
        <div class="lg:w-8/12 w-11/12 text-center lg:text-start">
          <h1 class="text-5xl font-bold">
            Bonjour, Je m'appelle Amani Bisimwa
          </h1>
          <h2 class="py-6">
            Je suis un développeur des logiciels créatif et productif
            actuellement basé à Bukavu en République democratique du Congo
            (RDC).
          </h2>

          <div
            class="flex gap-4 flex-wrap text-start justify-center lg:justify-start"
          >
            <div class="card bg-base-100 lg:w-64 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">Developer</h2>
                <p>Experimenté avec HTML, CSS, JS, TS et Angular</p>
              </div>
            </div>
            <div class="card bg-base-100 lg:w-64 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">Expert</h2>
                <p>GDE (Google Developpeur Expert pour Firebase)</p>
              </div>
            </div>
            <div class="card bg-base-100 lg:w-64 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">Leader</h2>
                <p>Dirigeant de la communauté des developpeurs</p>
              </div>
            </div>
          </div>

          <a
            class="btn btn-primary mt-4"
            href="https://g.dev/amanibisimwa4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apprennez-en plus sur moi
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
    </div>
  `,
  styles: ``,
})
export class HeroSectionComponent {}
