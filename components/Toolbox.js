'use client';

import { motion } from 'framer-motion';

const tools = [
  { name: 'SQL', icon: 'ri-database-2-line', color: '#61DAFB' },
  { name: 'Scala', icon: 'ri-code-s-slash-line', color: '#F7DF1E' },
  { name: 'Kafka', icon: 'ri-node-tree', color: '#3178C6' },
  { name: 'Spark', icon: 'ri-sparkling-2-line', color: '#000000' },
  { name: 'Airflow', icon: 'ri-flow-chart', color: '#339933' },
  { name: 'Python', icon: 'ri-code-line', color: '#1572B6' },
  { name: 'Kubernetes', icon: 'ri-box-3-line', color: '#06B6D4' },
  { name: 'AWS', icon: 'ri-cloud-line', color: '#F24E1E' },
  { name: 'Flink', icon: 'ri-shuffle-line', color: '#007ACC' },
  { name: 'Snowflake', icon: 'ri-snowflake-line', color: '#FF6C37' }
];

export default function Toolbox() {
  return (
    <div className="mt-8">
      <h2>My Toolbox</h2>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-8">
        {tools.map((tool, index) => {
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-hover hover:bg-background group flex flex-col items-center justify-center rounded-xl p-4 transition-colors duration-300"
            >
              <div
                className="mb-2 scale-90 text-4xl transition-transform duration-300 group-hover:rotate-[360deg]"
                style={{ color: tool.color }}
              >
                <i className={`${tool.icon} text-[2.5rem] leading-none`} />
              </div>
              <span className="text-secondary text-center text-sm">
                {tool.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
