import type { NextPage } from "next";
import Image from "next/image";

import ryanProfile from "../public/ryan-profile.png";
import benProfile from "../public/ben-profile.png";
import milesProfile from "../public/miles-profile.png";
import beyuLabsLogotype from "../public/beyu-labs-logotype.png";

import { SocialPlatform, TeamMemberInfo } from "../types/common";

import TeamMember from "../components/TeamMember";

export const projectTeam: TeamMemberInfo[] = [
  {
    name: "Ben",
    job: "business & product",
    image: (
      <Image
        className="rounded-full min-w-xs"
        width={175}
        height={175}
        src={benProfile}
        alt="Ben's profile pic"
        layout="responsive"
      />
    ),
    socialMedia: [
      {
        platform: SocialPlatform.twitter,
        username: "beyuworldwide",
      },
    ],
    description:
      "Ben is a serial entrepreneur with a background in engineering and a passion for creating community through fun, value-packed events. As founder of BeYu Labs - a web3 startup focused on empowering web3 entrepreneurship through connections and events - Ben aims to explore the unique opportunities and potential presented by the rise of NFT culture and the future of the internet as we know it. Ben spends his free time playing guitar, skateboarding, traveling and researching overpriced JPEGs.",
  },
  {
    name: "Miles",
    job: "product & community",
    image: (
      <Image
        className="rounded-full min-w-xs"
        width={175}
        height={175}
        src={milesProfile}
        alt="Miles' profile pic"
        layout="responsive"
      />
    ),
    socialMedia: [
      {
        platform: SocialPlatform.twitter,
        username: "MusingsOf_Miles",
      },
    ],
    description:
      "Product Manager & Brand Evangelist. Miles is a serial Startup contributor with over 5 years in driving high performing teams. Already a miner, gamer, and FunkoFan; it was digital horse racing that hooked him into NFTs *cough* Zed Run.",
  },
  {
    name: "Ryan",
    job: "code",
    image: (
      <Image
        className="rounded-full min-w-xs"
        width={175}
        height={175}
        src={ryanProfile}
        alt="Ryan's profile pic"
        layout="responsive"
      />
    ),
    socialMedia: [
      {
        platform: SocialPlatform.twitter,
        username: "ryan_c_harris",
      },
      {
        platform: SocialPlatform.github,
        username: "ryancharris",
      },
    ],
    description:
      "Ryan is currently a Senior Engineer at dbt Labs and has worked with some of Philadelphia’s most successful startups. As a filmmaker turned engineer, he is passionate about helping others transition into tech and creates educational content on Egghead. When he’s not coding, Ryan enjoys making music and playing with his dog, Banjo.",
  },
];

const Team: NextPage = () => {
  const profiles = projectTeam.map((member, index) => {
    return (
      <div
        key={`member-wrapper-${index}`}
        className="bg-stone-50 rounded-xl shadow p-4 mb-10 last:mb-0"
      >
        <TeamMember key={`member-${index}`} teamMember={member} />
      </div>
    );
  });

  return (
    <section className="mt-4 min-h-screen">
      <div className="m-auto">
        <div className="flex justify-center mb-8">
          <Image
            width={500}
            height={150}
            quality={85}
            src={beyuLabsLogotype}
            alt="Ben's profile pic"
            className="drop-shadow-lg"
          />
        </div>
        {profiles}
      </div>
    </section>
  );
};

export default Team;
