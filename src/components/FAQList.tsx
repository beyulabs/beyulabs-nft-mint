import Spoiler from "./Spoiler"

import { faqs } from "../utils/constants"

const FaqItem = () =>
    faqs.map((faq, index) => (
        // <FAQ key={`faq-${index}`} answer={faq.answer} question={faq.question} />
        // eslint-disable-next-line react/no-array-index-key
        <Spoiler key={`faq-${index}`} title={faq.question}>
            {faq.answer}
        </Spoiler>
    ))

const FAQList = () => (
    <>
        <h2>FAQ</h2>
        {FaqItem()}
    </>
)

export default FAQList
