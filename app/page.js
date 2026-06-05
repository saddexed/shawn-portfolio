import AnimatedLead from '../components/AnimatedLead';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { PostContent, PostMain } from '../components/Post';
import ShortcutHome from '../components/ShortcutHome';
import { Wrapper } from '../components/Wrapper';
import { getPersonJsonLd } from '../lib/json-ld';

export const metadata = {
  title: 'Shaun Beniel Edwin',
  description: 'Chronically Online',
  openGraph: {
    title: 'Shaun Beniel Edwin',
    description: 'Chronically Online Developer',
    url: '/'
    // images: ['/static/images/home-bw.jpg']
  }
};

export default function Index() {
  const title = 'Shaun Beniel Edwin';

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPersonJsonLd())
        }}
        key="person-jsonld"
      />
      <Navbar />
      <PostMain className="mx-auto flex items-start md:w-200">
        <PostContent className="mb-5 p-0!">
          <div className="mx-5 mt-64 flex w-full max-w-190 flex-col items-start">
            <p className="mb-0 text-xl">Hi, I&apos;m</p>
            <h1 style={{ margin: 'calc(var(--spacing) * 0)' }}>{title}</h1>
            <AnimatedLead />
            <ShortcutHome />
          </div>
        </PostContent>
      </PostMain>
      <Footer />
    </Wrapper>
  );
}
