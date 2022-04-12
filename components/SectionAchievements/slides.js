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
        url: 'https://www.figma.com/file/EplBW30Bjf9A6PEmpObiJL/finman-2022-03?node-id=0%3A1',
        icon: 'figma',
      },
    ],
  },
  {
    title: 'My personal page',
    description: [
      'The site you are currently looking at :)',
      'Built with React / Next.js (mostly in order to diversify my usual frontend stack and learn something new). Uses static generation.',
    ],
    images: ['portfolio-0.jpg'],
    link: {
      text: 'domain.tbd',
      url: '#',
    },
    srcLinks: [
      {
        text: 'GitHub',
        url: 'https://github.com/cheeroque/portfolio',
        icon: 'github',
      },
      {
        text: 'Figma project',
        url: 'https://www.figma.com/file/1sYe6oozxVsV2HnzLjTq2h/Portfolio?node-id=5%3A2',
        icon: 'figma',
      },
    ],
  },
  {
    title: 'Change House',
    description: [
      'Simple website for a small local business.',
      'Built with Nuxt.js, data stored in Vuex as JSON, website is static and uses Nuxt generate feature with automatic routes generation.',
    ],
    images: ['changehouse-0.jpg'],
    link: {
      text: 'bitovka-domik.ru',
      url: 'https://bitovka-domik.ru/',
    },
    srcLinks: [
      {
        text: 'GitHub',
        url: 'https://github.com/cheeroque/bitovka-domik',
        icon: 'github',
      },
    ],
  },
  {
    title: 'EKF Stockholm landing page',
    description: [
      'Landing page for EKF Stockholm series of electrical installation products (sockets and switches).',
      'Nuxt.js + Bootstrap-Vue, statically generated.',
    ],
    images: ['stockholm-0.jpg'],
    link: {
      text: 'stockholm.ekfgroup.com',
      url: 'https://stockholm.ekfgroup.com/',
    },
  },
  {
    title: 'EKF Home Connect landing page',
    description: [
      'Landing page for EKF Home Connect smart light bulb.',
      'Nuxt.js + Bootstrap-Vue, statically generated.',
    ],
    images: ['homeconnect-0.jpg'],
    link: {
      text: 'calendar2021.ekfgroup.com',
      url: 'https://calendar2021.ekfgroup.com/',
    },
  },
  {
    title: 'EKF English website',
    description: [
      'Separate EKF website for non-russian speaking clients.',
      'Same stack as everything else at EKF: Nuxt.js, Bootstrap-Vue, static generation.',
      'Was going to be deprecated in favor of main website English version, but content translation seems to be taking longer than expected, so this small site still worth mentioning.',
    ],
    images: ['en-ekfgroup-0.jpg'],
    link: {
      text: 'en.ekfgroup.com',
      url: 'https://en.ekfgroup.com/',
    },
  },
];
