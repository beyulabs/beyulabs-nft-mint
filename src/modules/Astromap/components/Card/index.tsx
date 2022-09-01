import React, { ReactNode, useState } from 'react';
import cn from 'classnames';

import { Close } from '@components/Icons/Icons';
import useMediaQuery from '@modules/Layout/hooks/useMediaQuery';
import s from './AstroCard.module.scss';

interface TeamUserProps {
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
  isRight?: boolean;
  isGreen?: boolean;
  arrow?: ReactNode;
}

const AstroCard = ({
  title,
  description,
  image,
  children,
  isGreen,
  isRight,
}: TeamUserProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const isTablet = useMediaQuery(992);

  const showToggle = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        onClick={showToggle}
        className={cn(s.card, isGreen && s.green, isRight && s.right)}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={showToggle} className={cn(s.bg, showModal && s.active)} />
      <div className={cn(s.modal, showModal && s.active)}>
        <div className={s.modal__row}>
          <div className={s.image}>
            {/* {!isTablet ? ( */}
            {/*  <img src={'/Photo_modal.png'} alt="" /> */}
            {/* ) : ( */}
            {/*  <img src={'/modal_img_mobile.png'} alt="" /> */}
            {/* )} */}
            <img src={image} alt="" />
          </div>
          <div className={s.text}>
            <h2>{title}</h2>
            <div className={s.text__wrap}>{children}</div>
          </div>
        </div>
        <button onClick={showToggle} type="button" className={s.close}>
          <Close />
        </button>
      </div>
    </>
  );
};

export default AstroCard;
