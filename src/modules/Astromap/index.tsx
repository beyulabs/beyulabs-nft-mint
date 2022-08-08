import React, { useContext } from 'react';
import cn from 'classnames';

import AppContext from '@modules/Layout/context/AppContext';
import { ArrowLink } from '@components/Icons/Icons';
import AstroCard from '@modules/Astromap/components/Card';
import HtmlMeta from '@components/HtmlMeta';
import s from './Astromap.module.scss';

const AstromapPage = () => {
  const { isLightMode } = useContext(AppContext);
  return (
    <div className={cn(s.astromap, isLightMode && s.light)}>
      <HtmlMeta title="Astromap" />
      <div className="container">
        <div className={s.cards}>
          <div className={cn(s.card, s.card_1)}>
            <AstroCard
              title="Community Festival"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike."
            >
              <strong>Holders have priority</strong>
              <p>
                A bounty hub empowering freelancers, project teams, and agencies
                alike. With the Web3 space growing into countless
                sub-communities of creators and thinkers, we are able to create
                a flexible and secure system of opportunities and relationships.
                Holders have priority access to a marketplace of talent, powered
                by partnerships and individual professionals who are invested in
                the space (and its growth).
              </p>
              <p>
                Into countless sub-communities of creators and thinkers, we are
                able to create a flexible and secure system of opportunities and
                relationships. Holders have priority access to a marketplace of
                talent, powered by partnerships and individual professionals who
                are invested in the space (and its growth).
              </p>
              <br />
              <br />
              <strong>Who are invested</strong>
              <p>
                A bounty hub empowering freelancers, project teams, and agencies
                alike. With the Web3 space growing into countless
                sub-communities of creators and thinkers, we are able to create
                a flexible and secure system of opportunities and relationships.
                Holders have priority access to a marketplace of talent, powered
                by partnerships and individual professionals who are invested in
                the space (and its growth).
              </p>
              <p>
                A bounty hub empowering freelancers, project teams, and agencies
                alike. With the Web3 space growing into countless
                sub-communities of creators and thinkers, we are able to create
                a flexible and secure system of opportunities and relationships.
                Holders have priority access to a marketplace of talent, powered
                by partnerships and individual professionals who are invested in
                the space (and its growth).
              </p>
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
              isRight
            >
              Text for modal
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_6)}>
            <AstroCard
              title="Charity"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike. With the Web3"
              isRight
            >
              Text for modal
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_7)}>
            <AstroCard
              title="Community Chest"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike. With"
              isRight
            >
              Text for modal
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_8)}>
            <AstroCard
              title="Future"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike. With"
              isGreen
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
