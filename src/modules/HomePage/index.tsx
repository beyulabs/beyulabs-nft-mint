import React, { FC, useMemo } from 'react';
import { useTheme } from 'next-themes';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import cn from 'classnames';
import Image from 'next/image';
import HtmlMeta from '@components/HtmlMeta';
import { Coins } from '@components/Icons/Icons';
import Spoiler from '@components/Spoiler';
import { Button } from '@components/Button/button';
import { faqs } from '@utils/constants';

import 'swiper/css';
import s from './HomePage.module.scss';

const HomePage: FC = () => {
  const { theme, resolvedTheme } = useTheme();

  console.log(resolvedTheme, 'resolvedTheme');
  console.log(resolvedTheme, 'resolvedTheme');

  const pagination = {
    clickable: true,
    renderBullet(index: number, className: string) {
      return `<span class="${className}"></span>`;
    },
  };

  const SwiperButtonPrev = ({ children }: any) => {
    const swiper = useSwiper();
    return (
      <button
        type="button"
        className={cn(s.arrow, s.left)}
        onClick={() => swiper.slidePrev()}
      >
        {children}
      </button>
    );
  };

  const SwiperButtonNext = ({ children }: any) => {
    const swiper = useSwiper();
    return (
      <button
        type="button"
        className={cn(s.arrow, s.right)}
        onClick={() => swiper.slideNext()}
      >
        {children}
      </button>
    );
  };

  return (
    <div>
      <HtmlMeta title="Home" />
      <div
        className={cn(
          s.bg_wrapper,
          theme === 'light' && s.light,
          theme === 'dark' && s.dark
        )}
      >
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
              <div className={s.image}>
                {theme === 'light' && (
                  <img src={'/head_img_light_c.png'} alt="Nexus Mission" />
                )}
                {theme === 'dark' && (
                  <img src={'/head_img_dark_c.png'} alt="Nexus Mission" />
                )}
              </div>
            </div>
          </div>
        </section>
        <section className={cn(s.mission, theme === 'light' && s.light)}>
          <div className="container">
            <div className={s.mission__row}>
              <div>
                {theme === 'light' && (
                  <Image
                    src={'/nexus-mission-light.svg'}
                    width={524}
                    height={679}
                    alt="Nexus Mission"
                  />
                )}
                {theme === 'dark' && (
                  <Image
                    src={'/nexus-mission.svg'}
                    width={524}
                    height={679}
                    alt="Nexus Mission"
                  />
                )}
              </div>
              <div>
                <h2>
                  The Nexus <br />
                  Voyagers mission
                </h2>
                <p>
                  To terraform Web3. An ecosystem cultivated by developers,
                  artists, enthusiasts, and investors. A Solarpunk utopia
                  powered by BeYu Labs and driven by radical optimism and
                  sustainability.{' '}
                </p>
                <p>
                  A collection of 10,119 crew members, primed for the genesis
                  mission launch. On this voyage, crew members will have access
                  to epic shared experiences, meaningful collabs, one of a kind
                  NFT drops, and a future built for the community over time.
                  With the focus on empowering Web3 entrepreneurship the
                  ecosystem will fill the underlying gaps on contribution with
                  incentivized exchange of utility. Each of us will have a role
                  to play.
                </p>
                <h5>
                  Bridging the gap between dream and reality, virtual and real,
                  we build a regenerative vision of the future.
                </h5>
                <h4>
                  Are you mission ready? <a href="#">Join now!</a>
                </h4>
                <div className={s.button}>
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
          </div>
        </section>
        <section className={s.astromap}>
          <div className="container">
            <div className={cn(s.cards, theme === 'light' && s.light)}>
              <div className={s.title}>
                <h2>Astromap</h2>
              </div>
              <div className={s.cards__list}>
                <div className={cn(s.card, s.left, s.card_1)}>
                  <div className={s.dot_num}>
                    <span className={s.dot} />
                  </div>
                  <Image
                    src="/astromap_1.png"
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
                <div className={s.empty} />
                <div className={s.empty} />
                <div className={cn(s.card, s.right, s.card_2)}>
                  <div className={s.dot_num}>
                    <span className={s.dot} />
                  </div>
                  <Image
                    src="/astromap_2.png"
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
                <div className={cn(s.card, s.left, s.card_3)}>
                  <div className={s.dot_num}>
                    <span className={s.dot} />
                  </div>
                  <Image
                    src="/astromap_3.png"
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
                <div className={s.empty} />
                <div className={s.empty} />
                <div className={cn(s.card, s.right, s.card_4)}>
                  <div className={s.dot_num}>
                    <span className={s.dot} />
                  </div>
                  <Image
                    src="/astromap_4.png"
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
                <div className={cn(s.card, s.left, s.card_5)}>
                  <div className={s.dot_num}>
                    <span className={s.dot} />
                  </div>
                  <Image
                    src="/astromap_5.png"
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
                <div className={s.empty} />
                <div className={s.empty} />

                <div className={cn(s.card, s.right, s.card_6)}>
                  <div className={s.dot_num}>
                    <span className={s.dot} />
                  </div>
                  <Image
                    src="/astromap_6.png"
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
                <div className={cn(s.card, s.left, s.card_7)}>
                  <div className={s.dot_num}>
                    <span className={s.dot} />
                  </div>
                  <Image
                    src="/astromap_7.png"
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
              </div>
              <div className={s.button}>
                <Button size="large" text="Explore Astromap" color="green" />
              </div>
            </div>
          </div>
        </section>

        <section className={s.boarding}>
          <div className="container">
            <div className={cn(s.boarding__row, theme === 'light' && s.light)}>
              <div>
                <Image
                  src="/tickets.svg"
                  width={532}
                  height={701}
                  alt="Boarding Pass"
                />
              </div>
              <div>
                <h2>Boarding Pass</h2>
                <h5>
                  The Boarding Passes are separated by their contribution to the
                  new world of web3. Each character type will have a unique
                  challenge in order to ensure you align with that character,and
                  that you will be able to mint them during our presale.
                </h5>
                <p>
                  Keep your eyes on the #announcements and #boarding-pass
                  channels for these challenges, they will essentially guarantee
                  your seat on the rocket to the new world. These challenges
                  will be presented sporadically and closed off in short sprints
                  of time, so stay active in the Discord to make sure you lock
                  down your respective boarding pass and don’t get left behind
                  in the deteriorating space of Web2.
                </p>

                <div className={s.button}>
                  <Button
                    size="large"
                    text="Get it"
                    color="green"
                    icon={<Coins />}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={s.voyagers}>
          <div className="container">
            <h2>The Voyagers</h2>
            <div className={s.slider}>
              <Swiper
                modules={[Pagination, Navigation]}
                effect="fade"
                slidesPerView={1}
                spaceBetween={30}
                // observer={true}
                observer
                observeParents
                pagination={pagination}
                loop
                // navigation={{
                //   prevEl: prevRef?.current,
                //   nextEl: nextRef?.current,
                // }}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                <SwiperSlide>
                  <div className={s.card}>
                    <img src={'/mechanic2.png'} alt="Mechanic" />
                    <h3>Mechanic</h3>
                    <span className={s.tag}>Dev</span>
                    <div className={s.description}>
                      <p>
                        The creatives that take ideas and bring them to life in
                        a beautiful way - the artists. Without grace in the
                        design. The creatives that take ideas and bring them to
                        life in a beautiful way - the artists. Without grace in
                        the design.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={s.card}>
                    <img src={'/mechanic2.png'} alt="Mechanic" />
                    <h3>Mechanic</h3>
                    <span className={s.tag}>Dev</span>
                    <div className={s.description}>
                      <p>
                        The creatives that take ideas and bring them to life in
                        a beautiful way - the artists. Without grace in the
                        design. The creatives that take ideas and bring them to
                        life in a beautiful way - the artists. Without grace in
                        the design.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={s.card}>
                    <img src={'/Rectangle2.svg'} alt="Architect " />
                    <h3>Architect</h3>
                    <span className={s.tag}>Artist</span>
                    <div className={s.description}>
                      <p>
                        The creatives that take ideas and bring them to life in
                        a beautiful way - the artists. Without grace in the
                        design. The creatives that take ideas and bring them to
                        life in a beautiful way - the artists. Without grace in
                        the design.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={s.card}>
                    <img src={'/mechanic2.png'} alt="Mechanic" />
                    <h3>Mechanic</h3>
                    <span className={s.tag}>Dev</span>
                    <div className={s.description}>
                      <p>
                        The creatives that take ideas and bring them to life in
                        a beautiful way - the artists. Without grace in the
                        design. The creatives that take ideas and bring them to
                        life in a beautiful way - the artists. Without grace in
                        the design.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={s.card}>
                    <img src={'/Cap.png'} alt="Captain" />
                    <h3>Captain</h3>
                    <span className={s.tag}>Founder</span>
                    <div className={s.description}>
                      <p>
                        The creatives that take ideas and bring them to life in
                        a beautiful way - the artists. Without grace in the
                        design. The creatives that take ideas and bring them to
                        life in a beautiful way - the artists. Without grace in
                        the design.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={s.card}>
                    <img src={'/Rectangle2.svg'} alt="Architect " />
                    <h3>Architect</h3>
                    <span className={s.tag}>Artist</span>
                    <div className={s.description}>
                      <p>
                        The creatives that take ideas and bring them to life in
                        a beautiful way - the artists. Without grace in the
                        design. The creatives that take ideas and bring them to
                        life in a beautiful way - the artists. Without grace in
                        the design.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperButtonPrev>
                  <svg
                    width="11"
                    height="28"
                    viewBox="0 0 11 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      /* eslint-disable-next-line max-len */
                      d="M9.69256 0.124353C9.18943 -0.141586 8.53547 0.0330498 8.23191 0.514414L0.1532 13.3249C0.0452833 13.4961 -0.00382233 13.6829 0.000309944 13.8646C-0.00328827 14.0455 0.0458603 14.2314 0.153244 14.4016L8.23204 27.2123C8.53558 27.6936 9.18948 27.8682 9.69257 27.6023C10.1957 27.3364 10.3574 26.7306 10.0539 26.2493L2.24294 13.8634L10.0539 1.47747C10.3575 0.996101 10.1957 0.390292 9.69256 0.124353Z"
                      fill="#51BEA7"
                    />
                  </svg>
                </SwiperButtonPrev>
                <SwiperButtonNext>
                  <svg
                    width="11"
                    height="28"
                    viewBox="0 0 11 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      /* eslint-disable-next-line max-len */
                      d="M0.909984 0.124353C1.41311 -0.141586 2.06707 0.0330498 2.37063 0.514414L10.4493 13.3249C10.5573 13.4961 10.6064 13.6829 10.6022 13.8646C10.6058 14.0455 10.5567 14.2314 10.4493 14.4016L2.3705 27.2123C2.06696 27.6936 1.41306 27.8682 0.909968 27.6023C0.40688 27.3364 0.245114 26.7306 0.548653 26.2493L8.3596 13.8634L0.548639 1.47747C0.245075 0.996101 0.406855 0.390292 0.909984 0.124353Z"
                      fill="#51BEA7"
                    />
                  </svg>
                </SwiperButtonNext>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
      <section className={cn(s.faq, theme === 'light' && s.light)}>
        <div className="container">
          <h2>FAQ</h2>
          <div className={s.faq__list}>
            {faqs.map((faq, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Spoiler key={`faq-${index}`} title={faq.question}>
                {faq.answer}
              </Spoiler>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
