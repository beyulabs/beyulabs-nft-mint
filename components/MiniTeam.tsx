import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

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
        <div key={member.name} className="w-1/4 text-center">
          <div className="mb-6 border-4 border-teal-400 rounded-full shadow-xl">
            {member.image}
          </div>
          <h3 className="text-2xl font-medium mb-0">{member.name}</h3>
          <p className="text-lg mb-4">{member.job}</p>
          <ul className="flex justify-center">
            {socialIcons(member.socialMedia)}
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="px-4 py-8 flex flex-col md:flex-row justify-around">
      {displayTeam()}
    </div>
  );
};

export default MiniTeam;