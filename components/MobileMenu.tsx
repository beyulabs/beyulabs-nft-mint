import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import { NavRoute } from "../types/common";
import { routes, beyuSocialIcons } from "../constants";
import Header from "./Header";

import coinsSVG from "../public/coins.svg";
import walletSVG from "../public/wallet.svg";

interface MobileMenuProps {
  setMenuOpen: (open: boolean) => void;
  menuOpen: boolean;
}

const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  const createMenuItems = () => {
    return routes.map((route: NavRoute) => {
      const cn = classNames(
        "py-2 mb-2 uppercase",
        {
          "opacity-50 hover:cursor-not-allowed": !route.enabled,
          "hover:text-purple-400": route.enabled,
        },
        "text-xl"
      );

      return (
        <li
          key={route.path}
          className={cn}
          onClick={() => {
            document.body.style.overflow = "auto";
            setMenuOpen(false);
          }}
        >
          {route.enabled ? (
            <Link href={route.path}>{route.title}</Link>
          ) : (
            <Link href={route.path}>
              <a className="cursor-not-allowed">{route.title}</a>
            </Link>
          )}
        </li>
      );
    });
  };

  const createMobileSocials = () => {
    return beyuSocialIcons.map((icon) => {
      const liClass = classNames("mx-2 mb-2 py-2 sm:mx-2 md:mx-4", {
        "opacity-50": !icon.enabled,
        "origin-center fill-nexusGreen": icon.enabled,
      });
      const aClass = classNames("flex flex-row items-center", {
        "cursor-not-allowed": !icon.enabled,
      });

      return (
        <li key={`icon-${icon.name}`} className={liClass}>
          <a
            href={icon.url}
            rel="nofollow noreferrer"
            target="_blank"
            className={aClass}
          >
            <Image
              src={icon.image}
              alt={`${icon.name} logo`}
              width={28}
              height={28}
              className="hover:shadow"
              quality={100}
            />
            <span className="inline-block ml-4 uppercase">{icon.name}</span>
          </a>
        </li>
      );
    });
  };

  return (
    <>
      <div className="fixed h-full w-full pb-6 bg-nexusDarkBg top-0 left-0 z-40">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="flex flex-col mt-4 h-full md:mt-8">
          <div className="relative w-full flex flex-col justify-center items-center text-white mb-8 px-4">
            <h2 className="w-full mb-4">Menu</h2>
            <ul className="w-full">{createMenuItems()}</ul>
          </div>
          <hr className="opacity-40 bg-nexusHeaderDivider mb-8" />
          <div className="relative w-full flex flex-col justify-center items-center text-white mb-8 px-4">
            <h2 className="w-full mb-4">Social</h2>
            <ul className="w-full">{createMobileSocials()}</ul>
          </div>
          <hr className="opacity-40 bg-nexusHeaderDivider mb-8" />
          <div className="flex flex-col px-4">
            <button
              disabled
              className="mb-4 flex flex-row justify-center mx-2 rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-4 py-2 cursor-not-allowed disabled:opacity-50"
            >
              <Image alt="Coins" src={coinsSVG} />
              <span className="inline-block ml-2">Mint</span>
            </button>
            <button
              disabled
              className="mb-4 flex flex-row justify-center border mx-2 rounded-lg text-white bg-transparent px-4 py-2 cursor-not-allowed disabled:opacity-50"
            >
              <Image alt="Coins" src={walletSVG} />
              <span className="inline-block ml-2">Connect wallet</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
