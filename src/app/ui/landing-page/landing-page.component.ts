import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section.component';
import { ProjectSectionComponent } from './sections/project-section.component';
import { AboutSectionComponent } from './sections/about-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ProjectSectionComponent,
    AboutSectionComponent,
  ],
  template: `
    <app-hero-section id="home" />
    <app-project-section id="projects" />
    <app-about-section id="about" />
  `,
  styles: ``,
})
export default class LandingPageComponent {}
