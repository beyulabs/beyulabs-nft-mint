import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { NavRoute } from "../types/common";

import beyuLabs from "../public/beyulabs-logo.png";

function Nav() {
  const nextRouter = useRouter();

  const routes: NavRoute[] = [
    {
      path: "/team",
      title: "team",
      enabled: true,
    },
    {
      path: "/gallery",
      title: "gallery",
      enabled: false,
    },
    {
      path: "/wallet",
      title: "wallet",
      enabled: false,
    },
  ];

  const routeLinks = routes
    .map((route: NavRoute, index) => {
      const cn = classNames(
        {
          "font-bold drop-shadow-md": nextRouter.pathname === route.path,
          "font-normal": nextRouter.pathname !== route.path,
          "opacity-50": !route.enabled,
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
      <Link href="/" passHref>
        <Image
          src={beyuLabs}
          alt="BeYu Labs logo"
          className="cursor-pointer drop-shadow-md"
          width={48}
          height={48}
        />
      </Link>
      <ul className="ml-4 flex flex-row text-white">{routeLinks}</ul>
    </div>
  );
}

export default Nav;
