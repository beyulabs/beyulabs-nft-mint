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
      job: "business | product",
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
        "Curabitur at magna nec nisi scelerisque vulputate. Nam id magna vitae diam semper feugiat. Nulla a efficitur lorem. Nam id magna vitae diam semper feugiat. Curabitur at magna nec nisi scelerisque vulputate. Nam id magna vitae diam semper feugiat. ",
    },
    {
      name: "Miles",
      job: "product | community",
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
    <section className="min-h-screen">
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
