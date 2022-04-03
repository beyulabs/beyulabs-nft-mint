import type { NextPage } from "next";
import Image from "next/image";

import ryanProfile from "../public/ryan-profile.png";
import benProfile from "../public/ben-profile.png";
import milesProfile from "../public/miles-profile.png";
import beeProfile from "../public/bee-profile.jpg";
import beyuLabsLogotype from "../public/beyu-labs-logotype.png";

import { SocialPlatform, TeamMemberInfo } from "../types/common";

import TeamMember from "../components/TeamMember";

export const projectTeam: TeamMemberInfo[] = [
  {
    name: "Ben",
    job: "commander",
    skills: ["founder", "biz dev"],
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
      {
        platform: SocialPlatform.linkedin,
        username: "benyurcisin",
      },
    ],
    description:
      "Ben is a serial entrepreneur with a background in engineering and a passion for creating community through fun, value-packed events. As founder of BeYu Labs - a web3 startup focused on empowering web3 entrepreneurship through connections and events - Ben aims to explore the unique opportunities and potential presented by the rise of NFT culture and the future of the internet as we know it. Ben spends his free time playing guitar, skateboarding, traveling and researching overpriced JPEGs.",
  },
  {
    name: "Miles",
    job: "co-commander",
    skills: ["product", "marketing"],
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
      {
        platform: SocialPlatform.linkedin,
        username: "milescolon",
      },
    ],
    description:
      "Product Manager & Brand Evangelist. Miles is a serial Startup contributor with over 5 years in driving high performing teams. Already a miner, gamer, and FunkoFan; it was digital horse racing that hooked him into NFTs *cough* Zed Run.",
  },
  {
    name: "Ryan",
    job: "engineering",
    skills: ["tech", "typescript", "solidity"],
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
      {
        platform: SocialPlatform.linkedin,
        username: "ryancharris",
      },
    ],
    description:
      "Ryan is currently a Senior Engineer at dbt Labs and has worked with some of Philadelphia’s most successful startups. As a filmmaker turned engineer, he is passionate about helping others transition into tech and creates educational content on Egghead. When he’s not coding, Ryan enjoys making music and playing with his dog, Banjo.",
  },
  {
    name: "Bee",
    job: "architecture",
    skills: ["concepts", "art"],
    image: (
      <Image
        className="rounded-full min-w-xs"
        width={175}
        height={175}
        src={beeProfile}
        alt="Bee's profile pic"
        layout="responsive"
      />
    ),
    socialMedia: [
      {
        platform: SocialPlatform.twitter,
        username: "thenftbee",
      },
    ],
    description: (
      <span>
        NFTBee is digital artist specialized in graphic design and illustration.
        She is a graduate of SCAD and got into NFTs in late 2020. Bee is a full
        stack artist, owning the art process end to end. Beyond her 1/1 works
        she is the artist behind several NFT projects including{" "}
        <a
          className="text-violet-400"
          href="https://twitter.com/dogepunks"
          rel="nofollow noreferrer"
        >
          @Dogepunks
        </a>
        ,{" "}
        <a
          className="text-violet-400"
          href="https://twitter.com/spacebums"
          rel="nofollow noreferrer"
        >
          @Spacebums
        </a>{" "}
        and{" "}
        <a
          className="text-violet-400"
          href="https://twitter.com/ecobotsnft"
          rel="nofollow noreferrer"
        >
          @EcoBotsNFT
        </a>
        .
      </span>
    ),
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
