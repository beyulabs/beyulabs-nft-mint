import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import AstroCard from '@modules/Astromap/components/Card';
import HtmlMeta from '@components/HtmlMeta';
import { useTheme } from 'next-themes';
import { DownArrow } from '@components/Icons/Icons';
import s from './Astromap.module.scss';

const AstromapPage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn(s.astromap, theme === 'light' && s.light)}>
      <HtmlMeta title="Astromap" />
      <div className="container">
        <div className={s.cards}>
          <div className={cn(s.card, s.card_1)}>
            <AstroCard
              title="Genesis Voyage"
              description="Boarding Passes, channel Unlocks, Launch Party"
              image="/Photo_modal.png"
              arrow={DownArrow}
            >
              <p>Boarding Passes, channel Unlocks, Launch Party</p>
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_2)}>
            <AstroCard
              title="The Experience"
              description="It takes more than just grinding behind the scenes to grow an ecosystem."
              image="/modal_img_1.png"
            >
              <ul>
                <li>Boarding passes</li>
                <li>Channel Unlocks</li>
                <li>Launch Party</li>
              </ul>
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_3)}>
            <AstroCard
              title="Mission Board"
              description="A bounty hub empowering freelancers, project teams, and agencies
              alike."
              image="/modal_img_2.png"
            >
              <p>
                It takes more than just grinding behind the scenes to grow an
                ecosystem. Exclusive hybrid experiences for crew members,
                layering the physical and virtual worlds together to showcase
                the community talent and network. Fusing both worlds to rival
                even Web2.
              </p>
              <ul>
                <li>Art Gallery Showcase</li>
                <li>Project Launchpad</li>
                <li>Web3 Hackathon</li>
                <li>WhalesTank</li>
                <li>Secret Gameshow</li>
                <li>Community Festival</li>
              </ul>
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_4)}>
            <AstroCard
              title="Launchpad"
              description="When engineering this new world of web3 and
                            creating a business, not every vessel will reach
                            its final destination."
              image="/modal_img_3.png"
            >
              <p>
                A bounty hub empowering freelancers, project teams, and agencies
                alike. With the Web3 space growing into countless
                sub-communities of creators and thinkers, we are able to create
                a flexible and secure system of opportunities and relationships.
                Holders have priority access to a marketplace of talent, powered
                by partnerships and individual professionals who are invested in
                the space (and its growth).
              </p>
              <ul>
                <li>Bounty Listing Unlock - [Early Access]</li>
                <li>Nexus Work Visa</li>
                <li>Network Expansion</li>
                <li>Work Visa Profile</li>
                <li>LFG Unlock</li>
                <li>Enterprise Recruiting Unlock</li>
              </ul>
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_5)}>
            <AstroCard
              title="Project Showcase"
              description="A spotlight on some of our Holders Top
                            Projects via Panels, Interviews, Podcast,
                            Collabs, and Dedicated Discord channels."
              isRight
              image="/modal_img_4.png"
            >
              <p>
                When engineering this new world of web3 and creating a business,
                not every vessel will reach its final destination. The BeYu Labs
                Team is here to guide you on your journey via project advisory,
                consultations, and continued support from ideation through
                project launch. A navigation system to launch your own mission.
              </p>
              <ul>
                <li>Advisory Board</li>
                <li>Intimate Project Team Sessions</li>
              </ul>
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_6)}>
            <AstroCard
              title="The Tribunal"
              description="A percentage of the mint will go to a Community
                            Chest to be re-invested as decided by our
                            Holders."
              isRight
              image="/modal_img_5.png"
            >
              <p>
                A spotlight on some of our Holder&apos;s Top Projects via
                Panels, Interviews, Podcast, Collabs, and Dedicated Discord
                channels. We are passionate about connecting crew members to
                build innovative projects, and want to showcase these projects
                to our community and partner communities. A win for you is a win
                for all.
              </p>
              <ul>
                <li>Nifty Nomads Podcast</li>
                <li>Community Spotlight</li>
              </ul>
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_7)}>
            <AstroCard
              title="Charity"
              description="We’ll be donating a percentage of proceeds from
                            mint to a charity that’s aligned with our
                            overall vision"
              isRight
              image="/modal_img_6.png"
            >
              <p>
                A percentage of the mint will go to a Community Chest to be
                re-invested as decided by our Holders and the appointed
                Tribunal. The possibilities are truly endless, and we believe in
                bringing continued value to the community. Some options include:
                investing into blue chip projects, metaverse land, conferences,
                or project teams that are incubated from our ecosystem.
              </p>
              <ul>
                <li>Voting Mechanism</li>
                <li>Appointed Leadership</li>
                <li>Recap/Newsletter/Updates</li>
              </ul>
            </AstroCard>
          </div>
          <div className={cn(s.card, s.card_8)}>
            <AstroCard
              title="Future"
              description="Growth Opportunities"
              isGreen
              image="/modal_img_7.png"
            >
              <p>
                We’ll be donating a percentage of proceeds from mint to a
                charity that’s aligned with our overall vision: Future charities
                we donate to will be decided by the community to ensure that
                everyone is aligned with the cause and we are giving back to the
                greater community in a huge way.
              </p>
              <ul>
                <li>
                  NY PACE (https://www.nypace.org/), supporting
                  under-represented, under-resourced entrepreneurs to get their
                  business endeavors off the ground.
                </li>
                <li>BitBullies Charity Partner</li>
              </ul>
              {/* <p>Growth Opportunities</p> */}
              {/* <ul> */}
              {/*  <li>Token</li> */}
              {/*  <li>Nifty Nomads DAO</li> */}
              {/*  <li>Future Drops</li> */}
              {/*  <li>Metaverse</li> */}
              {/* </ul> */}
            </AstroCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstromapPage;
