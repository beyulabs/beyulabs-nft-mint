import React, { useEffect, useState } from "react"
import cn from "classnames"
import HtmlMeta from "@components/HtmlMeta"
import useMediaQuery from "@modules/Layout/hooks/useMediaQuery"
import { useTheme } from "next-themes"
import TeamList from "@modules/TeamPage/components/TeamList/intex"
import s from "./TeamPage.module.scss"

const TeamPage = () => {
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
                    <TeamList />
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
                                    <span>Don&apos;t procrastinate</span>
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
                                    <span>Don&apos;t procrastinate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamPage
