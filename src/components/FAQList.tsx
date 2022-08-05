import Spoiler from './Spoiler';

import { faqs } from '../utils/constants';

const FaqItem = () => {
  return faqs.map((faq, index) => (
    // <FAQ key={`faq-${index}`} answer={faq.answer} question={faq.question} />
    <Spoiler key={`faq-${index}`} title={faq.question}>
      {faq.answer}
    </Spoiler>
  ));
};

const FAQList = () => {
  return (
    <>
      <h2>FAQ</h2>
      {FaqItem()}
    </>
  );
};

export default FAQList;
