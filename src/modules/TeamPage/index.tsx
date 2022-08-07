import React, { useState } from 'react';
import Image from 'next/image';
import { LinkeDin, Twitter, Instagram } from '@components/Icons/Icons';
import cn from 'classnames';
import HtmlMeta from '@components/HtmlMeta';
import { teamMembers } from '@utils/constants';
import { TeamMember } from '../../types/common';

import s from './TeamPage.module.scss';

const TeamPage = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const CreateAvatarCards = teamMembers.map((voyager: TeamMember, index) => (
    <div
      className={s.card}
      key={`${voyager.nexusName.toLowerCase()}-${index}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={s.card__body}>
        <div className={s.image}>
          <Image
            alt={voyager.nexusName}
            src={voyager.image}
            width={255}
            height={255}
            layout="responsive"
          />
        </div>
        <div className={s.cont}>
          <h3>{voyager.nexusName}</h3>
          <div>
            <div className={s.position}>
              <span>{voyager.irlName}</span>
            </div>
          </div>

          {(voyager.linkedin || voyager.twitter || voyager.instagram) && (
            <ul className={s.socials}>
              {voyager.linkedin && (
                <li>
                  <a href={voyager.linkedin} target="_blank" rel="noreferrer">
                    <LinkeDin />
                  </a>
                </li>
              )}
              {voyager.twitter && (
                <li>
                  <a href={voyager.twitter} target="_blank" rel="noreferrer">
                    <Twitter />
                  </a>
                </li>
              )}
              {voyager.instagram && (
                <li>
                  <a href={voyager.instagram} target="_blank" rel="noreferrer">
                    <Instagram />
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
      <div className={s.card__box}>
        <div className={s.card__footer}>
          <h5>Skillset:</h5>
          <ul className={s.skills}>
            {voyager?.skillset?.map((item) => (
              <li key={`item-${item.toLowerCase()}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <HtmlMeta title="Team" />
      <div className={s.team}>
        <div className={s.team__list}>{CreateAvatarCards}</div>
      </div>
      <div className={cn(s.bg, isHover && s.active)} />
    </div>
  );
};

export default TeamPage;
