import React, { useContext } from 'react';
import cn from 'classnames';

import AppContext from '@modules/Layout/context/AppContext';
import { ArrowLink } from '@components/Icons/Icons';
import AstroCard from '@modules/Astromap/components/Card';
import s from './Astromap.module.scss';

const AstromapPage = () => {
  const { isLightMode } = useContext(AppContext);
  return (
    <div className={cn(s.astromap, isLightMode && s.light)}>
      <div className="container">
        <div className={s.cards}>
          <div className={cn(s.card, s.card_1)}>
            <AstroCard
              title="Community Festival"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike."
            >
              Text for modal
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_2)}>
            <AstroCard
              title="The Experience"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike."
            >
              Text for modal
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_3)}>
            <AstroCard
              title="Mission Board"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike."
            >
              Text for modal
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_4)}>
            <AstroCard
              title="Launchpad"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike. With the Web3 space growing into countless sub-communities
              of creators and thinkers,"
            >
              Text for modal
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_5)}>
            <AstroCard
              title="Project Showcase"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike. With the Web3 space growing into."
            >
              Text for modal
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_6)}>
            <AstroCard
              title="Charity"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike. With the Web3"
            >
              Text for modal
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_7)}>
            <AstroCard
              title="Community Chest"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike. With"
            >
              Text for modal
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_8)}>
            <AstroCard
              title="Future"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike. With"
            >
              Text for modal
            </AstroCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstromapPage;
