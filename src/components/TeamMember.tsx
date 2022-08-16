import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SocialInfo, SocialPlatform, TeamMemberInfo } from '../types/common';

interface TeamMemberProps {
  teamMember: TeamMemberInfo;
}

const TeamMember = ({ teamMember }: TeamMemberProps) => {
  const { name, job, description, image, socialMedia } = teamMember;

  const socialIcons = socialMedia.map((social: SocialInfo) => {
    let icon = null;
    let baseUrl = null;

    switch (social.platform) {
      case SocialPlatform.twitter:
        icon = (
          <FontAwesomeIcon
            icon={faTwitter as IconProp}
            className="w-4 sm:w-6 hover:text-teal-400"
          />
        );
        baseUrl = 'https://twitter.com';
        break;

      case SocialPlatform.github:
        icon = (
          <FontAwesomeIcon
            icon={faGithub as IconProp}
            className="w-4 sm:w-6 hover:text-teal-400"
          />
        );
        baseUrl = 'https://github.com';
        break;

      case SocialPlatform.linkedin:
        icon = (
          <FontAwesomeIcon
            icon={faLinkedin as IconProp}
            className="w-4 sm:w-6 hover:text-teal-400"
          />
        );
        baseUrl = 'https://www.linkedin.com/in/';
        break;

      default:
        break;
    }

    return (
      <li
        key={`${name}-${social.platform}`}
        className="mr-2 last:mr-0 origin-center hover:scale-150 hover:rotate-12"
      >
        <a
          href={`${baseUrl}/${social.username}`}
          rel="nofollow noreferrer"
          target="_blank"
        >
          {icon}
        </a>
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start">
      <div className="flex flex-col items-center w-1/2 mb-4 sm:w-1/3 sm:max-w-xs">
        <div className="w-full sm:w-100 lg:max-w-xs mb-2 border-4 border-teal-400 rounded-full shadow-xl">
          {image}
        </div>
        <ul className="flex justify-evenly w-1/3">{socialIcons}</ul>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <p className="mb-1 text-4xl">{name}</p>
        <p className="mb-4 text-xl">{job}</p>
        <p className="mb-2 max-w-2xl">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
