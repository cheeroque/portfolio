export const slides = [
  {
    title: 'EKF website',
    description: [
      'Vue / Nuxt.js web app, communicating with server via GraphQL / Hasura.',
      'Uses modified Bootstrap-Vue components, supports i18n via @nuxtjs/i18n module.',
      'Some parts like career, video pages use REST APIs to fetch data from external services (hh.ru and youtube.com respectively).',
    ],
    images: ['ekfgroup-0.jpg'],
    link: {
      text: 'ekfgroup.com',
      url: 'https://ekfgroup.com/',
    },
  },
  {
    title: 'Finance Manager',
    description: [
      'Budgeting app. Frontend on Nuxt.js without any component libraries.',
      'Supports i18n, light/dark theme (depending on system/browser settings). Communicates with backend via REST API. Backend is really simple, built with Laravel. Auth is hadled with Laravel Passport.',
    ],
    images: ['finman-0.jpg'],
    link: {
      text: '847327-cv89658.tmweb.ru',
      url: 'http://847327-cv89658.tmweb.ru/',
    },
    srcLinks: [
      {
        text: 'GitHub (client)',
        url: 'https://github.com/cheeroque/finman-client',
        icon: 'github',
      },
      {
        text: 'GitHub (API)',
        url: 'https://github.com/cheeroque/finman-api',
        icon: 'github',
      },
      {
        text: 'Figma project',
        url: 'https://www.figma.com/file/1sYe6oozxVsV2HnzLjTq2h/Portfolio?node-id=5%3A2',
        icon: 'figma',
      },
    ],
  },
  // { title: 'My personal page' },
  // { title: 'Change House' },
  // { title: 'EKF Stockholm landing page' },
  // { title: 'EKF Home Connect landing page' },
  // { title: 'EKF English website' },
];
