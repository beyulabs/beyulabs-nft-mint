import type { NextPage } from "next";
import Image from "next/image";

import ryanProfile from "../public/ryan-profile.png";
import benProfile from "../public/ben-profile.png";
import milesProfile from "../public/miles-profile.png";
import beyuLabsLogotype from "../public/beyu-labs-logotype.png";

import { SocialPlatform, TeamMemberInfo } from "../types/common";

import TeamMember from "../components/TeamMember";

const Team: NextPage = () => {
  const projectTeam: TeamMemberInfo[] = [
    {
      name: "Ben",
      job: "business & product",
      image: (
        <Image
          className="rounded-full"
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
          className="rounded-full"
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
        "Nullam eget facilisis libero. Donec a fringilla sapien, tempor vulputate tortor. Nunc sit amet magna purus. Donec nisi ante, vestibulum vel lectus id, semper efficitur mauris.",
    },
    {
      name: "Ryan",
      job: "code",
      image: (
        <Image
          className="rounded-full"
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
        "Donec semper a urna eu ornare. Sed id accumsan metus. Pellentesque id lectus et leo laoreet pellentesque. Nulla id mi at metus elementum mattis quis in tortor. ",
    },
  ];

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
    <section className="min-h-screen max-w-4xl m-auto">
      <div className="m-auto w-4/5">
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
