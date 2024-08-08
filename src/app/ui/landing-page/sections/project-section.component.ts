import { Component, inject } from '@angular/core';
import { ProjectDataService } from '../../../core/services/project-data.service';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectCtaComponent } from '../../shared/project-cta.component';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, ProjectCtaComponent],
  template: `
    <main class="lg:mx-32 mx-8 my-16">
      <h2 class="text-2xl font-bold">Mes projects</h2>
      <p class="text-xl">
        Découvrez les plus recents projects ci-dessous pour avoir l'idée sur mes
        experiences dans le développement web
      </p>
      <div class="divider"></div>
      <div class="flex gap-4 flex-wrap  justify-center">
        @for (project of projects; track $index) {
        <a
          [routerLink]="'/' + project.id"
          class="card card-compact w-96 bg-base-100 m-4 hover:scale-105 transition-all shadow-white border border-primary border-spacing-0"
        >
          <figure class="h-60 relative">
            <img
              class="object-cover"
              [ngSrc]="project.thumbnail"
              fill
              alt="Miniature du projet"
              priority
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ project.title }}
              <div class="badge badge-secondary">
                créé le {{ formatedDate(project.updatedAt) }}
              </div>
            </h2>
            <p class="line-clamp-3">
              {{ project.description }}
            </p>
            <div class="card-actions justify-start mt-2">
              @for (tech of project.techstack; track $index) {
              <div class="badge badge-outline">{{ tech }}</div>
              }
            </div>
          </div>
        </a>
        }
      </div>
      <app-project-cta />
    </main>
  `,
  styles: `
  .image-container{
    & > * {
      height:100px;
    object-fit: cover;
    position: "absolute"
    }
  }
  `,
})
export class ProjectSectionComponent {
  private pds = inject(ProjectDataService);
  projects = this.pds.projects;
  formatedDate = (d: Date) => this.pds.getFormatedDate(d);
}
