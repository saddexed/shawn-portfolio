'use client';

import { format, intervalToDuration, parseISO } from 'date-fns';
import Image from 'next/image';
import React from 'react';

import { AnimatedIcon } from '../../components/AnimatedIcon';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import Toast from '../../components/Toast';
import Toolbox from '../../components/Toolbox';
import copyBioIcon from '../../public/static/icons/copy-bio.json';
import downloadIcon from '../../public/static/icons/download.json';

const items = [
  // {
  //   jobTitle: 'Role or Title',
  //   company: 'Company, College, or Project',
  //   companyUrl: 'https://example.com',
  //   startDate: '2024-01-01',
  //   description: 'A short summary of the work you did.',
  //   location: 'City, Country'
  // },
  {
    jobTitle: 'CTF Developer',
    company: 'EncryptEdge',
    companyUrl: 'https://encryptedge.in',
    startDate: '2024-01-01',
    endDate: '2026-05-16',
    description: '',
    location: 'LPU, Punjab'
  },
  {
    jobTitle: 'Team Developer',
    company: 'Google Developer Student Clubs',
    companyUrl: 'https://github.com/gdsclpu',
    startDate: '2023-09-01',
    endDate: '2024-05-01',
    description: '',
    location: 'LPU, Punjab'
  },
  {
    jobTitle: 'Volunteer',
    company: 'Samadhan NGO',
    companyUrl: 'https://samadhanindia.org',
    startDate: '2023-06-01',
    endDate: '2023-08-01',
    description: 'asd',
    location: 'Delhi, India'
  },
  {
    jobTitle: 'Intern',
    company: 'HCL Technologies',
    companyUrl: 'https://hcltech.com',
    startDate: '2022-01-01',
    endDate: '2023-05-01',
    description: '',
    location: 'Chennai, Remote'
  }
];

export function TextInvert({ children }) {
  const text = React.Children.toArray(children).join(' ');
  let hash = 0;

  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }

  const palettes = [
    { backgroundColor: '#ffffff', color: '#111111' },
    { backgroundColor: '#fff6d6', color: '#1b1b1b' },
    { backgroundColor: '#e8f7ff', color: '#10212b' },
    { backgroundColor: '#f4ecff', color: '#201429' },
    { backgroundColor: '#eaf8ea', color: '#142015' },
    { backgroundColor: '#eafff4', color: '#142015' },
    { backgroundColor: '#ffe8e8', color: '#142015' },
    { backgroundColor: '#eafff4', color: '#142015' },

  ];

  const theme = palettes[hash % palettes.length];

  return (
    <strong
      style={{
        color: theme.color,
        background: `linear-gradient(to bottom, transparent 5%, ${theme.backgroundColor} 5%, ${theme.backgroundColor} 95%, transparent 95%)`,
        display: 'inline-block',
        padding: '0',
        borderRadius: '0.2em'
      }}
    >
      {children}
    </strong>
  );
}

function getTextFromNode(node) {
  if (!node) return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(getTextFromNode).join('');
  if (React.isValidElement(node)) return getTextFromNode(node.props.children);
  return '';
}


export default function AboutClient() {
  const [toastTitle, setToastTitle] = React.useState('');
  const [toastDescription, setToastDescription] = React.useState('');
  const [showToast, setShowToast] = React.useState(false);
  const copyBioRef = React.useRef();
  const downloadRef = React.useRef();

  const renderIntro = () => {
    return (
      <div className="flow-root">
        <div className="mt-0 w-64 mx-auto md:float-left md:mr-10 md:mb-5 md:w-84 md:mx-0">
          <Image
            alt="Shaun Beniel Edwin"
            src="/static/images/avatar.jpg"
            width="336"
            height="336"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </div>
        <p className="mt-4 md:my-3.75 md:-mt-1.5">
          <strong className="mb-10">Hey there, <TextInvert>I&apos;m Shaun</TextInvert></strong>
          <br />
          I&apos;m a B.Tech CSE graduate from <a style={{ textDecoration: "none", borderBottom: "none" }} href="https://lpu.in">Lovely Professional University</a> specializing in{' '}
          <TextInvert>CyberSecurity</TextInvert> with a keen interest in{' '}
          <TextInvert>DevOps</TextInvert> and{' '}
          <TextInvert>Cloud Computing</TextInvert>.
        </p>
        <p className="md:my-3.75">
          I&apos;m a <TextInvert>CTF</TextInvert> player and love learning topics within the grasp of my understanding.
          I&apos;m also a <TextInvert>light mode </TextInvert> user (yes we exist 😔), and love destroying my windows installation with automation projects and tweaks using <TextInvert>powershell</TextInvert>, <TextInvert>bash</TextInvert> and <TextInvert>C#</TextInvert> for that extra 0.047% productivity.
          <br />
          When I&apos;m not working, I like playing games, watching shows, and
          exploring new tools on the web and yapping to friends.
        </p>
        <p>
          Other than said topics, I also consider myself <TextInvert>versatile</TextInvert> in terms of picking the basics of a new language or framework. With the rise of AI, as long as I get enough time - and usage credits of course, I believe I can get the hang of things pretty quickly.
        </p>
        <p>
          I&apos;m looking for opportunities to apply my skills and learn more in the domains of CyberSecurity, DevOps, Cloud Computing and/or Software Development. 
          <br />
          Feel free to reach out if you think I could be a good fit for your organization. Or if you wanna just chat about security or tech in general, I&apos;m down for that too :)
        </p>
      </div>
    );
  };

  const bioDescription = (
    <>
      Shaun is a B.Tech CSE graduate looking for opportunities in the{' '}
      <TextInvert>CyberSecurity</TextInvert>, <TextInvert>DevOps</TextInvert>,{' '}
      <TextInvert>Cloud Computing</TextInvert> and{' '}
      <TextInvert>Software Development</TextInvert> domains. He has a keen
      interest in <TextInvert>automation</TextInvert>,{' '}
      <TextInvert>infrastructure management</TextInvert>, and{' '}
      <TextInvert>ensuring secure development practices</TextInvert>. He currently
      holds 2 certifications: <TextInvert>CompTIA Security+</TextInvert> and{' '}
      <TextInvert>AWS Certified Cloud Practitioner</TextInvert> - with plans for more cloud based ones in the future.
    </>
  );

  const renderBio = () => {
    return (
      <div>
        <p>
          Here's my bio in a few words for employers and recruiters. You can use this if you want a <TextInvert>TL:DR</TextInvert> of me.
        </p>
        <blockquote>
          <p>{bioDescription}</p>
        </blockquote>
        <div className="flex items-center">
          <ButtonPrimary
            as="button"
            className="inline-flex items-center justify-center"
            onClick={copyBio}
            onMouseEnter={() => copyBioRef.current?.play()}
            onMouseLeave={() => copyBioRef.current?.stop()}
          >
            <AnimatedIcon
              lottieRef={copyBioRef}
              animationData={copyBioIcon}
              loop={false}
              autoplay={false}
              className="mr-2"
            />
            Copy Bio
          </ButtonPrimary>
          <span className="mt-0 mr-5 mb-0 ml-2.5">•</span>
          <ButtonPrimary
            as="a"
            download
            role="button"
            href="/static/images/avatar.jpg"
            className="inline-flex items-center justify-center"
            onClick={downloadHeadshot}
            onMouseEnter={() => downloadRef.current?.play()}
            onMouseLeave={() => downloadRef.current?.stop()}
          >
            <AnimatedIcon
              lottieRef={downloadRef}
              animationData={downloadIcon}
              loop={false}
              autoplay={false}
              className="mr-2"
            />
            Download Headshot
          </ButtonPrimary>
        </div>
      </div>
    );
  };

  const renderAll = () => {
    return items.map((item) => {
      return (
        <div className="mb-5" key={`${item.companyUrl}-${item.startDate}`}>
          <h3>{item.jobTitle}</h3>
          <p className="m-0">
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p className="m-0">
            <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
            <span> - </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), 'LLL yyyy')
                : 'Present'}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
            {item.description ? (<span className="mb-0">{item.description}</span>) : null}
          </p>
        </div>
      );
    });
  };

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date()
    });

    let durationStr = '';

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `;
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `;
    }

    const months = durationObj.months ?? 0;
    if (months > 0) {
      durationStr += `${months} mos`;
    }

    return durationStr.trim();
  };

  const downloadHeadshot = () => {
    setToastTitle('Downloading...');
    setToastDescription('You can now add this photo to your fancy site.');
    setShowToast(true);
  };

  const copyBio = (e) => {
    e.preventDefault();
    const plainText = getTextFromNode(bioDescription);
    navigator.clipboard.writeText(plainText);

    setToastTitle('Copied :D');
    setToastDescription('You can now paste it anywhere.');
    setShowToast(true);
  };

  return (
    <>
      {renderIntro()}
      <h2>Bio</h2>
      {renderBio()}
      <h2>Career</h2>
      {renderAll()}
      <Toolbox />
      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  );
}
