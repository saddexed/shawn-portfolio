import FeaturedProject from '../../components/FeaturedProject';
import { FeaturedProjects } from '../../components/FeaturedProjects';
import Base from '../../layouts/Base';

export const metadata = {
  title: 'Projects',
  description: `Collection of my projects`,
  openGraph: {
    title: 'Projects // Shaun Beniel Edwin',
    url: '/projects',
    images: ['/static/images/projects-bw.jpg']
  }
};

const items = [
  {
    year: '2026',
    projects: [
      {
        title: 'llogin2',
        description:
          'C# based cross-platform LPU captive portal login utility.',
        url: 'https://github.com/saddexed/llogin2',
        active: true,
        icon: 'home',
        stats: 'C#, Utility'
      },
      {
        title: 'clips',
        description:
          'A selfhosted chip sharing platform with ffmpeg integration.',
        url: 'https://github.com/saddexed/clips',
        active: true,
        icon: 'play',
        stats: 'Clip Sharing'
      }
    ]
  },
  {
    year: '2025',
    projects: [
      {
        title: 'LapKeys',
        description:
          'Refresh Rate and Brightness utility mapper for laptops without dedicated media keys.',
        url: 'https://github.com/saddexed/LapKeys',
        active: true,
        icon: 'desktop',
        stats: 'C#, Utility'
      },
      {
        title: 'osu-stats-card',
        description:
          'A dynamic stats card generator for displaying osu! profile data.',
        url: 'https://github.com/saddexed/osu-stats-card',
        active: true,
        icon: 'gamepad',
        stats: 'Stat card'
      },
      {
        title: 'Kavach',
        description:
          'Offline-first, zero-knowledge based Digital Identity Ecosystem.',
        url: 'https://kavach.ba3a.tech',
        active: true,
        icon: 'consent',
        stats: 'React Native, Security'
      }
    ]
  },
  {
    year: '2024',
    projects: [
      {
        title: 'llogin_legacy',
        description:
          'The earlier version of the login UI experiment before the current rewrite.',
        url: 'https://github.com/saddexed/llogin_legacy',
        active: true,
        icon: 'home',
        stats: 'Frontend'
      },
      {
        title: 'Prime-Player-Tweaks',
        description:
          'Tweaks and customization experiments for the Amazon Prime Video player.',
        url: 'https://github.com/saddexed/Prime-Player-Tweaks',
        active: true,
        icon: 'projects',
        stats: 'Browser tweaks'
      }
    ]
  }
];

const getTotalProjects = () => {
  let total = 0;  
  for (let i = 0; i < items.length; i++) total = total + items[i].projects.length;
  return total;
};

export default function Projects() {
  const renderFeatured = () => {
    const featured = [
      'llogin2',
      'LapKeys',
      'clips',
      'osu-stats-card',
      'Kavach'
    ];

    return items
      .map((item) => {
        return item.projects.filter((project) =>
          featured.includes(project.title)
        );
      })
      .filter((item) => {
        return item.length > 0;
      })
      .flat()
      .map((item) => {
        return <FeaturedProject key={item.url} project={item} />;
      });
  };

  const renderAll = () => {
    return items.map((item) => {
      return (
        <div key={item.year}>
          <h3>{item.year}</h3>
          <ul>
            {item.projects.map((project, index) => {
              return (
                <ProjectItem
                  key={`${item.year}-${project.title}-${index}`}
                  project={project}
                />
              );
            })}
          </ul>
        </div>
      );
    });
  };

  const description = `A display of <strong>${getTotalProjects()}</strong> of my decent projects from GitHub. Some windows tweaks here, some stat cards there, some random stuff in between. I wasn't very gunho on uploading stuff to github until the later half of 2025 so there's not much here at the moment.`;

  return (
    <Base
      title="Projects // Shaun Beniel Edwin"
      tagline="Code. Build. Fail. Weep. Repeat."
      primaryColor="cyan"
      secondaryColor="green"
    >
      <p dangerouslySetInnerHTML={{ __html: description }} />

      <h2>Featured Projects</h2>
      <FeaturedProjects>{renderFeatured()}</FeaturedProjects>

      <h2>All Projects</h2>
      {renderAll()}
    </Base>
  );
}

function ProjectItem(props) {
  const { project } = props;

  return (
    <li>
      <a href={project.url} target="_blank">
        {project.title}
      </a>
    </li>
  );
}
