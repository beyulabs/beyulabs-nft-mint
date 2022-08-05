import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@modules/Layout/context/AppContext';
import HtmlMeta from '@components/HtmlMeta';

import s from './HomePage.module.scss';
import cn from 'classnames';
import { Coins } from '@components/Icons/Icons';
import { Button } from '@components/Button/button';

const HomePage = () => {
  const { isLightMode } = useContext(AppContext);
  return (
    <div>
      <HtmlMeta title="Home" />
      <section className={s.head}>
        <div className="container">
          <div className={s.head__row}>
            <div>
              <h1>
                <span className={s.line}>Become</span> a member of the{' '}
                <span className={s.green}>Voyager</span> space{' '}
                <span className={s.line}>mission</span>
              </h1>
              <p>
                Unforgettable adventures await you during the flight! Find
                friends and develop together creating, buying and selling NFTs
                collection!
              </p>
            </div>
            <div>
              <Image
                src={
                  isLightMode
                    ? '/head_image_home_light.png'
                    : '/head_image_home.png'
                }
                width={647}
                height={616}
                alt="Nexus Mission"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={s.mission}>
        <div className="container">
          <div className={cn(s.mission__row, isLightMode && s.light)}>
            <div>
              <Image
                src={'/nexus-mission.svg'}
                width={524}
                height={679}
                alt="Nexus Mission"
              />
            </div>
            <div>
              <h2>
                The Nexus <br />
                Voyagers mission
              </h2>
              <p>
                To terraform Web3. An ecosystem cultivated by developers,
                artists, enthusiasts, and investors. A Solarpunk utopia powered
                by BeYu Labs and driven by radical optimism and sustainability.{' '}
              </p>
              <p>
                A collection of 10,119 crew members, primed for the genesis
                mission launch. On this voyage, crew members will have access to
                epic shared experiences, meaningful collabs, one of a kind NFT
                drops, and a future built for the community over time. With the
                focus on empowering Web3 entrepreneurship the ecosystem will
                fill the underlying gaps on contribution with incentivized
                exchange of utility. Each of us will have a role to play.
              </p>
              <h5>
                Bridging the gap between dream and reality, virtual and real, we
                build a regenerative vision of the future.
              </h5>
              <h4>
                Are you mission ready? <a href="#">Join now!</a>
              </h4>
              <Button
                size="large"
                text="Mint"
                color="green"
                icon={<Coins />}
                disabled
              />
            </div>
          </div>
        </div>
      </section>
      <section className={s.astromap}>
        <div className="container">
          <div className={s.cards}>
            <div className={s.title}>
              <h2>Astromap</h2>
            </div>
            <div className={cn(s.card, s.left)}>
              <div className={s.dot_num}>
                <span className={s.dot} />
              </div>
              <Image
                src={'/astromap_1.png'}
                width={150}
                height={150}
                alt="NFT"
              />
              <div>
                <h3>NFT</h3>
                <p>
                  To terraform Web3. An ecosystem cultivated by developers,
                  artists, enthusiasts, and investors.{' '}
                </p>
              </div>
            </div>
            <div />
            <div />
            <div className={cn(s.card, s.right)}>
              <div className={s.dot_num}>
                <span className={s.dot} />
              </div>
              <Image
                src={'/astromap_2.png'}
                width={150}
                height={150}
                alt="Community Chest"
              />
              <div>
                <h3>Community Chest</h3>
                <p>
                  To terraform Web3. An ecosystem cultivated by developers,
                  artists, enthusiasts, and investors.
                </p>
              </div>
            </div>
            <div className={cn(s.card, s.left)}>
              <div className={s.dot_num}>
                <span className={s.dot} />
              </div>
              <Image
                src={'/astromap_3.png'}
                width={150}
                height={150}
                alt="Community Chest"
              />
              <div>
                <h3>Mission Board</h3>
                <p>
                  To terraform Web3. An ecosystem cultivated by developers,
                  artists, enthusiasts, and investors.
                </p>
              </div>
            </div>
            <div />
            <div />
            <div className={cn(s.card, s.right)}>
              <div className={s.dot_num}>
                <span className={s.dot} />
              </div>
              <Image
                src={'/astromap_4.png'}
                width={150}
                height={150}
                alt="Launchpad"
              />
              <div>
                <h3>Launchpad</h3>
                <p>
                  To terraform Web3. An ecosystem cultivated by developers,
                  artists, enthusiasts, and investors.
                </p>
              </div>
            </div>
            <div className={cn(s.card, s.left)}>
              <div className={s.dot_num}>
                <span className={s.dot} />
              </div>
              <Image
                src={'/astromap_5.png'}
                width={150}
                height={150}
                alt="Project Showcase"
              />
              <div>
                <h3>Project Showcase</h3>
                <p>
                  To terraform Web3. An ecosystem cultivated by developers,
                  artists, enthusiasts, and investors.
                </p>
              </div>
            </div>
            <div />
            <div />

            <div className={cn(s.card, s.right)}>
              <div className={s.dot_num}>
                <span className={s.dot} />
              </div>
              <Image
                src={'/astromap_6.png'}
                width={150}
                height={150}
                alt="The Experience"
              />
              <div>
                <h3>The Experience</h3>
                <p>
                  To terraform Web3. An ecosystem cultivated by developers,
                  artists, enthusiasts, and investors.
                </p>
              </div>
            </div>
            <div className={cn(s.card, s.left)}>
              <div className={s.dot_num}>
                <span className={s.dot} />
              </div>
              <Image
                src={'/astromap_7.png'}
                width={150}
                height={150}
                alt="Charity"
              />
              <div>
                <h3>Charity</h3>
                <p>
                  To terraform Web3. An ecosystem cultivated by developers,
                  artists, enthusiasts, and investors.
                </p>
              </div>
            </div>
            <div className={s.button}>
              <Button size="large" text="Explore Astromap" color="green" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
