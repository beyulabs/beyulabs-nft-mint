import Image from 'next/image';
import classNames from 'classnames';

import { beyuSocialIcons } from '@utils/constants';

import s from './SocialIcons.module.scss';

const SocialIcons = () => (
  <ul className={s.socials}>
    {beyuSocialIcons
      .filter((icon) => icon.enabled)
      .map((icon) => {
        const liClass = classNames('mx-2 sm:mx-2 md:mx-4', {
          'opacity-50 hover:cursor-not-allowed': !icon.enabled,
          'origin-center fill-nexusGreen': icon.enabled,
        });
        const aClass = classNames({
          'hover:cursor-not-allowed': !icon.enabled,
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
                width={22}
                height={22}
                className="hover:shadow"
                quality={100}
              />
              <span>{icon.name}</span>
            </a>
          </li>
        );
      })}
  </ul>
);

export default SocialIcons;
