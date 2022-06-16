import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Disclosure } from "@headlessui/react";

import { faqs } from "../constants";
import { FAQProps } from "../types/common";

const FAQ = ({ question, answer }: FAQProps) => {
  return (
    <div className="py-6 px-9 mb-5 rounded-xl bg-nexusFooterDivider">
      <Disclosure>
        {({ open }) => (
          <>
            <div
              className={`flex flex-row justify-between ${open ? "mb-6" : ""}`}
            >
              <Disclosure.Button>{question}</Disclosure.Button>
              <Disclosure.Button>
                <FontAwesomeIcon icon={faPlus} width={24} />
              </Disclosure.Button>
            </div>

            <Disclosure.Panel className="text-gray-500">
              {answer}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

const FAQList = () => {
  return (
    <div>
      <h2 className="text-center text-5xl mb-20">FAQ</h2>
      {faqs.map((faq, index) => {
        return (
          <FAQ
            key={`faq-${index}`}
            answer={faq.answer}
            question={faq.question}
          />
        );
      })}
    </div>
  );
};

export default FAQList;
