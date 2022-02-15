import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { SocialInfo, SocialPlatform, TeamMemberInfo } from "../types/common";

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
          <FontAwesomeIcon icon={faTwitter} className="hover:text-teal-400" />
        );
        baseUrl = "https://twitter.com";
        break;

      case SocialPlatform.github:
        icon = (
          <FontAwesomeIcon icon={faGithub} className="hover:text-teal-400" />
        );
        baseUrl = "https://github.com";

      default:
        break;
    }

    return (
      <li
        key={social.platform}
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
    <div className="flex flex-row">
      <div className="flex flex-col items-center w-2/5">
        <div className="w-full mb-2 border-8 border-teal-400 rounded-full shadow-xl">
          {image}
        </div>
        <ul className="flex justify-evenly w-1/3">{socialIcons}</ul>
      </div>
      <div className="ml-12">
        <p className="mb-1 text-4xl">{name}</p>
        <p className="mb-2 text-xl">{job}</p>
        <p className="mb-2 max-w-2xl">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
