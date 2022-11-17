/* eslint-disable react/no-unescaped-entities */
import React, { FC, useEffect, useState } from 'react';
// import Slide from 'react-reveal/Slide';
// @ts-ignore
import { Slide } from 'react-reveal';

import { useTheme } from 'next-themes';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import cn from 'classnames';
import Image from 'next/image';
import HtmlMeta from '@components/HtmlMeta';
import { Coins } from '@components/Icons/Icons';
import FAQ from '@components/FAQ';
import { Button } from '@components/Button/button';
import { faqs } from '@utils/constants';

import 'swiper/css';
import 'swiper/css/pagination';
import s from './HomePage.module.scss';

const HomePage: FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

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

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
        <section className={s.hero}>
          <img src={'/landscape-min.jpg'} alt="" />
        </section>
        <section className={s.head}>
          <div className="container">
            <div className={s.head__row}>
              <div className={s.h1HeadRow}>
                {/* <Slide duration={800} left ssrFadeout> */}
                <h1 className={s.h1Head}>
                  <div>
                    <span className={s.line}>Creators:</span> Revitalize,{' '}
                  </div>
                  <div className={s.h1Para}>
                    <span className={s.green}>Re</span>-energize,
                    <span className={s.green}>Re</span>vamp{' '}
                  </div>
                  <div className={s.h1Para}>
                    Your <span className={s.green}>NFT </span>Projects{' '}
                  </div>
                </h1>
                {/* </Slide> */}
                {/* <p> */}
                {/*  Unforgettable adventures await you during the flight! Find */}
                {/*  friends and develop together creating, buying and selling NFTs */}
                {/*  collection! */}
                {/* </p> */}
              </div>
              <div className={s.image}>
                {theme === 'light' && (
                  // <Slide duration={1200} right ssrFadeout>
                  <img src={'/head_img_light_c.png'} alt="Nexus Mission" />
                  // </Slide>
                )}
                {theme === 'dark' && (
                  // <Slide duration={1200} right ssrFadeout>
                  <img src={'/head_img_dark_c.png'} alt="Nexus Mission" />
                  // </Slide>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className={cn(s.mission, theme === 'light' && s.light)}>
          <div className="container">
            <div className={s.mission__row}>
              <div
                className={cn(
                  s.mission_astronaut,
                  theme === 'light' && s.light
                )}
              >
                {theme === 'light' && (
                  <Image
                    src={'/astronaut_light.svg'}
                    width={269}
                    height={223}
                    alt="Nexus Mission"
                  />
                )}
                {theme === 'dark' && (
                  <Image
                    src={'/astronaut_durk_desk.svg'}
                    width={269}
                    height={223}
                    alt="Nexus Mission"
                  />
                )}
              </div>
              <div>
                {theme === 'light' && (
                  // <Slide left duration={800} ssrFadeout>
                  <img
                    src={'/nexus-mission-light.png'}
                    // width={524}
                    // height={679}
                    alt="Nexus Mission"
                  />
                  // </Slide>
                )}
                {theme === 'dark' && (
                  // <Slide left duration={800} ssrFadeout>
                  <img
                    src={'/nexus_mission.png'}
                    // width={524}
                    // height={679}
                    alt="Nexus Mission"
                  />
                  // </Slide>
                )}
              </div>
              {/* <Slide right duration={1500} ssrFadeout> */}
              <div>
                <h2>
                  The Nexus <br />
                  Voyagers mission
                </h2>
                <p>
                  To accelerate the resurgence of the NFT market by supporting
                  and empowering a global network of creators. An ecosystem
                  cultivated by founders, developers, artists, marketers,
                  enthusiasts, and investors
                </p>
                <p>
                  To terraform Web3. An ecosystem cultivated by developers,
                  artists, enthusiasts, and investors. A Solarpunk utopia
                  powered by BeYu Labs and driven by radical optimism and
                  sustainability.
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
                <p className={s.upper}>
                  Bridging the gap between dream and reality, virtual and real,
                  we build a regenerative vision of the future.
                </p>
                <h4>
                  Are you mission ready? <a href="#">Join now!</a>
                </h4>
                <div className={s.button}>
                  <Button
                    size="large"
                    text="Launch"
                    color="green"
                    icon={<Coins />}
                    disabled
                  />
                </div>
              </div>
              {/* </Slide> */}
            </div>
          </div>
        </section>

        {/* section Benefits */}
        <section className={s.astromap}>
          <div className="container">
            <div className={cn(s.cards, theme === 'light' && s.light)}>
              <div className={s.title}>
                <h2>Benefits</h2>
              </div>
              <div className={s.cards__list}>
                <Slide left ssrFadeout>
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
                      {/* <h3> */}
                      {/*  <span>NFT</span> */}
                      {/* </h3> */}
                      <p>Access to “Creative Financing” Resource Directory</p>
                      <span>
                        Looking to scale and build your team but limited on
                        funding like most NFT project teams out there in this
                        market? Find resources to partner and work with in the
                        network who are open to “creative financing” i.e. paid
                        post-mint, equity, etc.as well as traditional paid
                        resources.
                      </span>
                    </div>
                  </div>
                </Slide>
                <div className={s.empty} />
                <div className={s.empty} />
                <Slide right ssrFadeout>
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
                      {/* <h3> */}
                      {/*  <span>Community</span> <span>Chest</span> */}
                      {/* </h3> */}
                      <p>Founder Profiles shared to Global Network</p>
                      <span>
                        Join the NVN's global network of professionals who share
                        your interests and connect with entrepreneurs, creators
                        and investors alike.
                      </span>
                    </div>
                  </div>
                </Slide>
                <Slide left ssrFadeout>
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
                      {/* <h3> */}
                      {/*  <span>Mission Board</span> */}
                      {/* </h3> */}
                      <p>Access to IRL and Hybrid Experiences</p>
                      <span>
                        It takes more than just grinding behind the scenes to
                        grow an ecosystem. Exclusive hybrid experiences for crew
                        members, layering the physical and virtual worlds
                        together to showcase the community talent and network.
                        Fusing both worlds to rival even Web2.
                      </span>
                    </div>
                  </div>
                </Slide>
                <div className={s.empty} />
                <div className={s.empty} />
                <Slide right ssrFadeout>
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
                      {/* <h3> */}
                      {/*  <span>Launchpad</span> */}
                      {/* </h3> */}
                      <p>Marketing NEXcelerator</p>
                      <span>
                        The Nexus is a space for tackling one of the most
                        pressing issues in the industry: lack of visibility.
                        This resource provides profiles and projects that give
                        users an opportunity to be seen by others, as well
                        voting rights on what gets showcased through events
                        series, podcast interviews, promotions, and more.
                      </span>
                    </div>
                  </div>
                </Slide>
                <Slide left ssrFadeout>
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
                      {/* <h3> */}
                      {/*  <span>Project Showcase</span> */}
                      {/* </h3> */}
                      <p>Builder’s Toolkit</p>
                      <span>
                        Why spend time reinventing the wheel when you can just
                        leverage our dynamic collection of builder templates and
                        how-to guides that will help get your project off the
                        ground? Everything from resource payment guidelines, to
                        sample partnership presentations.
                      </span>
                    </div>
                  </div>
                </Slide>
                <div className={s.empty} />
                <div className={s.empty} />
                <Slide right ssrFadeout>
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
                      {/* <h3> */}
                      {/*  <span>The Experience</span> */}
                      {/* </h3> */}
                      <p>NFT Creator Peer to Peer Network</p>
                      <span>
                        The NVN community is a network for creators to share
                        insights and ask questions about their projects. Whether
                        it's token-gated platforms, smart contract auditing or
                        best platforms for community management; vast
                        perspectives from various stages of business who can
                        contribute towards your build journey!
                      </span>
                    </div>
                  </div>
                </Slide>
                <Slide left ssrFadeout>
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
                      {/* <h3> */}
                      {/*  <span>Charity</span> */}
                      {/* </h3> */}
                      <p>Commercial Use</p>
                      <span>
                        Leverage the NVN brand and global network to get your
                        own venture or product off the ground.
                      </span>
                    </div>
                  </div>
                </Slide>
              </div>
              <div className={s.button}>
                <Button
                  size="large"
                  text="Astromap Coming Soon"
                  color="green"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={s.boarding}>
          <div className="container">
            <div className={cn(s.boarding__row, theme === 'light' && s.light)}>
              <div>
                {theme === 'light' && (
                  <Slide left ssrFadeout>
                    <img src={'/tickets_light.svg'} alt="Boarding Pass" />
                  </Slide>
                )}
                {theme === 'dark' && (
                  <Slide left ssrFadeout>
                    <img src={'/tickets.svg'} alt="Boarding Pass" />
                  </Slide>
                )}
              </div>
              <Slide right ssrFadeout>
                <div className={s.text}>
                  <h2>
                    <br />
                    Boarding Pass
                  </h2>
                  <p className={s.desc}>
                    The Boarding Passes are separated by their contribution to
                    the new world of web3. Each character type will have a
                    unique challenge in order to cultivate a diverse list of
                    creators . This list will give you access to the Boarding
                    Pass NFT and its exclusive perks. Stay alert and don’t get
                    left behind in the deteriorating space of Web2.
                  </p>
                  <p>
                    Keep your eyes on the #announcements and #boarding-pass
                    channels for these challenges, they will essentially
                    guarantee your seat on the rocket to the new world. These
                    challenges will be presented sporadically and closed off in
                    short sprints of time, so stay active in the Discord to make
                    sure you lock down your respective boarding pass and don’t
                    get left behind in the deteriorating space of Web2.
                  </p>

                  <div className={s.button}>
                    <Button
                      size="large"
                      text="FREE MINT"
                      color="green"
                      icon={<Coins />}
                      disabled
                    />
                    <br />
                    <br />
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </section>
        <section className={s.voyagers}>
          <div className="container">
            <Slide bottom ssrFadeout>
              <h2>The Voyagers</h2>
            </Slide>
            <Slide bottom ssrFadeout>
              <div className={s.slider}>
                <Swiper
                  modules={[Pagination, Navigation]}
                  effect="fade"
                  slidesPerView={1}
                  spaceBetween={17}
                  observer
                  observeParents
                  pagination={pagination}
                  loop
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
                      <img src={'/captain.png'} alt="Mechanic" />
                      <h3>Captain</h3>
                      <ul className={s.tags}>
                        <li>Founder</li>
                        <li>Manager</li>
                      </ul>
                      <div className={s.description}>
                        <p>
                          Pulling together the pieces of the puzzle and ensuring
                          the community is working in harmony to terraform the
                          planet in the same direction - the founders. The
                          captain’s vision is brought to life by those to see
                          the light at the end of at the end of the tunnel.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={s.card}>
                      <img src={'/mechanic.png'} alt="Mechanic" />
                      <h3>Mechanic</h3>
                      <ul className={s.tags}>
                        <li>Developer</li>
                        <li>Engineer</li>
                      </ul>
                      <div className={s.description}>
                        <p>
                          The brains behind the ideas - the
                          engineers/developers. Creating technical solutions to
                          the complex challenges that come with terraforming a
                          new world; they build quietly in the back-end and help
                          connect the dots to bring innovation to life.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={s.card}>
                      <img src={'/architect.png'} alt="Architect " />
                      <h3>Architect</h3>
                      <ul className={s.tags}>
                        <li>Artist</li>
                        <li>Designer</li>
                      </ul>
                      <div className={s.description}>
                        <p>
                          The creatives that take ideas and bring them to life
                          in a beautiful way - the artists. Without grace in the
                          design of a of a new world, it would become nothing
                          more than a lifeless land of chrome structures.
                          structures. The architects breathe life into the
                          planet and create an aesthetic that makes it worth
                          populating.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={s.card}>
                      <img src={'/journalist.png'} alt="Journalist" />
                      <h3>Journalist</h3>
                      <ul className={s.tags}>
                        <li>Influencer</li>
                        <li>Marketer</li>
                      </ul>
                      <div className={s.description}>
                        <p>
                          On a mission to spread ideas and share news of
                          innovations and creation - the marketers. A new
                          business - a beautiful piece of art - an innovative
                          idea; do they really exist if the people of the planet
                          don’t KNOW they exist? The journalists spread the word
                          to ensure the population is aware of what’s happening
                          on the planet.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={s.card}>
                      <img src={'/merchant.png'} alt="Merchant" />
                      <h3>Merchant</h3>
                      <ul className={s.tags}>
                        <li>Investor</li>
                        <li>Advisor</li>
                      </ul>
                      <div className={s.description}>
                        <p>
                          The driving force behind the economy of the new world
                          - the investors. Those who decide what the direction
                          of the market looks like, support businesses and
                          create financial abundance for the builders and
                          community alike.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={s.card}>
                      <img src={'/explorer.png'} alt="Explorer" />
                      <h3>Explorer</h3>
                      <ul className={s.tags}>
                        <li>Collector</li>
                        <li>Degen</li>
                      </ul>
                      <div className={s.description}>
                        <p>
                          Like true mavens, stimulating the economy as the
                          backbone to all initiatives of the new world - the
                          collector. All innovations, projects, and progress of
                          this terraformed society would be all for naught if
                          not for these community members actively participating
                          and engaging in the wild world of web3.
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
            </Slide>
          </div>
        </section>

        <section className={cn(s.faq, theme === 'light' && s.light)}>
          <div className="container">
            <Slide bottom ssrFadeout>
              <h2>FAQ</h2>
            </Slide>
            <FAQ questionsAnswers={faqs} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
