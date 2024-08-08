import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [],
  template: `
    <div class="divider"></div>
    <main class="lg:m-32 m-8">
      <h2 class="text-2xl font-bold">A propos de moi</h2>
      <br />
      <h3 class="text-xl">
        - Développeur de logiciels et Expert développeur Google pour Firebase -
      </h3>
      <ul class="list-disc pl-5">
        <li>
          Maîtrisant HTML, CSS, TypeScript, Angular, Firebase et Gemini, je suis
          un développeur polyvalent passionné par le partage de connaissances et
          l'entrepreneuriat technologique.
        </li>
        <li>Fluide en anglais, français, swahili et lingala.</li>
        <li>
          Je possède de solides compétences en leadership et un vif intérêt pour
          l'exploitation du potentiel de l'intelligence artificielle générative.
        </li>
      </ul>
      <br />
      <h2 class="text-xl font-bold">Education</h2>
      <p>
        19/08/2024 - Diplome de licence en Informatique de gestion à l'ISP
        Bukavu/RDC
      </p>
      <br />
      <h2 class="text-xl font-bold">Honneurs, Prix et Bourses</h2>
      <ul class="list-disc pl-5">
        <li>US Departement of State CEE, 2024</li>
        <li>Google Developer Expert, 2023</li>
        <li>Google Africa Developer Schoolarship, 2022</li>
      </ul>
      <br />
      <h2 class="text-xl font-bold">Development personnel</h2>
      <ul role="list" class="list-disc pl-5">
        <li>
          Certificat CEE de formation continue et professionnelle George Mason.
          2024
        </li>
        <li>
          Conférence fédérale sur les SIG à Washington, DC. 2024 (participant)
        </li>
        <li>
          Sommet des créateurs de contenu pour développeurs à Singapour. 2024
          (participant)
        </li>
        <li>Sommet des développeurs Google SSA au Rwanda 2023 (Orateur)</li>
        <li>Sommet des développeurs Google SSA au Kenya 2022 (participant)</li>
      </ul>
    </main>
  `,
  styles: ``,
})
export class AboutSectionComponent {}
