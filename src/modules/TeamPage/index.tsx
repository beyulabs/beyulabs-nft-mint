import React, { useEffect, useState } from "react"
import cn from "classnames"
import HtmlMeta from "@components/HtmlMeta"
import { teamMembers } from "@utils/constants"
import TeamUser from "@modules/TeamPage/components/TeamUser/intex"
import useMediaQuery from "@modules/Layout/hooks/useMediaQuery"
import { useTheme } from "next-themes"
import { TeamMember } from "../../types/common"
import s from "./TeamPage.module.scss"

const TeamPage = () => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const isTablet = useMediaQuery(992)
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <>
            <div className={cn(s.team, theme === "dark" && s.dark)}>
                <div className='container'>
                    <HtmlMeta title='Team' />
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
                    <div className={s.partners}>
                        <h2>Partners:</h2>
                        <div className={s.cards}>
                            <div className={s.card}>
                                <img src={"/team_partner_1.png"} alt='' />
                                <div className={s.text}>
                                    <h3>Project 3</h3>
                                    <p>
                                        Some description about project. Keep
                                        your eyes on the
                                        <span>#announcements</span> and{" "}
                                        <span>#boarding-pass</span> channels for
                                        these challenges, they will essentially
                                        guarantee your seat on the rocket to the
                                        new world. These challenges will be
                                        presented sporadically
                                    </p>
                                    <span>don&apos;t procrastinate</span>
                                </div>
                            </div>
                            <div className={s.card}>
                                {isTablet ? (
                                    <img src={"/team_partner_2.png"} alt='' />
                                ) : (
                                    <img
                                        src={"/team_partner_2_desktop.png"}
                                        alt=''
                                    />
                                )}
                                <div className={s.text}>
                                    <h3>BDH (Legal)</h3>
                                    <p>
                                        Some description about project. Keep
                                        your eyes on the
                                        <span>#announcements</span> and{" "}
                                        <span>#boarding-pass</span> channels for
                                        these challenges, they will essentially
                                        guarantee your seat on the rocket to the
                                        new world. These challenges will be
                                        presented sporadically
                                    </p>
                                    <span>don&apos;t procrastinate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(s.bg, isHover && s.active)} />
        </>
    )
}

export default TeamPage
