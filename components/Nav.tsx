import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavRoute } from "../types/common";
import { routes } from "../constants";

interface NavProps {
  setMenuOpen: (open: boolean) => void;
}

function Nav({ setMenuOpen }: NavProps) {
  const nextRouter = useRouter();

  const routeLinks = routes.map((route: NavRoute, index) => {
    const cn = classNames(
      {
        "font-bold drop-shadow-md": nextRouter.pathname === route.path,
        "font-normal": nextRouter.pathname !== route.path,
        "opacity-50 hover:cursor-not-allowed": !route.enabled,
        "hover:drop-shadow": route.enabled,
      },
      "ml-8 mr-8 text-white text-sm"
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
      <ul className="hidden sm:hidden md:ml-4 md:flex md:flex-row text-white">
        {routeLinks}
      </ul>
    </div>
  );
}

export default Nav;
