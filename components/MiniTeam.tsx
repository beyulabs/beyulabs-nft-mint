import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { projectTeam } from "../pages/team";
import { SocialInfo, SocialPlatform, TeamMemberInfo } from "../types/common";

const MiniTeam = () => {
  const socialIcons = (socialMedia: SocialInfo[]) => {
    return socialMedia.map((social: SocialInfo) => {
      let icon = null;
      let baseUrl = null;

      switch (social.platform) {
        case SocialPlatform.twitter:
          icon = (
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-4 sm:w-6 hover:text-teal-400"
            />
          );
          baseUrl = "https://twitter.com";
          break;

        case SocialPlatform.github:
          icon = (
            <FontAwesomeIcon
              icon={faGithub}
              className="w-4 sm:w-6 hover:text-teal-400"
            />
          );
          baseUrl = "https://github.com";
          break;

        case SocialPlatform.linkedin:
          icon = (
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-4 sm:w-6 hover:text-teal-400"
            />
          );
          baseUrl = "https://www.linkedin.com/in/";
          break;

        default:
          break;
      }

      return (
        <li
          key={social.platform}
          className="mx-2 origin-center hover:scale-150 hover:rotate-12"
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
  };

  const displayTeam = () => {
    return projectTeam.map((member: TeamMemberInfo) => {
      return (
        <div
          key={member.name}
          className="text-center mb-8 px-12 w-full md:w-1/2 lg:w-1/4 lg:px-6"
        >
          <div className="mb-4 border-4 border-teal-400 rounded-full shadow-xl">
            {member.image}
          </div>
          <h3 className="text-2xl font-medium mb-0">{member.name}</h3>
          <p className="text-lg mb-1">{member.job}</p>
          <ul className="flex flex-row mb-8 justify-center">
            {member.skills.map((skill) => {
              return (
                <li key={skill} className="px-2 py-1 mx-1 rounded bg-pink-200">
                  {skill}
                </li>
              );
            })}
          </ul>
          <ul className="mb-4 flex justify-center">
            {socialIcons(member.socialMedia)}
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="m-auto p-4 flex flex-col items-center max-w-xs md:max-w-screen-sm md:flex-row md:items-start md:justify-around md:flex-wrap lg:max-w-full">
      {displayTeam()}
    </div>
  );
};

export default MiniTeam;
