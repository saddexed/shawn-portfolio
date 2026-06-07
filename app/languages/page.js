import Base from '../../layouts/Base';
import LanguagesClient from './LanguagesClient';

export const metadata = {
  title: 'Languages & Frameworks',
  description:
    'A list of programming languages, frameworks, and tools in my tech stack.',
  openGraph: {
    title: 'Languages & Frameworks // Shaun Beniel Edwin',
    url: '/languages',
    images: ['/static/images/languages-bw.jpg']
  }
};

export default function Languages() {
  return (
    <Base
      title="Languages and Frameworks // Shaun Beniel Edwin"
      tagline="Languages. Frameworks. Tools."
      primaryColor="cyan"
      secondaryColor="green"
    >
      <LanguagesClient />
    </Base>
  );
}
