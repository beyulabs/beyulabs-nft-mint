import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavRoute } from '../../types/common';
import { routes } from '@utils/constants';

import s from './Nav.module.scss';

interface NavProps {
  setMenuOpen: (open: boolean) => void;
}

function Nav({ setMenuOpen }: NavProps) {
  const nextRouter = useRouter();

  const routeLinks = routes.map((route: NavRoute, index) => {
    return (
      <li
        key={`route-${index}`}
        className={nextRouter.pathname === route.path ? s.active : ''}
      >
        {route.enabled ? (
          <Link href={route.path}>{route.title}</Link>
        ) : (
          route.title
        )}
      </li>
    );
  });

  return (
    <div className={s.nav}>
      <ul className={s.nav__links}>{routeLinks}</ul>
    </div>
  );
}

export default Nav;
