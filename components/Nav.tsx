import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { faX } from "@fortawesome/free-solid-svg-icons";
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
      "mr-6 text-white lg:text-base"
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
    <div className="flex flex-row-reverse justify-center z-50">
      <div className="text-white cursor-pointer md:ml-4 lg:hidden">
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
      {!menuOpen && (
        <ul className="hidden text-black lg:flex lg:flex-row lg:items-center">
          {routeLinks}
        </ul>
      )}
    </div>
  );
}

export default Nav;
