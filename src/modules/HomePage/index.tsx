import React, { FC, useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import cn from "classnames"
import Image from "next/image"
import HtmlMeta from "@components/HtmlMeta"
import { Coins } from "@components/Icons/Icons"
import Spoiler from "@components/Spoiler"
import { Button } from "@components/Button/button"
import { faqs } from "@utils/constants"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import s from "./HomePage.module.scss"

const HomePage: FC = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const pagination = {
        clickable: true,
        renderBullet(index: number, className: string) {
            return `<span class="${className}"></span>`
        },
    }

    const SwiperButtonPrev = ({ children }: any) => {
        const swiper = useSwiper()
        return (
            <button
                type='button'
                className={cn(s.arrow, s.left)}
                onClick={() => swiper.slidePrev()}
            >
                {children}
            </button>
        )
    }

    const SwiperButtonNext = ({ children }: any) => {
        const swiper = useSwiper()
        return (
            <button
                type='button'
                className={cn(s.arrow, s.right)}
                onClick={() => swiper.slideNext()}
            >
                {children}
            </button>
        )
    }

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div>
            <HtmlMeta title='Home' />
            <div
                className={cn(
                    s.bg_wrapper,
                    theme === "light" && s.light,
                    theme === "dark" && s.dark
                )}
            >
                <section className={s.hero} />

                <section className={s.background_planets_head}>
                    <div className={s.container_planets_head}>
                        <div className={s.circle_head_light}></div>
                        <div className={s.circle_head_left_first}></div>
                        <div className={s.circle_head_left_second}></div>
                        <div className={s.circle_head_left_shine}></div>
                    </div>
                </section>
                <section className={s.head}>
                    <div className={s.container_head}>
                        <div className={s.head__row}>
                            <div className={s.mainTitle}>
                                <h1>
                                    <span className={s.line}>Become</span> a
                                    crew member of the{" "}
                                    <span className={s.green}>Voyager</span>{" "}
                                    space{" "}
                                    <span className={s.line}>mission</span>
                                </h1>
                            </div>
                            <div
                                className={cn(
                                    s.image,
                                    theme === "light" && s.light
                                )}
                            >
                                {theme === "light" && (
                                    <img
                                        src={"/new-voyagers-img.png"}
                                        alt='Nexus Mission'
                                    />
                                )}
                                {theme === "dark" && (
                                    <img
                                        src={"/new-voyagers-img.png"}
                                        alt='Nexus Mission'
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.background_planets_mission}>
                    <div className={s.container_planets_mission}>
                        <div className={s.mars_lg_img}>
                            <Image
                                src={'/mars-lg.svg'}
                                width={853}
                                height={856}
                                alt="Nexus Mission"
                            />
                        </div>
                        <div className={s.mars_md_img}>
                            <Image
                                src={'/mars-md.svg'}
                                width={150}
                                height={150}
                                alt="Nexus Mission"
                            />
                        </div>
                        <div className={s.circle_mission_lg}></div>
                        <div className={s.circle_mission_sm_first}></div>
                        <div className={s.circle_mission_second}></div>
                        <div className={s.circle_mission_third}></div>
                        <div className={s.circle_mission_left_first}></div>
                        <div className={s.circle_mission_left_second}></div>
                        <div className={s.saturn_left_mission_img}>
                            <Image
                                src={'/saturn-sm-left-mission.svg'}
                                width={110}
                                height={70}
                                alt="Nexus Mission"
                            />
                        </div>
                        <div className={s.mars_left_img}>
                            <Image
                                src={'/mars-lg.svg'}
                                width={146}
                                height={146}
                                alt="Nexus Mission"
                            />
                        </div>
                        <div className={s.circle_mission_left_third}></div>
                        <div className={s.circle_mission_left_fourth}></div>
                        <div className={s.circle_mission_left_fifth}></div>
                        <div className={s.circle_mission_left_sixth}></div>
                    </div>
                </section>

                <section
                    className={cn(s.mission, theme === "light" && s.light)}
                >
                    <div className={s.conrainer_mission}>
                        <div className={s.mission__row}>
                            <div className={s.mission_imgages}>
                                <div className={s.mission_saturn}>
                                    <Image
                                        src={"/saturn-mob-left.svg"}
                                        width={127}
                                        height={96}
                                        alt='Nexus Mission'
                                    />
                                </div>
                                <div className={s.mission_mars_bg_mob}>
                                    <Image
                                        src={"/mars-lg.svg"}
                                        width={312}
                                        height={318}
                                        alt='Nexus Mission'
                                    />
                                </div>
                                <div className={s.mission_mars_bg_mob_sm}>
                                    <Image
                                        src={"/mars-mission-bg-sm.svg"}
                                        width={79}
                                        height={80}
                                        alt='Planet'
                                    />
                                </div>
                                <div
                                    className={cn(
                                        s.mission_astronaut,
                                        theme === "light" && s.light
                                    )}
                                >
                                    {theme === "light" && (
                                        <Image
                                            src={"/astronaut_light.svg"}
                                            width={269}
                                            height={223}
                                            alt='Nexus Mission'
                                        />
                                    )}
                                    {theme === "dark" && (
                                        <Image
                                            src={"/astronaut_durk_desk.svg"}
                                            width={269}
                                            height={223}
                                            alt='Nexus Mission'
                                        />
                                    )}
                                </div>
                                <div className={s.nexus_img}>
                                    {theme === "light" && (
                                        <Image
                                            src={"/nexus-mission-light.svg"}
                                            width={552}
                                            height={728}
                                            alt='Nexus Mission'
                                        />
                                    )}
                                    {theme === "dark" && (
                                        <Image
                                            src={"/mission-img.svg"}
                                            width={552}
                                            height={728}
                                            alt='Nexus Mission'
                                        />
                                    )}
                                </div>
                            </div>
                            <div>
                                <h2>
                                    The Nexus <br />
                                    Voyagers mission
                                </h2>
                                <p>
                                    To terraform Web3. An ecosystem cultivated
                                    by developers, artists, enthusiasts, and
                                    investors. A Solarpunk utopia powered by
                                    BeYu Labs and driven by radical optimism and
                                    sustainability.{" "}
                                </p>
                                <p>
                                    A collection of 10,119 crew members, primed
                                    for the genesis mission launch. On this
                                    voyage, crew members will have access to
                                    epic shared experiences, meaningful collabs,
                                    one of a kind NFT drops, and a future built
                                    for the community over time. With the focus
                                    on empowering Web3 entrepreneurship the
                                    ecosystem will fill the underlying gaps on
                                    contribution with incentivized exchange of
                                    utility. Each of us will have a role to
                                    play.
                                </p>
                                <h5 className={s.nexush5}>
                                    Bridging the gap between dream and reality,
                                    virtual and real, we build a regenerative
                                    vision of the future.
                                </h5>
                                <div className={s.join_mob}>
                                    <h4>Are you mission ready?</h4>
                                    <h4>
                                        <a href='#'>Join now!</a>
                                    </h4>
                                </div>
                                <div className={s.missionCTA}>
                                    <div className={s.join_descktop}>
                                        <h4>
                                            Are you mission ready?{" "}
                                            <a href='#'>Join now!</a>
                                        </h4>
                                    </div>
                                    <div className={s.button}>
                                        <Button
                                            size='large'
                                            text='Launch'
                                            color='green'
                                            icon={<Coins />}
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <div className={s.spaceman}>
                                <img src={"/spaceman.svg"} alt='spaceman' />
                            </div> */}
                        </div>
                    </div>
                </section>

                <section className={s.background_planets_astromap}>
                    <div className={s.container_planets_astromap}>
                        <div className={s.planet_three_satelits}>
                            <Image
                                src={'/planet_three_satelits.svg'}
                                width={853}
                                height={856}
                                alt="Nexus Mission"
                            />
                        </div>
                        <div className={s.circle_astromap_sm_first}></div>
                        <div className={s.circle_astromap_second}></div>
                        <div className={s.circle_astromap_sm_second}></div>
                        <div className={s.circle_astromap_sm_third}></div>
                        <div className={s.circle_mission_lg_shine}></div>
                        <div className={s.circle_astromap_third}></div>
                        <div className={s.circle_astromap_sm_fourth}></div>
                        <div className={s.circle_astromap_sm_fifth}></div>
                        <div className={s.circle_astromap_sm_sixth}></div>
                        <div className={s.circle_astromap_sm_seventh}></div>
                        <div className={s.comet_astromap_img}>
                            {theme === "light" && (
                                <Image
                                    src={'/comet-up-astromap-light.svg'}
                                    width={70}
                                    height={202}
                                    alt="Nexus Mission"
                                />
                            )}
                            {theme === "dark" && (
                                <Image
                                    src={'/comet-up-astromap-dark.svg'}
                                    width={70}
                                    height={202}
                                    alt="Nexus Mission"
                                />
                            )}
                        </div>
                        <div className={s.circle_astromap_sm_eighth}></div>
                        <div className={s.circle_astromap_sm_ninth}></div>
                        <div className={s.circle_astromap_sm_tenth}></div>
                        <div className={s.circle_astromap_sm_eleventh}></div>
                        <div className={s.circle_astromap_sm_twelth}></div>
                        <div className={s.comet_left_astromap_img}>
                            {theme === "light" && (
                                <Image
                                    src={'/comet-up-astromap-light.svg'}
                                    width={70}
                                    height={202}
                                    alt="Nexus Mission"
                                />
                            )}
                            {theme === "dark" && (
                                <Image
                                    src={'/comet-left-astromap-dark.svg'}
                                    width={57}
                                    height={176}
                                    alt="Nexus Mission"
                                />
                            )}
                        </div>
                        <div className={s.circle_astromap_left_shine}></div>
                        <div className={s.bg_astromap_right}>
                            {theme === "light" && (
                                <Image
                                    src={'/bg-astromap-left-light.svg'}
                                    width={547.16}
                                    height={1980}
                                    alt="left background"
                                />
                            )}
                            {theme === "dark" && (
                                <Image
                                    src={'/bg-astromap-left-dark.svg'}
                                    width={547.16}
                                    height={1980}
                                    alt="left background"
                                />
                            )}
                        </div>
                        <div className={s.circle_astromap_left_first}></div>
                        <div className={s.saturn_astromap_left}>
                            <Image
                                src={'/saturn-astromap-left.svg'}
                                width={196}
                                height={137}
                                alt="left background"
                            />
                        </div>
                        <div className={s.circle_astromap_left_second}></div>
                        <div className={s.circle_astromap_left_third}></div>
                        <div className={s.planet_three_satelits_astromap_left}>
                            <Image
                                src={'/planet_three_satelits_astromap_left.svg'}
                                width={155}
                                height={95}
                                alt="left background"
                            />
                        </div>
                        <div className={s.circle_astromap_left_shine_second}></div>
                        <div className={s.circle_astromap_left_fourth}></div>
                        <div className={s.circle_astromap_left_fifth}></div>
                        <div className={s.circle_astromap_left_sixth}></div>
                        <div className={s.circle_astromap_left_seventh}></div>
                        <div className={s.circle_astromap_left_eighth}></div>
                        <div className={s.circle_astromap_left_ninth}></div>
                        <div className={s.circle_astromap_left_tenth}></div>
                    </div>
                </section>

                <section className={s.astromap}>
                    <div className='container'>
                        <div
                            className={cn(
                                s.cards,
                                theme === "light" && s.light
                            )}
                        >
                            <div className={s.title}>
                                <h2>Benefits</h2>
                            </div>
                            <div className={s.cards__list}>
                                <div className={cn(s.card, s.left, s.card_1)}>
                                    <div className={s.dot_num}>
                                        <span className={s.dot} />
                                    </div>
                                    <Image
                                        src='/astromap-new-img/astromap-1.png'
                                        width={150}
                                        height={150}
                                        alt='NFT'
                                    />
                                    <div>
                                        <h3>NFT</h3>
                                        <p>Commercial Use </p>
                                    </div>
                                </div>
                                <div className={s.empty} />
                                <div className={s.empty} />
                                <div className={cn(s.card, s.right, s.card_2)}>
                                    <div className={s.dot_num}>
                                        <span className={s.dot} />
                                    </div>
                                    <Image
                                        src='/astromap-new-img/astromap-2.png'
                                        width={150}
                                        height={150}
                                        alt='Community Chest'
                                    />
                                    <div>
                                        <h3>Community Chest</h3>
                                        <p>
                                            Opportunity to be showcased at irl
                                            and virtual events
                                        </p>
                                    </div>
                                </div>
                                <div className={cn(s.card, s.left, s.card_3)}>
                                    <div className={s.dot_num}>
                                        <span className={s.dot} />
                                    </div>
                                    <Image
                                        src='/astromap-new-img/astromap-3.png'
                                        width={150}
                                        height={150}
                                        alt='Community Chest'
                                    />
                                    <div>
                                        <h3>Mission Board</h3>
                                        <p>Lifetime Access to all Events</p>
                                    </div>
                                </div>
                                <div className={s.empty} />
                                <div className={s.empty} />
                                <div className={cn(s.card, s.right, s.card_4)}>
                                    <div className={s.dot_num}>
                                        <span className={s.dot} />
                                    </div>
                                    <Image
                                        src='/astromap-new-img/astromap-4.png'
                                        width={150}
                                        height={150}
                                        alt='Launchpad'
                                    />
                                    <div>
                                        <h3>Launchpad</h3>
                                        <p>
                                            Exclusive Voyager Perks by Character
                                            Types
                                        </p>
                                    </div>
                                </div>
                                <div className={cn(s.card, s.left, s.card_5)}>
                                    <div className={s.dot_num}>
                                        <span className={s.dot} />
                                    </div>
                                    <Image
                                        src='/astromap-new-img/astromap-5.png'
                                        width={150}
                                        height={150}
                                        alt='Project Showcase'
                                    />
                                    <div>
                                        <h3>Project Showcase</h3>
                                        <p>
                                            Community Lottery i.e. all expense
                                            trip to SXSW
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
                                        src='/astromap-new-img/astromap-6.png'
                                        width={150}
                                        height={150}
                                        alt='The Experience'
                                    />
                                    <div>
                                        <h3>The Experience</h3>
                                        <p>
                                            Networking access to Web3 Hub of
                                            builders
                                        </p>
                                    </div>
                                </div>
                                <div className={cn(s.card, s.left, s.card_7)}>
                                    <div className={s.dot_num}>
                                        <span className={s.dot} />
                                    </div>
                                    <Image
                                        src='/astromap-new-img/astromap-7.png'
                                        width={150}
                                        height={150}
                                        alt='Charity'
                                    />
                                    <div>
                                        <h3>Charity</h3>
                                        <p>Digital work profile - PFP</p>
                                    </div>
                                </div>
                            </div>
                            <div className={s.button}>
                                <Link href='/astromap'>
                                    <Button
                                        size='large'
                                        text='Explore Astromap'
                                        color='green'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={s.background_planets_boarding}>
                    <div className={s.container_planets_boarding}>
                        <div className={s.right_bg_puddle_boarding}>
                            {theme === "light" && (
                                <Image
                                    src={'/bg-right-boarding-light.svg'}
                                    width={287}
                                    height={1303}
                                    alt="right background"
                                />
                            )}
                            {theme === "dark" && (
                                <Image
                                    src={'/bg-right-boarding-durk.svg'}
                                    width={287}
                                    height={1303}
                                    alt="right background"
                                />
                            )}
                        </div>
                        <div className={s.circle_mission_boarding}></div>
                        <div className={s.circle_boarding_left_first}></div>
                        <div className={s.circle_boarding_left_second}></div>
                        <div className={s.circle_boarding_left_third}></div>
                        <div className={s.comet_right_boarding}>
                            {theme === "light" && (
                                <Image
                                    src={'/comet_right_boarding.svg'}
                                    width={120}
                                    height={120}
                                    alt="right background"
                                />
                            )}
                            {theme === "dark" && (
                                <Image
                                    src={'/comet_right_boarding.svg'}
                                    width={120}
                                    height={120}
                                    alt="right background"
                                />
                            )}
                        </div>
                        <div className={s.circle_boarding_left_shine}></div>
                    </div>
                </section>

                <section className={s.boarding}>
                    <div className='container'>
                        <div
                            className={cn(
                                s.boarding__row,
                                theme === "light" && s.light
                            )}
                        >
                            <div>
                                <Image
                                    src='/tickets.svg'
                                    width={532}
                                    height={701}
                                    alt='Boarding Pass'
                                />
                            </div>
                            <div>
                                <h2>Boarding Pass</h2>
                                <h5 className={s.nexush5}>
                                    The Boarding Passes are separated by their
                                    contribution to the new world of web3. Each
                                    character type will have a unique challenge
                                    in order to cultivate a diverse list of
                                    creators . This list will give you access to
                                    the Boarding Pass NFT and its exclusive
                                    perks. Stay alert and don’t get left behind
                                    in the deteriorating space of Web2.
                                </h5>
                                <p className={s.boardingDescr}>
                                    Keep your eyes on the #announcements and
                                    #boarding-pass channels for these
                                    challenges, they will essentially guarantee
                                    your seat on the rocket to the new world.
                                    These challenges will be presented
                                    sporadically and closed off in short sprints
                                    of time, so stay active in the Discord to
                                    make sure you lock down your respective
                                    boarding pass and don’t get left behind in
                                    the deteriorating space of Web2.
                                </p>

                                <div className={s.button}>
                                    <Button
                                        size='large'
                                        text='Free Mint'
                                        color='green'
                                        icon={<Coins />}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.voyagers}>
                    <div className='container'>
                        <h2>The Voyagers</h2>
                        <div className={s.slider}>
                            <Swiper
                                modules={[Pagination, Navigation]}
                                effect='fade'
                                slidesPerView={1}
                                spaceBetween={30}
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
                                    <div
                                        className={cn(
                                            s.card,
                                            theme === "light" && s.light
                                        )}
                                    >
                                        <img
                                            src={"/captain.png"}
                                            alt='Captain'
                                        />
                                        <h3>Captain</h3>
                                        <button type='button' className={s.tag}>
                                            Founder
                                        </button>
                                        <div className={s.description}>
                                            <p>
                                                Pulling together the pieces of
                                                the puzzle and ensuring the
                                                community is working in harmony
                                                to terraform the planet in the
                                                same direction - the founders.
                                                The captain’s vision is brought
                                                to life by those to see the
                                                light at the end of at the end
                                                of the tunnel.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className={cn(
                                            s.card,
                                            theme === "light" && s.light
                                        )}
                                    >
                                        <img
                                            src={"/mechanic.png"}
                                            alt='Mechanic'
                                        />
                                        <h3>Mechanic</h3>
                                        <button type='button' className={s.tag}>
                                            Dev
                                        </button>
                                        <div className={s.description}>
                                            <p>
                                                The brains behind the ideas -
                                                the engineers/developers.
                                                Creating technical solutions to
                                                the complex challenges that come
                                                with terraforming a new world;
                                                they build quietly in the
                                                back-end and help connect the
                                                dots to bring innovation to
                                                life.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className={cn(
                                            s.card,
                                            theme === "light" && s.light
                                        )}
                                    >
                                        <img
                                            src={"/architect.png"}
                                            alt='Architect'
                                        />
                                        <h3>Architect</h3>
                                        <button type='button' className={s.tag}>
                                            Artist
                                        </button>
                                        <div className={s.description}>
                                            <p>
                                                The creatives that take ideas
                                                and bring them to life in a
                                                beautiful way - the artists.
                                                Without grace in the design of a
                                                of a new world, it would become
                                                nothing more than a lifeless
                                                land of chrome structures.
                                                structures. The architects
                                                breathe life into the planet and
                                                create an aesthetic that makes
                                                it worth populating.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className={cn(
                                            s.card,
                                            theme === "light" && s.light
                                        )}
                                    >
                                        <img
                                            src={"/journalist.png"}
                                            alt='Journalist'
                                        />
                                        <h3>Journalist</h3>
                                        <button type='button' className={s.tag}>
                                            Influencer
                                        </button>
                                        <div className={s.description}>
                                            <p>
                                                On a mission to spread ideas and
                                                share news of innovations and
                                                creation - the marketers. A new
                                                business - a beautiful piece of
                                                art - an innovative idea; do
                                                they really exist if the people
                                                of the planet don’t KNOW they
                                                exist? The journalists spread
                                                the word to ensure the
                                                population is aware of what’s
                                                happening on the planet.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className={cn(
                                            s.card,
                                            theme === "light" && s.light
                                        )}
                                    >
                                        <img
                                            src={"/merchant.png"}
                                            alt='Merchant'
                                        />
                                        <h3>Merchant</h3>
                                        <button type='button' className={s.tag}>
                                            Investor
                                        </button>
                                        <div className={s.description}>
                                            <p>
                                                The driving force behind the
                                                economy of the new world - the
                                                investors. Those who decide what
                                                the direction of the market
                                                looks like, support businesses
                                                and create financial abundance
                                                for the builders and community
                                                alike.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className={cn(
                                            s.card,
                                            theme === "light" && s.light
                                        )}
                                    >
                                        <img
                                            src={"/explorer.png"}
                                            alt='Explorer'
                                        />
                                        <h3>Explorer</h3>
                                        <button type='button' className={s.tag}>
                                            Collector
                                        </button>
                                        <div className={s.description}>
                                            <p>
                                                Like true mavens, stimulating
                                                the economy as the backbone to
                                                all initiatives of the new world
                                                - the collector. All
                                                innovations, projects, and
                                                progress of this terraformed
                                                society would be all for naught
                                                if not for these community
                                                members actively participating
                                                and engaging in the wild world
                                                of web3.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperButtonPrev>
                                    <svg
                                        width='11'
                                        height='28'
                                        viewBox='0 0 11 28'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            /* eslint-disable-next-line max-len */
                                            d='M9.69256 0.124353C9.18943 -0.141586 8.53547 0.0330498 8.23191 0.514414L0.1532 13.3249C0.0452833 13.4961 -0.00382233 13.6829 0.000309944 13.8646C-0.00328827 14.0455 0.0458603 14.2314 0.153244 14.4016L8.23204 27.2123C8.53558 27.6936 9.18948 27.8682 9.69257 27.6023C10.1957 27.3364 10.3574 26.7306 10.0539 26.2493L2.24294 13.8634L10.0539 1.47747C10.3575 0.996101 10.1957 0.390292 9.69256 0.124353Z'
                                            fill='#51BEA7'
                                        />
                                    </svg>
                                </SwiperButtonPrev>
                                <SwiperButtonNext>
                                    <svg
                                        width='11'
                                        height='28'
                                        viewBox='0 0 11 28'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            /* eslint-disable-next-line max-len */
                                            d='M0.909984 0.124353C1.41311 -0.141586 2.06707 0.0330498 2.37063 0.514414L10.4493 13.3249C10.5573 13.4961 10.6064 13.6829 10.6022 13.8646C10.6058 14.0455 10.5567 14.2314 10.4493 14.4016L2.3705 27.2123C2.06696 27.6936 1.41306 27.8682 0.909968 27.6023C0.40688 27.3364 0.245114 26.7306 0.548653 26.2493L8.3596 13.8634L0.548639 1.47747C0.245075 0.996101 0.406855 0.390292 0.909984 0.124353Z'
                                            fill='#51BEA7'
                                        />
                                    </svg>
                                </SwiperButtonNext>
                            </Swiper>
                        </div>
                    </div>
                </section>
            </div>
            <section className={cn(s.faq, theme === "light" && s.light)}>
                <div className='container'>
                    <h2>FAQ</h2>
                    <div className={s.faq__list}>
                        {faqs.map((faq, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Spoiler key={`faq-${index}`} title={faq.question}>
                                <p>{faq.answer}</p>
                            </Spoiler>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
