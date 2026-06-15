const content = {
  es: {
    docLang: 'es',
    toggle: 'EN',
    eyebrow: 'Curriculum Vitae',
    headline: 'Estudiante avanzado de Ingeniería Informática | Backend / Full Stack Trainee',
    profileTitle: 'Perfil',
    profileText:
      'Estudiante avanzado de Ingeniería Informática en UADE, cursando el último año de la carrera, con 43 de 52 materias aprobadas. Perfil orientado a backend y desarrollo full stack, con experiencia académica en APIs REST, bases de datos, seguridad, autenticación y arquitecturas event-driven.',
    techTitle: 'Tecnologías',
    languagesTitle: 'Idiomas',
    skillsTitle: 'Competencias',
    educationKicker: 'Formación',
    educationTitle: 'Educación',
    educationMeta: 'Ingeniería Informática | 2022 - Actualidad',
    projectsKicker: 'Desarrollo académico',
    projectsTitle: 'Proyectos universitarios',
    educationBullets: [
      'Estudiante de 5.º año / último año de la carrera.',
      '43 de 52 materias aprobadas. Graduación estimada: 2026.',
      'Título intermedio universitario en trámite.'
    ],
    languages: [
      'Español nativo.',
      'Inglés B2 - Cambridge First Certificate in English, FCE, aprobado en 2023.'
    ],
    skills: [
      'Resolución de problemas',
      'Trabajo en equipo',
      'Comunicación',
      'Liderazgo',
      'Aprendizaje rápido',
      'Pensamiento analítico',
      'Autonomía',
      'Investigación'
    ],
    projects: [
      {
        title: 'UniCamart - E-commerce tecnológico con arquitectura event-driven',
        meta: 'Java 21 · Spring Boot · MySQL · React · TypeScript · Tailwind CSS · Kafka',
        bullets: [
          'Proyecto académico de mayor escala basado en módulos/microservicios: landing de compra, CRM de productos y stock, analytics, core de mensajería y middleware receptor de eventos.',
          'Participación en backend, frontend, base de datos, gestión de eventos con Kafka y validación de emisores mediante Keycloak/tokens.'
        ]
      },
      {
        title: 'App mobile de turnos médicos',
        meta: 'Java 17 · Spring Boot · MySQL · React Native · Expo · JWT',
        bullets: [
          'Aplicación móvil para gestión de turnos médicos con backend REST y frontend mobile.',
          'Uso de autenticación JWT, TypeScript, Tailwind CSS y arquitectura orientada a separación frontend/backend.'
        ]
      },
      {
        title: 'Marketplace de instrumentos musicales',
        meta: 'Java · Spring Boot · MySQL · JWT · React · Insomnia/Postman',
        bullets: [
          'E-commerce académico con backend, frontend y base de datos relacional para productos, usuarios, compras y autenticación.'
        ]
      }
    ]
  },
  en: {
    docLang: 'en',
    toggle: 'ES',
    eyebrow: 'Resume',
    headline: 'Advanced Computer Engineering Student | Backend / Full Stack Trainee',
    profileTitle: 'Profile',
    profileText:
      'Advanced Computer Engineering student at UADE, currently in the final year of the degree, with 43 out of 52 courses completed. Backend-oriented profile with full stack experience in academic projects involving REST APIs, databases, security, authentication and event-driven architectures.',
    techTitle: 'Technologies',
    languagesTitle: 'Languages',
    skillsTitle: 'Skills',
    educationKicker: 'Education',
    educationTitle: 'Education',
    educationMeta: 'Computer Engineering | 2022 - Present',
    projectsKicker: 'Academic development',
    projectsTitle: 'University projects',
    educationBullets: [
      '5th-year / final-year student.',
      '43 out of 52 courses completed. Expected graduation: 2026.',
      'Intermediate university degree currently in process.'
    ],
    languages: [
      'Spanish native.',
      'English B2 - Cambridge First Certificate in English, FCE, passed in 2023.'
    ],
    skills: [
      'Problem solving',
      'Teamwork',
      'Communication',
      'Leadership',
      'Fast learning',
      'Analytical thinking',
      'Autonomy',
      'Research'
    ],
    projects: [
      {
        title: 'UniCamart - Technology e-commerce with event-driven architecture',
        meta: 'Java 21 · Spring Boot · MySQL · React · TypeScript · Tailwind CSS · Kafka',
        bullets: [
          'Large academic project based on modules/microservices: shopping landing page, product and stock CRM, analytics, messaging core and event reception middleware.',
          'Worked on backend, frontend, databases, Kafka event management and sender validation through Keycloak/tokens.'
        ]
      },
      {
        title: 'Medical appointments mobile app',
        meta: 'Java 17 · Spring Boot · MySQL · React Native · Expo · JWT',
        bullets: [
          'Mobile application for medical appointment management with REST backend and mobile frontend.',
          'Used JWT authentication, TypeScript, Tailwind CSS and a clean frontend/backend separation.'
        ]
      },
      {
        title: 'Musical instruments marketplace',
        meta: 'Java · Spring Boot · MySQL · JWT · React · Insomnia/Postman',
        bullets: [
          'Academic e-commerce project with backend, frontend and relational database for products, users, purchases and authentication.'
        ]
      }
    ]
  }
};

const techs = [
  'Java',
  'Spring Boot',
  'Spring Security',
  'JWT',
  'REST APIs',
  'Maven',
  'JPA/Hibernate',
  'MySQL',
  'SQL',
  'React',
  'React Native',
  'Expo',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Kafka',
  'Keycloak',
  'Git',
  'GitHub',
  'Docker básico',
  'Insomnia/Postman',
  'Trello/Kanban',
  'Render',
  'Hostinger VPS'
];

let currentLanguage = 'es';

function setLanguage(language) {
  currentLanguage = language;
  const t = content[language];
  document.documentElement.lang = t.docLang;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t[key];
  });

  document.getElementById('langToggle').textContent = t.toggle;
  renderList('educationBullets', t.educationBullets);
  renderList('languagesList', t.languages);
  renderList('skillsList', t.skills);
  renderProjects(t.projects);
}

function renderList(elementId, items) {
  const list = document.getElementById(elementId);
  list.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

function renderProjects(projects) {
  const container = document.getElementById('projectsList');
  container.innerHTML = projects
    .map(
      (project) => `
        <div class="timeline-item">
          <div class="time-dot"></div>
          <div>
            <h4>${project.title}</h4>
            <p class="meta">${project.meta}</p>
            <ul>${project.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>
          </div>
        </div>
      `
    )
    .join('');
}

function renderTechs() {
  const container = document.getElementById('techTags');
  container.innerHTML = techs.map((tech) => `<span class="tag">${tech}</span>`).join('');
}

document.getElementById('langToggle').addEventListener('click', () => {
  setLanguage(currentLanguage === 'es' ? 'en' : 'es');
});

document.getElementById('printButton').addEventListener('click', () => {
  window.print();
});

renderTechs();
setLanguage('es');
