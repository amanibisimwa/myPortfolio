import { Component, inject, input, OnInit } from '@angular/core';
import { ProjectDataService } from '../../core/services/project-data.service';
import { Project } from '../../core/models/project.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { APP_NAME } from '../../app.config';
import { ProjectCtaComponent } from '../shared/project-cta.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage, ProjectCtaComponent],
  template: `<main class="m-8 lg:m-32">
    <a routerLink="/" class="btn btn-secondary">
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
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
      retour
    </a>
    <h1 class="text-2xl font-bold my-4">
      {{ project?.title }}
      <div class="badge badge-primary">
        Créé le {{ formatedDate(project?.updatedAt!) }}
      </div>
    </h1>
    @for (tech of project?.techstack; track $index) {
    <div class="badge badge-outline mr-4">{{ tech }}</div>
    }

    <figure class="lg:h-[25vw] h-[60vw] relative my-4">
      <img
        class="object-cover rounded-lg m-auto"
        [ngSrc]="project?.thumbnail!"
        fill
        alt="Miniature du projet"
        priority
      />
    </figure>

    <div class="space-x-4">
      <a
        class="btn btn-link"
        target="_blank"
        rel="noopener noreferrer"
        [href]="project?.githubLink!"
      >
        Lien Github
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

      @if (project?.website!) {
      <a
        class="btn btn-link"
        target="_blank"
        rel="noopener noreferrer"
        [href]="project?.website!"
      >
        Site web
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
      }
    </div>

    <h2 class="text-xl my-4">
      <b>Déscription:</b> <br />
      {{ project?.description }}
    </h2>

    <h2 class="text-xl my-4">
      <b>Architecture:</b> <br />
      {{ project?.architecture }}
    </h2>

    <app-project-cta />
  </main>`,
  styles: ``,
})
export default class ProjectDetailComponent implements OnInit {
  projectId = input();
  project?: Project;
  private pds = inject(ProjectDataService);
  private titleService = inject(Title);
  private metaTagService = inject(Meta);
  formatedDate = (d: Date) => this.pds.getFormatedDate(d);

  ngOnInit(): void {
    this.project = this.pds.projects.find(
      (project) => project.id === this.projectId()
    );
    this.getDetailPageMetadata(this.project!);
  }

  getDetailPageMetadata(project: Project) {
    this.titleService.setTitle(`${project.title} - ${APP_NAME}`);
    const url = `${location.origin}/${project.id}`;

    //facebook, others & twitter "Open Graph Metadata tags"
    this.metaTagService.addTags([
      { property: 'og:title', content: `${project.title}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:URL', content: `${url}` },
      { property: 'og:image', content: `${project.thumbnail}` },
      { property: 'og:description', content: `${project.description}` },

      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:domain', content: 'myporfolio.vercel.com' },
      { property: 'twitter:url', content: `${url}` },
      { name: 'twitter:title', content: `${project.title}` },
      { name: 'twitter:description', content: `${project.description}` },
      { name: 'twitter:image', content: `${project.thumbnail}` },
    ]);
  }
}
