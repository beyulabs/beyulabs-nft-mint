import Image from "next/image";

import githubLogo from "../public/github-logo.svg";
import twitterLogo from "../public/twitter-logo.svg";

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
          <Image
            src={twitterLogo}
            width={18}
            height={18}
            alt={social.platform}
            className="hover:fill-sky-700"
          />
        );
        baseUrl = "https://twitter.com";
        break;

      case SocialPlatform.github:
        icon = (
          <Image
            src={githubLogo}
            width={18}
            height={18}
            alt={social.platform}
            className="hover:fill-sky-700"
          />
        );
        baseUrl = "https://github.com";

      default:
        break;
    }

    return (
      <li key={social.platform} className="mr-2 last:mr-0">
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
    <div className="flex flex-row items-center">
      <div className="flex flex-col items-center w-1/4">
        <div className="w-full mb-4 border-8 border-stone-50 rounded-full shadow-xl">
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
