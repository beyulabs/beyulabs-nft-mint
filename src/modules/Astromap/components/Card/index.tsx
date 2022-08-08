import React, { ReactNode } from 'react';

import s from './AstroCard.module.scss';

interface TeamUserProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const AstroCard = ({ title, description, children }: TeamUserProps) => (
  <>
    <div className={s.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className={s.modal}>{children}</div>
  </>
);

export default AstroCard;
