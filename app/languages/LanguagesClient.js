'use client';

import { motion } from 'framer-motion';

const tools = [
  // Languages
  { name: 'Bash', slug: 'bash', color: '#4EAA25', category: 'Languages' },
  { name: 'PowerShell', slug: 'powershell', color: '#5391FE', category: 'Languages' },
  { name: 'Python', slug: 'python', color: '#3776AB', category: 'Languages' },
  { name: 'C#', slug: 'csharp', color: '#239120', category: 'Languages' },
  { name: 'C++', slug: 'cplusplus', color: '#00599C', category: 'Languages' },
  { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E', category: 'Languages' },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6', category: 'Languages' },
  { name: 'Node.js', slug: 'nodedotjs', color: '#339933', category: 'Languages' },
  { name: 'Bun', slug: 'bun', color: '#FBF0DF', category: 'Languages' },

  // Frameworks & Libraries
  { name: 'Express.js', slug: 'express', color: '#FFFFFF', category: 'Frameworks & Libraries' },
  { name: 'Flask', slug: 'flask', color: '#FFFFFF', category: 'Frameworks & Libraries' },
  { name: '.NET', slug: 'dotnet', color: '#512BD4', category: 'Frameworks & Libraries' },
  { name: 'Ren\'Py', slug: 'ren-py', color: '#FF7F7F', category: 'Frameworks & Libraries' },
  { name: 'Unity', slug: 'unity', color: '#FFFFFF', category: 'Frameworks & Libraries' },

  // Databases
  { name: 'SQLite', slug: 'sqlite', color: '#003B57', category: 'Databases' },
  { name: 'MongoDB', slug: 'mongodb', color: '#47A248', category: 'Databases' },

  // DevOps & Tools
  { name: 'Git', slug: 'git', color: '#F05032', category: 'DevOps & Tools' },
  { name: 'GitHub', slug: 'github', color: '#2088FF', category: 'DevOps & Tools', variant: 'dark' },
  { name: 'Jenkins', slug: 'jenkins', color: '#D24939', category: 'DevOps & Tools' },
  { name: 'Kubernetes', slug: 'kubernetes', color: '#326CE5', category: 'DevOps & Tools' },
  { name: 'Helm', slug: 'helm', color: '#0F1689', category: 'DevOps & Tools' },
  { name: 'Prometheus', slug: 'prometheus', color: '#E6522C', category: 'DevOps & Tools' },
  { name: 'Grafana', slug: 'grafana', color: '#F46800', category: 'DevOps & Tools' },
  { name: 'Selenium', slug: 'selenium', color: '#43B02A', category: 'DevOps & Tools' },
  { name: 'Vercel', slug: 'vercel', color: '#FFFFFF', category: 'DevOps & Tools' },
  { name: 'Caddy', slug: 'caddy', color: '#00A3E0', category: 'DevOps & Tools' },

  // Cloud & Infrastructure
  { name: 'AWS', slug: 'aws', color: '#FF9900', category: 'Cloud & Infrastructure' },
  { name: 'OCI', slug: 'oracle', color: '#F80000', category: 'Cloud & Infrastructure' },
  { name: 'Terraform', slug: 'terraform', color: '#7B42BC', category: 'Cloud & Infrastructure' },

  // Runtime Environments
  { name: 'Node.js', slug: 'nodedotjs', color: '#339933', category: 'Runtime Environments' },
  { name: 'Bun', slug: 'bun', color: '#FBF0DF', category: 'Runtime Environments' },
  { name: 'Cloudflare Workers', slug: 'cloudflare', color: '#F38020', category: 'Runtime Environments' }
];

export default function LanguagesClient() {
  const categories = [
    'Languages',
    'Frameworks & Libraries',
    'Databases',
    'DevOps & Tools',
    'Cloud & Infrastructure',
    'Runtime Environments'
  ];

  return (
    <div className="mt-4 text-justify">
      <p className="text-secondary text-base mb-8">
        A list of languages, frameworks, and core technologies that I work with or, am somewhat familiar with thanks to ai and agentic development.
      </p>

      {categories.map((category) => {
        const categoryTools = tools.filter((tool) => tool.category === category);
        const count = categoryTools.length;
        const colWidthClass = count <= 4
          ? 'w-[calc(33.33%-16px)] md:w-[calc(25%-18px)]'
          : 'w-[calc(25%-18px)] md:w-[calc(20%-19.2px)]';

        return (
          <div key={category} className="mb-10">
            <h3 className="text-primary text-xl font-bold mb-4 tracking-wide border-b border-hover pb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-6">
              {categoryTools.map((tool, index) => {
                const variant = tool.variant || 'default';
                const iconUrl = `https://thesvg.org/icons/${tool.slug}/${variant}.svg`;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className={`${colWidthClass} bg-hover/30 border border-transparent hover:border-green/30 hover:bg-green/10 group flex flex-col items-center justify-center rounded-xl p-4 transition-all duration-300 shadow-sm cursor-none`}
                  >
                    <div className="mb-3 scale-90 transition-transform duration-550 group-hover:rotate-[360deg] flex items-center justify-center p-2 rounded-lg">
                      <img
                        src={iconUrl}
                        alt={`${tool.name} icon`}
                        className="w-15 h-15 min-w-15 max-w-15 select-none pointer-events-none transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-secondary group-hover:text-primary text-center text-sm font-medium transition-colors duration-300">
                      {tool.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
