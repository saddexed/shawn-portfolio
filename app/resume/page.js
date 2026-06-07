import Base from '../../layouts/Base';
import ResumeActions from './ResumeActions';

export const metadata = {
  title: 'Resume',
  description:
    'Resume for Shaun Beniel Edwin, a B.Tech CSE graduate focused on Cybersecurity, DevOps, Cloud Computing, and Software Development.',
  openGraph: {
    title: 'Resume // Shaun Beniel Edwin',
    description:
      'Resume for Shaun Beniel Edwin, a B.Tech CSE graduate focused on Cybersecurity, DevOps, Cloud Computing, and Software Development.',
    url: '/resume',
    images: ['/static/images/about-bw.jpg']
  }
};

// Edit these values to control the web resume content and inverted visual style.
const resumeTheme = {
  background: '#050505',
  surface: '#0d0d0d',
  text: '#ffffff',
  muted: '#c7c7c7',
  border: '#2a2a2a',
  accent: '#80ffea'
};

const resumePdf = '/static/resume/Resume.pdf';

const resume = {
  name: 'Shaun Beniel Edwin',
  headline:
    'Cybersecurity-focused developer interested in DevOps, Cloud Computing, and Software Development.',
  contact: [
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/shawndex',
      href: 'https://linkedin.com/in/shawndex/'
    },
    {
      label: 'Email',
      value: 'hireme@shaunedwin.com',
      href: 'mailto:hireme@shaunedwin.com'
    },
    {
      label: 'GitHub',
      value: 'github.com/saddexed',
      href: 'https://github.com/saddexed/'
    },
    { label: 'Mobile', value: '+91-9365976996', href: 'tel:+919365976996' }
  ],
  summary:
    'B.Tech CSE student at Lovely Professional University with experience in automation testing, security events, cloud tooling, and developer-focused projects.',
  skills: [
    {
      label: 'Languages',
      items: ['Bash', 'PowerShell', 'Python', 'C#', 'C++', 'JavaScript', 'TypeScript', 'Node', 'Bun']
    },
    {
      label: 'Frameworks & Libraries',
      items: ['Express.js', 'Flask', '.NET', 'RenPy', 'Unity']
    },
    { label: 'Databases', items: ['SQLite', 'MongoDB'] },
    {
      label: 'DevOps & Tools',
      items: ['Git', 'GitHub Actions', 'Jenkins', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'Selenium', 'Vercel', 'Caddy']
    },
    {
      label: 'Cloud & Infrastructure',
      items: ['AWS', 'OCI', 'Terraform']
    },
    {
      label: 'Runtime Environments',
      items: ['Node.js', 'Bun', 'Cloudflare Workers']
    },
    {
      label: 'Soft Skills',
      items: ['Leadership', 'Adaptability', 'Problem Solving', 'Team Player']
    }
  ],
  internship: {
    role: 'Automation Tester',
    organization: 'HCL Technologies',
    dates: 'May 2021 - Aug 2022',
    href: 'https://hcltech.com',
    bullets: [
      'Tested website functionality with test suites and reviewed application code for errors.',
      'Worked with Selenium WebDriver using Python 3 and Java.',
      'Consolidated bug reports and submitted them for review.'
    ],
    tech: ['Python', 'Excel', 'Networking', 'HTML5', 'CSS', 'JavaScript']
  },
  projects: [
    {
      name: 'osu-stats-embed',
      description:
        'Embeds osu! stats on GitHub or any website, including country rank, hours played, current pp, and accuracy.',
      details:
        'Built on the osu! API and hosted on a serverless Vercel instance using TypeScript and REST methodologies.',
      tech: ['Vercel', 'SVG positioning', 'REST', 'TypeScript']
    },
    {
      name: 'Clips (formerly Sd3xV)',
      description:
        'Self-hosted image and clip sharing platform intended for one-to-many sharing.',
      details:
        'Optimizes and encodes videos and images using ffmpeg, with workflow tuned for arm64 platforms.',
      tech: ['Docker', 'React', 'Next.js', 'PostgreSQL']
    },
    {
      name: 'LapKeys',
      description:
        'Changes refresh rate and brightness to set amounts with a button press on laptops without software keybind support.',
      details:
        'Made with .NET 8 using WMIBrightness service and WinUI 3 for a Windows 11-like UI.',
      tech: ['.NET', 'C#']
    }
  ],
  certifications: [
    { name: 'AWS Cloud Practitioner', date: 'May 2026' },
    { name: 'CompTIA Security+', date: 'January 2026' },
    { name: 'Game Design and Development with Unity', date: 'December 2025' },
    { name: 'Cloud Computing (NPTEL)', date: 'October 2024' },
    { name: 'The World of Computer Networking (Udemy)', date: 'November 2023' },
    { name: 'The Bits and Bytes of Computer Networking', date: 'April 2023' },
    { name: 'Selenium Certification (HCL E-Box)', date: 'March 2022' }
  ],
  achievements: [
    { name: 'Smart India Hackathon (SIH)', detail: 'University Qualifier', date: 'September 2025' },
    { name: 'The Encrypted Warfare Hackathon', detail: 'Team #1', date: 'March 2025' },
    { name: 'Chakravyuh CTF', detail: 'Team and Individual Rank #1', date: 'February 2025' },
    { name: 'RCS CTF 2024', detail: 'Team Rank #1', date: 'March 2024' },
    { name: 'Codeblocks Hackathon', detail: 'Team Rank #5', date: 'February 2024' }
  ],
  education: {
    school: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'Bachelor of Technology in CSE',
    cgpa: '7.94',
    dates: 'Sep 2022 - May 2026'
  }
};

export default function Resume() {
  return (
    <Base
      title="Resume // Shaun Beniel Edwin"
      tagline="Resume. But inverted."
      primaryColor="cyan"
      secondaryColor="purple"
    >
      <style>{`
        @page {
          size: A4;
          margin: 0;
        }

        .resume-a4 {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .resume-a4 *,
        .resume-a4 *::before,
        .resume-a4 *::after {
          box-sizing: border-box;
        }

        @media print {
          html,
          body {
            background: #fff !important;
          }

          body * {
            visibility: hidden;
          }

          .resume-a4,
          .resume-a4 * {
            visibility: visible;
          }

          .resume-a4 {
            position: absolute;
            top: 0;
            left: 0;
            width: 210mm !important;
            height: 297mm !important;
            margin: 0 !important;
            border: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            overflow: hidden !important;
            --resume-bg: #ffffff !important;
            --resume-surface: #ffffff !important;
            --resume-text: #000000 !important;
            --resume-muted: #1f1f1f !important;
            --resume-border: #bdbdbd !important;
            --resume-accent: #000000 !important;
            background: #ffffff !important;
            color: #000000 !important;
          }

          .resume-actions {
            display: none !important;
          }
        }
      `}</style>

      <div className="resume-actions my-8">
        <ResumeActions pdfHref={resumePdf} />
      </div>

      <div className="pb-6">
        <article
          className="resume-a4 mx-auto aspect-[210/297] w-full max-w-[210mm] rounded-sm border p-[9mm] text-[12px] leading-[1.36] shadow-2xl"
          style={{
            '--resume-bg': resumeTheme.background,
            '--resume-surface': resumeTheme.surface,
            '--resume-text': resumeTheme.text,
            '--resume-muted': resumeTheme.muted,
            '--resume-border': resumeTheme.border,
            '--resume-accent': resumeTheme.accent,
            background: 'var(--resume-bg)',
            borderColor: 'var(--resume-border)',
            color: 'var(--resume-text)'
          }}
        >
          <ResumeHeader />

          <ResumeSection title="Skills">
            <div className="grid grid-cols-2 gap-x-5 gap-y-1.5">
              {resume.skills.map((group) => (
                <SkillGroup key={group.label} group={group} />
              ))}
            </div>
          </ResumeSection>

          <div className="grid grid-cols-[1.35fr_0.85fr] gap-[6mm]">
            <main>
              <ResumeSection title="Internship">
                <ItemHeader
                  title={resume.internship.organization}
                  href={resume.internship.href}
                  meta={`${resume.internship.role} / ${resume.internship.dates}`}
                />
                <BulletList items={resume.internship.bullets} />
                <InlineMeta label="Tech" items={resume.internship.tech} />
              </ResumeSection>

              <ResumeSection title="Projects">
                {resume.projects.map((project) => (
                  <div key={project.name} className="mb-4 last:mb-0">
                    <ItemHeader title={project.name} />
                    <p className="m-0" style={{ color: 'var(--resume-muted)' }}>
                      {project.description}
                    </p>
                    <p className="mt-1 mb-0" style={{ color: 'var(--resume-muted)' }}>
                      {project.details}
                    </p>
                    <InlineMeta label="Tech" items={project.tech} />
                  </div>
                ))}
              </ResumeSection>
            </main>

            <aside>
              <ResumeSection title="Education">
                <ItemHeader
                  title={resume.education.school}
                  meta={`${resume.education.location} / ${resume.education.dates}`}
                />
                <p className="m-0" style={{ color: 'var(--resume-muted)' }}>
                  {resume.education.degree}; CGPA: {resume.education.cgpa}
                </p>
              </ResumeSection>

              <ResumeSection title="Courses and Certifications">
                <DatedList items={resume.certifications} />
              </ResumeSection>

              <ResumeSection title="Achievements">
                <DatedList items={resume.achievements} />
              </ResumeSection>
            </aside>
          </div>
        </article>
      </div>
    </Base>
  );
}

function ResumeHeader() {
  return (
    <header className="mb-5 border-b pb-4" style={{ borderColor: 'var(--resume-border)' }}>
      <h2 className="m-0 text-[30px] leading-none font-bold" style={{ color: 'var(--resume-text)' }}>
        {resume.name}
      </h2>
      <p className="mt-2 mb-3 text-[12px]" style={{ color: 'var(--resume-muted)' }}>
        {resume.headline}
      </p>
      <ul className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-1 p-0">
        {resume.contact.map((item) => (
          <li key={item.label}>
            <span className="font-semibold" style={{ color: 'var(--resume-text)' }}>
              {item.label}:{' '}
            </span>
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{ color: 'var(--resume-muted)' }}
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 mb-0" style={{ color: 'var(--resume-muted)' }}>
        {resume.summary}
      </p>
    </header>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section className="mb-4 last:mb-0">
      <h3
        className="mt-0 mb-2 border-b pb-1 text-[12px] leading-tight font-bold tracking-[0.14em] uppercase"
        style={{ color: 'var(--resume-accent)', borderColor: 'var(--resume-border)' }}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}

function SkillGroup({ group }) {
  return (
    <p className="m-0" style={{ color: 'var(--resume-muted)' }}>
      <strong style={{ color: 'var(--resume-text)' }}>{group.label}:</strong>{' '}
      {group.items.join(', ')}
    </p>
  );
}

function ItemHeader({ title, href, meta }) {
  const titleContent = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--resume-text)' }}>
      {title}
    </a>
  ) : (
    title
  );

  return (
    <div className="mb-1">
      <h4 className="m-0 text-[13px] leading-snug font-semibold" style={{ color: 'var(--resume-text)' }}>
        {titleContent}
      </h4>
      {meta ? (
        <p className="m-0 text-[10px]" style={{ color: 'var(--resume-muted)' }}>
          {meta}
        </p>
      ) : null}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="m-0 list-disc pl-4" style={{ color: 'var(--resume-muted)' }}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function InlineMeta({ label, items }) {
  return (
    <p className="mt-1 mb-0 text-[10px]" style={{ color: 'var(--resume-muted)' }}>
      <strong style={{ color: 'var(--resume-text)' }}>{label}:</strong> {items.join(', ')}
    </p>
  );
}

function DatedList({ items }) {
  return (
    <ul className="m-0 list-none p-0" style={{ color: 'var(--resume-muted)' }}>
      {items.map((item) => (
        <li key={`${item.name}-${item.date}`} className="mb-2 last:mb-0">
          <span className="font-semibold" style={{ color: 'var(--resume-text)' }}>
            {item.name}
          </span>
          {item.detail ? <span> / {item.detail}</span> : null}
          <br />
          <span className="text-[10px]">{item.date}</span>
        </li>
      ))}
    </ul>
  );
}
