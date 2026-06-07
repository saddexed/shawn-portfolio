import { Inter } from 'next/font/google';
import Base from '../../layouts/Base';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

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
  muted: '#a3a3a3',
  border: '#27272a',
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
    'B.Tech CSE graduate from Lovely Professional University with experience in automation testing, security events, cloud tooling, and developer-focused projects.',
  skills: [
    {
      label: 'Languages',
      items: ['Bash', 'PowerShell', 'Python', 'C#', 'C++', 'JavaScript', 'TypeScript', 'Node', 'Bun']
    },
    {
      label: 'DevOps & Tools',
      items: ['Git', 'GitHub', 'Jenkins', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'Selenium', 'Vercel', 'Caddy']
    },
    {
      label: 'Frameworks & Libraries',
      items: ['Express.js', 'Flask', '.NET', 'RenPy', 'Unity']
    },
    { label: 'Databases', items: ['SQLite', 'MongoDB'] },
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
  ],
  achievements: [
    { name: 'Smart India Hackathon (SIH)', detail: 'National Qualifier', date: 'September 2025' },
    { name: 'The Encrypted Warfare Hackathon', detail: 'Team #1', date: 'March 2025' },
    { name: 'Chakravyuh CTF', detail: 'Team Rank #1', date: 'February 2025' },
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
            padding: 10mm !important;
            font-size: 11px !important;
            line-height: 1.35 !important;
            --resume-bg: #ffffff !important;
            --resume-surface: #ffffff !important;
            --resume-text: #000000 !important;
            --resume-muted: #4b5563 !important;
            --resume-border: #e5e7eb !important;
            --resume-accent: #0f766e !important;
            background: #ffffff !important;
            color: #000000 !important;
          }

          .resume-a4 h2 {
            font-size: 28px !important;
          }

          .resume-a4 p,
          .resume-a4 li,
          .resume-a4 span,
          .resume-a4 a {
            font-size: 10.5px !important;
          }

          .resume-header-headline {
            font-size: 11px !important;
            margin-top: 4px !important;
            margin-bottom: 12px !important;
          }

          .resume-header-contact {
            font-size: 10px !important;
            gap-y: 4px !important;
          }

          .resume-section-title {
            font-size: 10.5px !important;
            margin-bottom: 8px !important;
            padding-bottom: 4px !important;
          }

          .skill-group-label {
            font-size: 8.5px !important;
          }

          .resume-item-title {
            font-size: 11.5px !important;
          }

          .resume-item-date {
            font-size: 9.5px !important;
          }

          .resume-item-meta {
            font-size: 9.5px !important;
            margin-bottom: 4px !important;
          }

          .inline-meta-label {
            font-size: 8.5px !important;
          }

          .dated-list-detail {
            font-size: 9.5px !important;
          }

          .dated-list-date {
            font-size: 8.5px !important;
          }

          .resume-actions {
            display: none !important;
          }
        }
      `}</style>


      <div className="pb-12">
        <article
          className={`${inter.className} resume-a4 mx-auto w-full max-w-[820px] rounded-2xl border p-6 md:p-10 text-base leading-relaxed shadow-2xl transition-all`}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {resume.skills.map((group) => (
                <SkillGroup key={group.label} group={group} />
              ))}
            </div>
          </ResumeSection>

          <div className="grid grid-cols-1 md:grid-cols-[1.35fr_0.85fr] gap-8">
            <main className="flex flex-col gap-6">
              <ResumeSection title="Internship">
                <ResumeItem
                  title={resume.internship.organization}
                  href={resume.internship.href}
                  subTitle={resume.internship.role}
                  date={resume.internship.dates}
                  tech={resume.internship.tech}
                >
                  <BulletList items={resume.internship.bullets} />
                </ResumeItem>
              </ResumeSection>

              <ResumeSection title="Projects">
                <div className="flex flex-col gap-6">
                  {resume.projects.map((project) => (
                    <ResumeItem
                      key={project.name}
                      title={project.name}
                      tech={project.tech}
                    >
                      <p className="m-0 text-base leading-relaxed" style={{ color: 'var(--resume-muted)' }}>
                        {project.description}
                      </p>
                      <p className="mt-1 mb-0 text-base leading-relaxed" style={{ color: 'var(--resume-muted)' }}>
                        {project.details}
                      </p>
                    </ResumeItem>
                  ))}
                </div>
              </ResumeSection>
            </main>

            <aside className="flex flex-col gap-6">
              <ResumeSection title="Education">
                <ResumeItem
                  title={resume.education.school}
                  subTitle={resume.education.degree}
                  date={resume.education.dates}
                  location={resume.education.location}
                  stacked
                >
                  <p className="m-0 text-base" style={{ color: 'var(--resume-muted)' }}>
                    CGPA: <strong style={{ color: 'var(--resume-text)' }}>{resume.education.cgpa}</strong>
                  </p>
                </ResumeItem>
              </ResumeSection>

              <ResumeSection title="Courses & Certifications">
                <DatedList items={resume.certifications} />
              </ResumeSection>

              <ResumeSection title="Achievements">
                <DatedList items={resume.achievements} />
              </ResumeSection>
            </aside>
          </div>
        </article>

        <div className="resume-actions mt-12 flex flex-col items-center gap-3 text-center">
          <a
            href={resumePdf}
            download
            className="text-primary hover:bg-hover hover:text-primary inline-flex items-center justify-center cursor-pointer rounded-lg px-3 py-2.5 text-base leading-6 font-semibold no-underline transition-all duration-200"
          >
            <i className="ri-download-line mr-2"></i>
            Want a downloadable whitepaper version to read?
          </a>
        </div>
      </div>
    </Base>
  );
}

function ResumeHeader() {
  const contactIcons = {
    LinkedIn: 'ri-linkedin-box-fill',
    GitHub: 'ri-github-fill',
    Email: 'ri-mail-fill',
    Mobile: 'ri-phone-fill'
  };

  return (
    <header className="mb-6 border-b pb-6" style={{ borderColor: 'var(--resume-border)' }}>
      <h2 className="resume-header-name m-0 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--resume-text)' }}>
        {resume.name}
      </h2>
      <p className="resume-header-headline mt-2 mb-4 text-sm font-bold tracking-wider uppercase" style={{ color: 'var(--resume-accent)' }}>
        {resume.headline}
      </p>
      <ul className="resume-header-contact m-0 grid list-none grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 p-0 text-sm">
        {resume.contact.map((item) => {
          const iconClass = contactIcons[item.label] || 'ri-link';
          return (
            <li key={item.label} className="flex items-center gap-2">
              <i className={`${iconClass} text-sm`} style={{ color: 'var(--resume-accent)' }}></i>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="hover:underline"
                style={{ color: 'var(--resume-muted)' }}
              >
                {item.value}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 mb-0 text-base leading-relaxed" style={{ color: 'var(--resume-muted)' }}>
        {resume.summary}
      </p>
    </header>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section className="mb-2 last:mb-0">
      <h3
        className="resume-section-title mt-0 mb-4 border-b pb-2 text-sm font-extrabold tracking-[0.18em] uppercase"
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
    <div className="mb-3 text-base leading-normal">
      <span className="skill-group-label font-bold block uppercase tracking-wider text-xs mb-0.5" style={{ color: 'var(--resume-accent)' }}>
        {group.label}
      </span>
      <span style={{ color: 'var(--resume-muted)' }}>
        {group.items.join(', ')}
      </span>
    </div>
  );
}

function ResumeItem({ title, subTitle, date, href, location, children, tech, stacked }) {
  const titleContent = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
      style={{ color: 'var(--resume-text)' }}
    >
      {title}
    </a>
  ) : (
    title
  );

  if (stacked) {
    return (
      <div className="mb-4 last:mb-0">
        <h4 className="resume-item-title m-0 text-base font-bold tracking-tight" style={{ color: 'var(--resume-text)' }}>
          {titleContent}
        </h4>
        <div className="resume-item-meta flex flex-wrap gap-x-3 gap-y-0.5 text-sm font-medium mt-1 mb-2" style={{ color: 'var(--resume-muted)' }}>
          {subTitle && (
            <span className="italic" style={{ color: 'var(--resume-text)' }}>
              {subTitle}
            </span>
          )}
          {location && <span>• {location}</span>}
          {date && (
            <span className="resume-item-date font-semibold" style={{ color: 'var(--resume-accent)' }}>
              • {date}
            </span>
          )}
        </div>
        {children}
        {tech && <InlineMeta label="Tech" items={tech} />}
      </div>
    );
  }

  return (
    <div className="mb-3 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-2">
        <h4 className="resume-item-title m-0 text-base font-bold tracking-tight" style={{ color: 'var(--resume-text)' }}>
          {titleContent}
        </h4>
        {date && (
          <span className="resume-item-date text-sm font-semibold shrink-0" style={{ color: 'var(--resume-accent)' }}>
            {date}
          </span>
        )}
      </div>
      {(subTitle || location) && (
        <div className="resume-item-meta flex justify-between items-baseline text-sm font-medium mt-0.5 mb-2" style={{ color: 'var(--resume-muted)' }}>
          {subTitle && (
            <span className="italic" style={{ color: 'var(--resume-text)' }}>
              {subTitle}
            </span>
          )}
          {location && <span>{location}</span>}
        </div>
      )}
      {children}
      {tech && <InlineMeta label="Tech" items={tech} />}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="m-0 list-disc pl-5 text-base leading-relaxed" style={{ color: 'var(--resume-muted)' }}>
      {items.map((item) => (
        <li key={item} className="mb-1 last:mb-0">
          {item}
        </li>
      ))}
    </ul>
  );
}

function InlineMeta({ label, items }) {
  return (
    <p className="mt-2 mb-0 text-sm leading-tight" style={{ color: 'var(--resume-muted)' }}>
      <span className="inline-meta-label font-bold uppercase tracking-wider text-xs mr-1.5" style={{ color: 'var(--resume-accent)' }}>
        {label}:
      </span>
      {items.join(', ')}
    </p>
  );
}

function DatedList({ items }) {
  return (
    <ul className="m-0 list-none p-0" style={{ color: 'var(--resume-muted)' }}>
      {items.map((item) => (
        <li key={`${item.name}-${item.date}`} className="mb-3 last:mb-0 flex flex-col text-base leading-tight">
          <span className="font-semibold" style={{ color: 'var(--resume-text)' }}>
            {item.name}
          </span>
          <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1 text-sm font-medium w-full">
            {item.detail ? (
              <span className="dated-list-detail" style={{ color: 'var(--resume-accent)' }}>
                {item.detail}
              </span>
            ) : null}
            {item.detail && <span style={{ color: 'var(--resume-muted)' }}>•</span>}
            <span className="dated-list-date text-xs font-bold uppercase" style={{ color: 'var(--resume-muted)' }}>
              {item.date}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
