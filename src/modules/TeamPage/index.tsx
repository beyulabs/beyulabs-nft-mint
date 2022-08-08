import React, { useState } from 'react';
import cn from 'classnames';
import HtmlMeta from '@components/HtmlMeta';
import { teamMembers } from '@utils/constants';
import TeamUser from '@modules/TeamPage/components/TeamUser/intex';
import useMediaQuery from '@modules/Layout/hooks/useMediaQuery';
import { TeamMember } from '../../types/common';

import s from './TeamPage.module.scss';

const TeamPage = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const isTablet = useMediaQuery(992);

  return (
    <>
      <div className="container">
        <HtmlMeta title="Team" />
        <div className={s.team}>
          <div className={s.team__list}>
            {teamMembers.map((voyager: TeamMember, index) => (
              <div
                /* eslint-disable-next-line react/no-array-index-key */
                key={`${voyager.nexusName.toLowerCase()}-${index}`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <TeamUser
                  name={voyager.nexusName}
                  photo={voyager.image}
                  position={voyager.irlName}
                  instagram={voyager.instagram}
                  linkedin={voyager.linkedin}
                  skillset={voyager.skillset}
                  twitter={voyager.twitter}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={s.partners}>
          <h2>Partners:</h2>
          <div className={s.cards}>
            <div className={s.card}>
              <img src={'/team_partner_1.png'} alt="" />
              <div className={s.text}>
                <h3>Project 3</h3>
                <p>
                  Some description about project. Keep your eyes on the
                  <span>#announcements</span> and #boarding-pass channels for
                  these challenges, they will essentially guarantee your seat on
                  the rocket to the new world. These challenges will be
                  presented sporadically
                </p>
                <div className={s.dont}>don&apos;t procrastinate</div>
              </div>
            </div>
            <div className={s.card}>
              {isTablet ? (
                <img src={'/team_partner_2.png'} alt="" />
              ) : (
                <img src={'/team_partner_2_desktop.png'} alt="" />
              )}
              <div className={s.text}>
                <h3>BDH (Legal)</h3>
                <p>
                  Some description about project. Keep your eyes on the
                  <span>#announcements</span> and #boarding-pass channels for
                  these challenges, they will essentially guarantee your seat on
                  the rocket to the new world. These challenges will be
                  presented sporadically
                </p>
                <div className={s.dont}>don&apos;t procrastinate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(s.bg, isHover && s.active)} />
    </>
  );
};

export default TeamPage;
