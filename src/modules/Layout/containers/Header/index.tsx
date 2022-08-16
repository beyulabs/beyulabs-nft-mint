/* eslint-disable max-len */
import React, { useState } from "react"
import Link from "next/link"
import SocialIcons from "@components/SocalIcons/SocialIcons"

import { Button } from "@components/Button/button"
import { Coins, Wallet } from "@components/Icons/Icons"
import cn from "classnames"
import useMediaQuery from "@modules/Layout/hooks/useMediaQuery"

import { routes } from "@utils/constants"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"
import { NavRoute } from "../../../../types/common"

import s from "./Header.module.scss"

const Header = () => {
    const { theme, setTheme } = useTheme()
    const isTablet = useMediaQuery(992)
    const nextRouter = useRouter()
    const [activeNav, setActiveNav] = useState<boolean>(false)

    const SwitchLightMode = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const ToggleThemeMode = () => (
        <>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <a onClick={SwitchLightMode} className={s.ToggleTheme}>
                {theme === "light" ? (
                    <img
                        src={"/dark-mode-page.svg"}
                        alt='Theme'
                        width='26'
                        height='26'
                    />
                ) : (
                    <img
                        src={"/light-mode-page.svg"}
                        alt='Theme'
                        width='26'
                        height='26'
                    />
                )}
                <span>
                    {theme === "light" ? (
                        <span>Dark </span>
                    ) : (
                        <span>Light </span>
                    )}
                    <span>mode</span>
                </span>
            </a>
        </>
    )

    const menu = (
        <div className={isTablet ? "container" : ""}>
            <div className={s.menu}>
                <div className={s.block}>
                    <h5>Menu</h5>
                    <div className={s.nav}>
                        <ul className={s.nav__links}>
                            {routes.map((route: NavRoute) => (
                                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                                <li
                                    key={`route-${route.path}`}
                                    className={
                                        nextRouter.pathname === route.path
                                            ? s.active
                                            : ""
                                    }
                                    onClick={() => setActiveNav(false)}
                                >
                                    {route.enabled ? (
                                        <Link href={route.path}>
                                            {route.title}
                                        </Link>
                                    ) : (
                                        route.title
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={s.block}>
                    <h5>Social</h5>
                    <SocialIcons />
                </div>
                <ToggleThemeMode />
                <hr />
                <div className={s.buttons}>
                    <Button
                        text='Mint'
                        color='green'
                        icon={<Coins />}
                        disabled
                    />
                    <Button
                        text='Connect wallet'
                        color='transparent'
                        icon={<Wallet />}
                        disabled
                    />
                </div>
            </div>
        </div>
    )

    const navIconToggle = () => {
        setActiveNav((prev) => !prev)
    }

    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.header__row}>
                    <div className='logo'>
                        {theme === "light" && (
                            <Link href='/'>
                                <a>
                                    <img
                                        src={
                                            "/nexus-voyagers-logotype-green-dark.svg"
                                        }
                                        alt='BeYu Labs logo'
                                        width='160'
                                        height='47'
                                    />
                                </a>
                            </Link>
                        )}
                        {theme === "dark" && (
                            <Link href='/'>
                                <a>
                                    <img
                                        src={
                                            "/nexus-voyagers-logotype-green-white.svg"
                                        }
                                        alt='BeYu Labs logo'
                                        width='160'
                                        height='47'
                                    />
                                </a>
                            </Link>
                        )}
                    </div>
                    {isTablet ? (
                        // eslint-disable-next-line jsx-a11y/no-redundant-roles,react/button-has-type
                        <button
                            className={cn(
                                s.nav_icon,
                                activeNav && s.nav_icon_active
                            )}
                            onClick={navIconToggle}
                            role='button'
                            tabIndex={0}
                        >
                            <span />
                            <span />
                            <span />
                            <span />
                        </button>
                    ) : (
                        menu
                    )}
                </div>
            </div>
            <div className={cn(s.mobileNav, activeNav && s.active)}>{menu}</div>
        </header>
    )
}

export default Header
