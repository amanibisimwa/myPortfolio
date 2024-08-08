import { Component } from '@angular/core';

@Component({
  selector: 'app-project-cta',
  standalone: true,
  imports: [],
  template: `
    <div class="divider"></div>
    <div class="flex justify-between flex-wrap">
      <p class="text-xl">Intéressé à collaborer</p>
      <a class="btn btn-primary" href="mailto:youngamani11@gmail.com"
        >Envoyez-moi un email</a
      >
    </div>
  `,
  styles: ``,
})
export class ProjectCtaComponent {}
