import Link from "next/link";
import classNames from "classnames";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavRoute } from "../types/common";
import { routes } from "../constants";
import SocialIcons from "./SocialIcons";

interface MobileMenuProps {
  setMenuOpen: (open: boolean) => void;
}

const MobileMenu = ({ setMenuOpen }: MobileMenuProps) => {
  const createMenuItems = () => {
    return routes.map((route: NavRoute) => {
      const cn = classNames(
        {
          "opacity-50 hover:cursor-not-allowed": !route.enabled,
          "hover:text-purple-500": route.enabled,
        },
        "mb-8 text-4xl"
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
            route.title
          )}
        </li>
      );
    });
  };

  return (
    <div className="fixed flex h-full w-full px-8 py-6 bg-teal-500 z-50 top-0 left-0">
      <div className="absolute text-white cursor-pointer z-50">
        <FontAwesomeIcon
          className="mr-2"
          width={24}
          height={24}
          icon={faX}
          onClick={() => {
            document.body.style.overflow = "auto";
            setMenuOpen(false);
          }}
        />
      </div>
      <div className="relative w-full flex flex-col justify-center items-center text-white">
        <ul className="text-center mb-16">{createMenuItems()}</ul>
        <SocialIcons />
      </div>
    </div>
  );
};

export default MobileMenu;
