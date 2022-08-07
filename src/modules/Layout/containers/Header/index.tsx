import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from '@modules/Layout/context/AppContext';
import Nav from '@components/Nav/Nav';
import SocialIcons from '@components/SocalIcons/SocialIcons';

import { Button } from '@components/Button/button';
import { Coins, Wallet } from '@components/Icons/Icons';
import cn from 'classnames';
import useMediaQuery from '@modules/Layout/hooks/useMediaQuery';

import s from './Header.module.scss';

interface HeaderProps {
  setMenuOpen: (open: boolean) => void;
}

const Header = ({ setMenuOpen }: HeaderProps) => {
  const { handleSwitchLightMode, isLightMode } = useContext(AppContext);
  const isTablet = useMediaQuery(992);
  const [activeNav, setActiveNav] = useState<boolean>(false);

  const AppLogoDark = '/nexus-voyagers-logotype-green-white.svg';
  const AppLogoLight = '/nexus-voyagers-logotype-green-dark.svg';

  const SwitchLightMode = () => {
    isLightMode ? handleSwitchLightMode(false) : handleSwitchLightMode(true);
  };

  const ToggleThemeMode = () => {
    return (
      <>
        <a onClick={SwitchLightMode} className={s.ToggleTheme}>
          <Image
            src={isLightMode ? '/dark-mode-page.svg' : '/light-mode-page.svg'}
            alt="Theme"
            width="26"
            height="26"
          />
          <span>
            {isLightMode ? <span>Dark </span> : <span>Light </span>}
            <span>mode</span>
          </span>
        </a>
      </>
    );
  };

  const menu = (
    <div className={isTablet ? 'container' : ''}>
      <div className={s.menu}>
        <div className={s.block}>
          <h5>Menu</h5>
          <Nav setMenuOpen={setMenuOpen} />
        </div>
        <hr />
        <div className={s.block}>
          <h5>Social</h5>
          <SocialIcons />
        </div>
        <ToggleThemeMode />
        <hr />
        <div className={s.buttons}>
          <Button text="Mint" color="green" icon={<Coins />} disabled />
          <Button
            text="Conect wallet"
            color="transparent"
            icon={<Wallet />}
            disabled
          />
        </div>
      </div>
    </div>
  );

  const navIconToggle = () => {
    setActiveNav((prev) => !prev);
  };

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__row}>
          <div className="logo">
            <Link href="/" passHref>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={isLightMode ? AppLogoLight : AppLogoDark}
                alt="BeYu Labs logo"
                className="cursor-pointer drop-shadow-md"
                width="160"
                height="47"
              />
            </Link>
          </div>
          {isTablet ? (
            <button
              className={cn(s.nav_icon, activeNav && s.nav_icon_active)}
              onClick={navIconToggle}
              role="button"
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
  );
};

export default Header;
