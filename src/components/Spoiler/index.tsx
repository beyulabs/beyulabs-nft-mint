import { ReactNode, useState } from 'react';
import cn from 'classnames';
import { SpoilerMinus, SpoilerPlus } from '@components/Icons/Icons';

import s from './Spoiler.module.scss';

interface SpoilerProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

const Spoiler = ({ title, children, className }: SpoilerProps) => {
  const [activeSpoiler, setActiveSpoiler] = useState<boolean>(false);

  const spoilerToggle = () => {
    setActiveSpoiler((prev) => !prev);
  };

  return (
    <div className={cn(s.spoiler, activeSpoiler && s.active)}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={cn(
          s.spoiler__head,
          {
            [s.spoiler__head__active]: activeSpoiler,
          },
          className,
          'spoiler__head'
        )}
        onClick={spoilerToggle}
      >
        <span>{title}</span>
        <span className={cn('text-nexusGreen', s.icon)}>
          {!activeSpoiler ? <SpoilerPlus /> : <SpoilerMinus />}
        </span>
      </div>
      <div
        className={cn(s.spoiler__text, {
          [s.spoiler__text__active]: activeSpoiler,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Spoiler;
