import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import { NavRoutes } from "../types/common";

function Nav() {
  const nextRouter = useRouter();

  const routes: NavRoutes[] = [
    {
      path: "/",
      title: "mint",
    },
    {
      path: "/team",
      title: "team",
    },
    {
      path: "/gallery",
      title: "gallery",
    },
    {
      path: "/wallet",
      title: "wallet",
    },
  ];

  const routeLinks = routes.map((route: NavRoutes, index) => {
    const cn = classNames(
      {
        "font-bold": nextRouter.pathname === route.path,
        "font-thin": nextRouter.pathname !== route.path,
      },
      "pr-6"
    );

    return (
      <li key={`route-${index}`} className={cn}>
        <Link href={route.path}>{route.title}</Link>
      </li>
    );
  });

  return <ul className="flex text-white">{routeLinks}</ul>;
}

export default Nav;
