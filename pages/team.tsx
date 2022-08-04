import type { NextPage } from "next";
import MeetTeamMember from "../components/MeetTeamMember";
import Partner from "../components/PartnerItem"
import { teamMembers } from "../constants";
import { partners } from "../constants";
import { TeamMember } from "../types/common";
import { PartnersItem } from "../types/common";

const Team: NextPage = () => {
  const createAvatarCards = () => {
    return teamMembers.map((voyager: TeamMember) => (
      <MeetTeamMember
        key={voyager.id}
        voyager={voyager}
      />
    ));
  };

  const partnerSection = () => {
    const createPartnerItem = () => {
      return partners.map((item: PartnersItem, index: number) => {
        return (
          <Partner
            key={`roadmap-item-${index}`}
            partnerItem={item}
          />
        );
      });
    };
  
    return <>{createPartnerItem()}</>;
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-x-24 gap-y-28 justify-center items-start mt-20">
        {createAvatarCards()}
      </div>
      <h2 className="text-6xl text-white font-bold drop-shadow-xl mt-36 mb-24 text-center uppercase">
        Partners:
      </h2>
      <div className="grid grid-cols-2 mb-28">
        {partnerSection()}
      </div>
    </div>
  );
};

export default Team;