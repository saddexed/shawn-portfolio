import { getAbsoluteUrl } from './site-url';

export const getPersonJsonLd = () => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    url: getAbsoluteUrl('/'),
    description:
      'Shaun Beniel Edwin is a B.Tech CSE graduate specializing in Cybersecurity with interests in DevSecOps and Cloud Computing.',
    image: getAbsoluteUrl('/static/images/avatar.jpg'),
    name: 'Shaun Beniel Edwin',
    givenName: 'Shaun',
    familyName: 'Edwin',
    jobTitle: 'Cybersecurity and Cloud Computing Enthusiast',
    sameAs: ['https://github.com/saddexed', 'https://linkedin.com/in/shawndex'],
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'Cybersecurity'
      },
      {
        '@type': 'Thing',
        name: 'Cloud Computing'
      },
      {
        '@type': 'Thing',
        name: 'DevSecOps'
      }
    ]
  };
};
