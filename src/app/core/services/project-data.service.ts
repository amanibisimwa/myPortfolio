import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  projects: Project[] = [
    {
      id: 'project1',
      title: 'myPortofolio',
      description:
        "Un site web vitrine en ligne listant mes compétences et réalisations. Il sert de CV numérique, mettant en valeur mes meilleurs travaux et projets. Les clients potentiels, employeurs ou collaborateurs peuvent l'explorer pour comprendre mon expertise et mon style. Bien conçu, il est un outil puissant pour développer une marque professionnelle et attirer de nouvelles opportunités.",
      githubLink: 'https://github.com/amanibisimwa',
      website: 'https://github.com/amanibisimwa',
      architecture:
        "Le framework Angular pour la partie client en faisant le rendu serveur pour l'optimisation de chargement et la perfomance",
      thumbnail: 'assets/project1.png',
      techstack: ['Angular 18 SSR', 'Tailwind 3.4', 'DaisyUI 4.12'],
      updatedAt: new Date('9/11/2024'),
    },
    {
      id: 'project2',
      title: 'AngularFireTodo',
      description:
        "Une application de gestion de liste de tâches développée avec Angular et utilise Angular Material 3 pour une interface utilisateur élégante et intuitive. Firebase est intégré pour gérer le stockage et la synchronisation des données de manière fiable. Cette application permet aux utilisateurs de créer, modifier et gérer leurs tâches efficacement, offrant une expérience d'apprentissage pratique du développement Angular, de l'architecture des composants prédefinis de Angular Material et de l'intégration de Firebase.",
      githubLink: 'https://github.com/DrcMind-Youtube/AngularFireTodo',
      website: 'https://my-angularfire-todo.web.app/',
      architecture:
        "Une articture sans serveur avec la technologie Firebase et le framework Angular pour la partie client en utilisant les composants prêt à l'emploi depui la librairie Angular Material",
      thumbnail: 'assets/project2.png',
      techstack: ['Angular 18', 'AngularFire 18', 'Angular Material 3'],
      updatedAt: new Date('8/11/2024'),
    },
    {
      id: 'project3',
      title: 'AngularTodo',
      description:
        "Une application de la gestion de tâches simple avec Angular pour maîtriser les concepts de base comme les composants, la liaison de données et l'injection de dépendances. Expliquant en pratique comment créer des composants pour la liste des tâches, l'entrée d'élément et l'affichage d'élément. Implémentation de la liaison de données pour mettre à jour la liste dynamiquement lors de l'ajout, de la modification ou de la suppression d'éléments. La pratique d'injection de dépendances en créant un service pour gérer les données des tâches, favorisant ainsi la réutilisabilité du code à travers l'architecture MVC",
      githubLink: 'https://github.com/DrcMind-Youtube/angularTodo',
      architecture:
        'Le framework Angular pour la partie client, un serveur local en utilisant la base des données indexedDB à travers la librairie Dexie',
      thumbnail: 'assets/project3.png',
      techstack: ['Angular 18', 'Dexie 4'],
      updatedAt: new Date('7/11/2024'),
    },
  ];

  getFormatedDate = (d: Date) => new Intl.DateTimeFormat('fr').format(d);
}
