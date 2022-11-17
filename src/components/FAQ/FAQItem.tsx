import React from 'react';

import cn from 'classnames';
import { SpoilerMinus, SpoilerPlus } from '@components/Icons/Icons';
import s from './faq.module.scss';

const INITIAL_MAX_HEIGHT = 200;

const FAQItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}: any) => {
  const collapseMenuRef = React.useRef(null);
  const isFirstRender = React.useRef(true);
  const maxHeightRef = React.useRef(INITIAL_MAX_HEIGHT);

  React.useEffect(() => {
    if (collapseMenuRef.current && !isFirstRender.current) {
      if (
        // @ts-ignore
        maxHeightRef.current > collapseMenuRef.current.offsetHeight &&
        maxHeightRef.current !== INITIAL_MAX_HEIGHT
      ) {
        // HALT!! // Someone collapsed the menu too early! // The offsetHeight is not full.
        return;
      }
      // @ts-ignore
      maxHeightRef.current = collapseMenuRef.current.offsetHeight;
    }
    if (fontWeightBold && isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [fontWeightBold, showDescription, ariaExpanded]);
  return (
    <div
      className={cn(s.spoiler, fontWeightBold && s.active)}
      key={`faq-item-${item.index}`}
      ref={collapseMenuRef}
    >
      <dt>
        <button
          aria-expanded={ariaExpanded}
          aria-controls={`faq${index + 1}_desc`}
          data-qa="faq__question-button"
          // className={`faq__question-button ${fontWeightBold}`}
          onClick={onClick}
          className={cn(s.spoiler__head, {
            [s.spoiler__head__active]: fontWeightBold,
          })}
          type="button"
        >
          <span>{item.question}</span>
          <span className={cn('text-nexusGreen', s.icon)}>
            {!fontWeightBold ? <SpoilerPlus /> : <SpoilerMinus />}
          </span>
        </button>
      </dt>
      <dd>
        <div
          id={`faq${index + 1}_desc`}
          data-qa="faq__desc"
          className={cn(s.spoiler__text, {
            [s.spoiler__text__active]: showDescription,
          })}
          style={
            showDescription
              ? { maxHeight: maxHeightRef.current }
              : { maxHeight: 0 }
          }
        >
          <p>{item.answer}</p>
        </div>
      </dd>
    </div>
  );
};

export default FAQItem;
