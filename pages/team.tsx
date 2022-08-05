import type { NextPage } from "next";
import MeetTeamMember from "../components/MeetTeamMember";
import Partner from "../components/PartnerItem"
import { teamMembers, mobTeamMembers } from "../constants";
import { partners, partnersMob } from "../constants";
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

  const createAvatarCardsforPhone = () => {
    return mobTeamMembers.map((voyager: TeamMember) => (
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

  const partnerSectionMob = () => {
    const createPartnerItem = () => {
      return partnersMob.map((item: PartnersItem, index: number) => {
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
      <div className="sm:hidden lg:grid grid-cols-4 gap-x-24 gap-y-28 justify-center items-start mt-20">
        {createAvatarCards()}
      </div>
      <div className="lg:hidden sm:grid grid-cols-1 gap-y-5 justify-center items-start mt-6">
        {createAvatarCardsforPhone()}
      </div>
      <button className="lg:hidden sm:flex rounded-lg text-sm justify-center ml-24 inline-block py-2.5 px-4 mb-3 mt-3 bg-nexusGreen text-white">
        <span>See all members</span>
        </button>
      <h2 className="lg:text-6xl sm:text-3xl text-white font-bold drop-shadow-xl mt-36 mb-24 text-center uppercase">
        Partners:
      </h2>
      <div className="sm:hidden lg:grid grid-cols-2 mb-28">
        {partnerSection()}
      </div>
      <div className="lg:hidden sm:grid grid-cols-1 mt-6 gap-y-7">
        {partnerSectionMob()}
      </div>
    </div>
  );
};

export default Team;