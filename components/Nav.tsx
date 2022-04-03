import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavRoute } from "../types/common";
import { routes } from "../constants";

import beyuLabs from "../public/beyulabs-logo.png";

interface NavProps {
  setMenuOpen: (open: boolean) => void;
}

function Nav({ setMenuOpen }: NavProps) {
  const nextRouter = useRouter();

  const routeLinks = routes
    .filter((route: NavRoute) => {
      return route.enabled;
    })
    .map((route: NavRoute, index) => {
      const cn = classNames(
        {
          "font-bold drop-shadow-md": nextRouter.pathname === route.path,
          "font-normal": nextRouter.pathname !== route.path,
          "opacity-50 hover:cursor-not-allowed": !route.enabled,
          "hover:text-purple-400": route.enabled,
        },
        "mr-6"
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
    <div className="flex items-center">
      <div className="text-white cursor-pointer md:hidden">
        <FontAwesomeIcon
          className="mr-2"
          width={24}
          height={24}
          icon={faBars}
          onClick={() => {
            setMenuOpen(true);
            document.body.style.overflow = "hidden";
          }}
        />
      </div>
      <div className="hidden md:block">
        <Link href="/" passHref>
          <Image
            src={beyuLabs}
            alt="BeYu Labs logo"
            className="cursor-pointer drop-shadow-md"
            width={48}
            height={48}
          />
        </Link>
      </div>
      <ul className="hidden sm:hidden md:ml-4 md:flex md:flex-row text-white">
        {routeLinks}
      </ul>
    </div>
  );
}

export default Nav;
