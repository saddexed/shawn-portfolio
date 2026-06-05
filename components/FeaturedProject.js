'use client';

import { useRef } from 'react';

import consentIcon from '../public/static/icons/consent.json';
import desktopIcon from '../public/static/icons/desktop.json';
import gamepadIcon from '../public/static/icons/gamepad.json';
import homeIcon from '../public/static/icons/home.json';
import playIcon from '../public/static/icons/play.json';
import projectsIcon from '../public/static/icons/projects.json';
import { AnimatedIcon } from './AnimatedIcon';
import { HoverAnimation } from './HoverAnimation';

const icons = {
  consent: consentIcon,
  desktop: desktopIcon,
  gamepad: gamepadIcon,
  home: homeIcon,
  play: playIcon,
  projects: projectsIcon
};

export default function FeaturedProject(props) {
  const { project } = props;

  const icon = icons[project.icon];
  const iconRef = useRef();

  return (
    <a
      href={project.url}
      target="_blank"
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
      className="flex w-auto rounded-lg border-0 no-underline hover:opacity-100 md:w-60"
    >
      <HoverAnimation
        id={props.index}
        layoutId="featuredProjects"
        className="relative w-full p-5"
      >
        <AnimatedIcon
          lottieRef={iconRef}
          animationData={icon}
          loop={false}
          autoplay={false}
          className="mb-2.5"
        />
        <div className="flex-[1_1_auto]">
          <p className="text-primary m-0 text-lg">{project.title}</p>
          <p className="text-secondary m-0 leading-6">{project.description}</p>
          {project.stats && (
            <p className="text-primary my-1.25 mt-1.25 inline-block text-xs font-medium tracking-[0.075rem] uppercase">
              {project.stats}
            </p>
          )}
        </div>
      </HoverAnimation>
    </a>
  );
}
