import Base from '../../layouts/Base';

export const metadata = {
  title: 'Uses',
  description:
    'A small starter uses page for tools, apps, hardware, and services.',
  openGraph: {
    title: 'Uses // Shaun Beniel Edwin',
    url: '/uses',
    images: ['/static/images/uses-bw.jpg']
  }
};

const categories = [
  {
    name: 'Coding',
    items: [
      {
        title: 'VS Code',
        description: 'The mother of all forks',
        url: 'https://code.visualstudio.com'
      },
      {
        title: 'Antigravity',
        description: 'Because Google do be generous like that',
        url: 'https://antigravity.google/'
      },
      {
        title: 'OpenCode',
        description: 'Pretty good if you ask me - use with ollama for local LLM inference',
        url: 'https://opencode.ai/'
      },
      {
        title: 'GitHub',
        description: 'Great CI/CD and Version Control, TERRIBLE Security and Infrastructure apparently',
        url: 'https://github.com/saddexed'
      },
      {
        title: 'GitHub Copilot',
        description: 'Trained on open source so you KNOW that C++ function is at least 11 years old',
        url: 'https://github.com/features/copilot'
      },
      {
        title: 'v0.dev',
        description: 'AI powered frontend generation (and a gateway to credit shortage hell)',
        url: 'https://v0.dev/'
      },
    ]
  },
  {
    name: 'Cloud, Tools and Distros',
    items: [
      {
        title: 'Oracle Cloud Free Tier',
        description: 'Free Tier goes INSANELY hard',
        url: 'https://www.oracle.com/cloud/free'
      },
      {
        title: 'AWS',
        description: 'AWS is AWS',
        url: 'https://aws.amazon.com'
      },
      {
        title: 'Cloudflare',
        description: 'Free Tier has Domain management, Advanced DNS configuration, WAF, Website Deployment... what more could you ask for?',
        url: 'https://www.cloudflare.com'
      },
      {
        title: 'Caddy',
        description: 'Reverse proxy of the century for the "set it and forget it" developer + Automatic HTTPS (ACME + DNS)',
        url: 'https://caddy.com'
      },
      {
        title: 'Debian Linux',
        description: 'Debian turned my old laptop into a headless nas, filed my taxes,took my wife on a honeymoon for me and proceeded to shoot my dog for <a href="https://xkcd.com/1168/">failing a tar command</a>',
        url: 'https://www.debian.org'
      },
      {
        title: 'Docker',
        description: 'Docker saved my marriage while simultaneously getting me arrested for failing the docker-compose.yml file networking',
        url: 'https://www.docker.com'
      },
      {
        title: 'PowerToys',
        description: 'Windows 11 but I install 50 Minecraft QoL mods',
        url: 'https://learn.microsoft.com/en-us/windows/powertoys/'
      }
    ]
  },
  {
    name: 'Setup',
    items: [
      {
        title: 'HP Pavilion Gaming 15',
        description: '16GB RAM | RTX 3050 4GB Max-Q | FHD 144Hz.',
        url: ''
      },
      {
        title: 'Monitor',
        description: 'Legion R25F-30',
        url: 'https://support.lenovo.com/in/en/solutions/pd500705-lenovo-r25f-30-overview'
      },
      {
        title: 'Mouse',
        description: 'Rapoo VT 7 Gen-2 <span style="text-decoration: line-through;">VT0 was out of stock :(</span>',
        url: 'https://www.gloriousgaming.com/products/model-o-wireless'
      },
      {
        title: 'Keyboard',
        description: 'Cosmic Byte CB-GK-34 Firefly (Outemu Reds)',
        url: 'https://www.thecosmicbyte.com/product/cosmic-byte-cb-gk-34-firefly-hot-swappable-keyboard-with-outemu-red-switches/'
      },
      {
        title: 'Headphones',
        description: 'Buy me? :D',
        url: ''
      }
    ]
  }
];


export default function Uses() {
  const renderAll = () => {
    return categories.map((category) => {
      return (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item, index) => {
              return (
                <li key={`${category.name}-${item.title}-${index}`}>
                  <a href={item.url} target="_blank">
                    {item.title}
                  </a>
                  <span> - </span>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <Base
      title="Uses // Shaun Beniel Edwin"
      tagline="Tools. Apps. Gear."
      primaryColor="yellow"
      secondaryColor="pink"
    >
      <p
        dangerouslySetInnerHTML={{
          __html:
            'A incomplete list of things I own/use and some tools I&apos;d recommend. Nothing much to see here really.'
        }}
      />

      {renderAll()}
    </Base>
  );
}
