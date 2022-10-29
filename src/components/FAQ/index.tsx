import React, { useState } from 'react';
// @ts-ignore
import Slide from 'react-reveal/Slide';
import FAQItem from './FAQItem';

import s from './faq.module.scss';

const FAQ = ({ questionsAnswers }: any) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const spoilerToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const renderedQuestionsAnswers = questionsAnswers.map(
    (item: any, index: number) => {
      const showDescription = index === activeIndex ? 'show-description' : '';
      const fontWeightBold = index === activeIndex ? 'font-weight-bold' : '';
      const ariaExpanded = index === activeIndex ? 'true' : 'false';
      return (
        <Slide bottom ssrFadeout>
          <FAQItem
            showDescription={showDescription}
            fontWeightBold={fontWeightBold}
            ariaExpanded={ariaExpanded}
            item={item}
            index={index}
            onClick={() => spoilerToggle(index)}
            /* eslint-disable-next-line react/no-array-index-key */
            key={`faq__item__${index}`}
          />
        </Slide>
      );
    }
  );

  return <div className={s.faq__list}>{renderedQuestionsAnswers}</div>;
};

export default FAQ;
