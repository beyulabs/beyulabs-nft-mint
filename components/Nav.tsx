import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavRoute } from "../types/common";
import { routes } from "../constants";
import hamburgerSVG from "../public/hamburger.svg";

interface NavProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

function Nav({ menuOpen, setMenuOpen }: NavProps) {
  const nextRouter = useRouter();

  const routeLinks = routes.map((route: NavRoute, index) => {
    const cn = classNames(
      {
        "font-bold drop-shadow-md": nextRouter.pathname === route.path,
        "font-normal": nextRouter.pathname !== route.path,
        "opacity-50 hover:cursor-not-allowed": !route.enabled,
        "hover:drop-shadow": route.enabled,
      },
      "mr-6 text-white"
    );

    return (
      <li key={`route-${index}`} className={cn}>
        {route.enabled ? (
          <Link href={route.path}>{route.title}</Link>
        ) : (
          route.title
        )}
      </li>
    );
  });

  return (
    <div className="flex items-center z-50">
      <div className="text-white cursor-pointer md:hidden">
        {menuOpen ? (
          <FontAwesomeIcon
            width={24}
            height={24}
            icon={faX}
            onClick={() => {
              setMenuOpen(false);
              document.body.style.overflow = "auto";
            }}
          />
        ) : (
          <Image
            className="mr-2"
            alt="Menu"
            src={hamburgerSVG}
            onClick={() => {
              setMenuOpen(true);
              document.body.style.overflow = "hidden";
            }}
          />
        )}
      </div>
      <ul className="hidden sm:hidden md:ml-4 md:flex md:flex-row text-black">
        {routeLinks}
      </ul>
    </div>
  );
}

export default Nav;
