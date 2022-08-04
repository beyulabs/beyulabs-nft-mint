import type { NextPage } from "next";
import OurTeamMember from "../components/OurTeamMember";
import { teamMembers } from "../constants";
import { TeamMember } from "../types/common";

const Team: NextPage = () => {
  const createAvatarCards = () => {
    return teamMembers.map((voyager: TeamMember) => (
      <OurTeamMember
        key={`${voyager.nexusName.toLowerCase()}`}
        voyager={voyager}
      />
    ));
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-x-24 gap-y-28 justify-center items-start mt-20">
        {createAvatarCards()}
      </div>
    </div>
  );
};

export default Team;