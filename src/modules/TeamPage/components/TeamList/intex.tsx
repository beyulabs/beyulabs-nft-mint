import React, { useState } from 'react';
import { teamMembers } from '@utils/constants';
import TeamUser from '@modules/TeamPage/components/TeamUser/intex';
import s from '@modules/TeamPage/TeamPage.module.scss';
import cn from 'classnames';

const TeamList = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const showToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const renderedTeamList = teamMembers.map((item: any, index: number) => {
    const ariaExpanded = index === activeIndex;
    return (
      <div
        /* eslint-disable-next-line react/no-array-index-key */
        key={`${item.nexusName.toLowerCase()}-${index}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <TeamUser
          name={item.nexusName}
          photo={item.image}
          position={item.irlName}
          instagram={item.instagram}
          linkedin={item.linkedin}
          skillset={item.skillset}
          twitter={item.twitter}
          ariaExpanded={ariaExpanded}
          index={index}
          onClick={() => showToggle(index)}
        />
      </div>
    );
  });
  return (
    <div className={s.team__list}>
      {renderedTeamList}
      <div className={cn(s.bg, isHover && s.active)} />
    </div>
  );
};

export default TeamList;
