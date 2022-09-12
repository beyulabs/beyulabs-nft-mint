import React from 'react';
import {
  Instagram,
  LinkeDin,
  Twitter,
  DownArrow,
} from '@components/Icons/Icons';

import cn from 'classnames';
import s from './TeamUser.module.scss';

interface TeamUserProps {
  photo: string;
  name: string;
  position: string | undefined;
  linkedin: string | undefined;
  twitter: string | undefined;
  instagram: string | undefined;
  skillset: string[] | undefined;
  ariaExpanded: boolean;
  index: number;
  onClick: any;
}

const TeamUser = ({
  ariaExpanded,
  index,
  photo,
  name,
  position,
  linkedin,
  twitter,
  instagram,
  skillset,
  onClick,
}: TeamUserProps) => (
  <div
    className={cn(s.card, ariaExpanded && s.active)}
    id={`team_user_${index}`}
  >
    <div className={s.card__body}>
      <div className={s.image}>
        <img
          alt={name}
          src={`/team-images/${photo}`}
          width={255}
          height={255}
        />
      </div>
      <div className={s.cont}>
        <h3>{name}</h3>
        <div className={s.position__wrap}>
          <div className={s.position}>
            <span>{position}</span>
          </div>
        </div>

        {(linkedin || twitter || instagram) && (
          <ul className={s.socials}>
            {linkedin && (
              <li>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <LinkeDin />
                </a>
              </li>
            )}
            {twitter && (
              <li>
                <a href={twitter} target="_blank" rel="noreferrer">
                  <Twitter />
                </a>
              </li>
            )}
            {instagram && (
              <li>
                <a href={instagram} target="_blank" rel="noreferrer">
                  <Instagram />
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
    <div className={cn(s.card__box, ariaExpanded && s.active)}>
      {skillset && (
        <div className={s.card__footer}>
          <h5>Skillset:</h5>
          <ul className={s.skills}>
            {skillset?.map((item) => (
              <li key={`item-${item.toLowerCase()}`}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <button
      type="button"
      onClick={onClick}
      className={cn(s.readMore, ariaExpanded && s.active)}
    >
      {ariaExpanded ? 'Close' : 'Read more'}
      <span className={s.arrow}>
        <DownArrow />
      </span>
    </button>
  </div>
);

export default TeamUser;
