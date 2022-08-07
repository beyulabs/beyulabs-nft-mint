import React from 'react';
import OurTeamMember from '@components/OurTeamMember';
import { teamMembers } from '@utils/constants';
import { TeamMember } from '../../types/common';

import s from './TeamPage.module.scss';
import Image from 'next/image';

const TeamPage = () => {
  const CreateAvatarCards = teamMembers.map((voyager: TeamMember) => (
    <div className={s.card} key={`${voyager.nexusName.toLowerCase()}`}>
      <div className={s.card__body}>
        <div>
          <Image
            alt={voyager.nexusName}
            src={voyager.image}
            width={255}
            height={255}
            layout="responsive"
          />
        </div>
        <h3>{voyager.nexusName}</h3>
        <span>{voyager.irlName}</span>
      </div>
      <div className={s.card__box}>
        <div className={s.card__footer}>
          Description for <strong>{voyager.nexusName}</strong>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className={s.team}>
        <div className={s.team__list}>{CreateAvatarCards}</div>
      </div>
    </div>
  );
};

export default TeamPage;
