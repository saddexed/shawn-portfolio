import Base from '../../layouts/Base';
import AboutClient from './AboutClient';

export const metadata = {
  title: 'About',
  description:
    'Shaun Beniel Edwin is a B.Tech CSE graduate specializing in Cybersecurity with interests in DevSecOps and Cloud Computing.',
  openGraph: {
    title: 'About // Shaun Beniel Edwin',
    description:
      'Shaun Beniel Edwin is a B.Tech CSE graduate specializing in Cybersecurity with interests in DevSecOps and Cloud Computing.',
    url: '/about',
    images: ['/static/images/about-bw.jpg']
  }
};

export default function About() {
  return (
    <Base
      title="About // Shaun Beniel Edwin"
      tagline="Secure. Build. Learn."
      primaryColor="pink"
      secondaryColor="purple"
    >
      <AboutClient />
    </Base>
  );
}
